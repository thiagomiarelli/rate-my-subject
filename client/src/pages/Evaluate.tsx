import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EvaluatePage from "../components/Evaluate/Evaluate"
import { myData } from "../requests/myData";
import { getSubject } from "../requests/subject";
import { evaluate, iEvaluate } from "../requests/Subjects/evaluate";
import { subjectProfessors } from "../requests/Subjects/subjectProfessors";


export interface iProfessor {
    name: string;
    id:string;
}

interface iSubjectProps {
    // handleSubmit: () => void;
    subject_name: string;
    id: string;
}

export default function Evaluate(){

    const {id} = useParams()
    const navigate = useNavigate()
    const [professors, setProfessors] = useState<iProfessor[]>([]);
    const [subjectName, setSubjectName] = useState<string>('')
    
    useEffect(() => {
        subjectProfessors(String(id))
            .then((res) => {
                const aux:iProfessor[] = res.map((item) => ({name: item.name, id:item.id}))
                setProfessors(aux)
            })

        getSubject(String(id))
            .then((res) => {
                setSubjectName(res.name)
            })    
    }, [])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
    
        
        myData()
            .then((res) => {
                const userID = res.data.id;
                
                const body:iEvaluate = {
                    rating: Number(data.get('rating')),
                    difficulty: Number(data.get('difficulty')),
                    recommended: Boolean(data.get('recommended')),
                    evaluation_method: String(data.get('evaluation_method')),
                    comment: String(data.get('comment')),
                    student: userID,
                    professor: String(data.get('professor')),
                    subject: String(id),
                };
                navigate(`../subject/${id}`)
                evaluate(body)
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));


            })
            .catch((err) => {
                console.log(err.response);
            })

    };

    return (<EvaluatePage
        handleSubmit={handleSubmit}
        subject_name={subjectName}
        professors={professors}
    />)
}