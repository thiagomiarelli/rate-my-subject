import {useState, useEffect} from 'react'

import {SubjectProfile} from "../components/Subject/SubjectProfile";

// request
import { getSubject }  from "../requests/subject";
import { subjectProfessors } from '../requests/Subjects/subjectProfessors';

// router dom
import { useParams } from "react-router-dom";

import { Subject } from '../types/subject';
import { Professor } from '../types/professor';
import { Evaluation } from '../types/evaluation';

// MUI
import { LoadingPage } from './LoadingPage/LoadingPage';
import { avaliacoes } from '../requests/evaluations';

export default function SubjectPage() {
    const {id} = useParams()
        
    const [subject, setSubject] = useState<Subject>()
    const [professors, setProfessors] = useState<Professor[]>()
    const [evaluations, setEvaluations] = useState<Evaluation[]>()

    useEffect(() => {
        const fetch = async () => {
            try {
                if(!id)
                    throw new Error("Subject id not found");
                const subject = await getSubject(id)
                setSubject(subject)
                const professors = await subjectProfessors(id)  
                setProfessors(professors)
                const evaluations = await avaliacoes(id)
                setEvaluations(evaluations)
                

            } catch(err:any) {
                console.error(err);
            }
        }
        fetch();
            
    }, [])
    
    if(!(subject&&professors&&evaluations)) {
        return <LoadingPage/>
    }
    return (
        <SubjectProfile subject={subject} professors={professors} evaluations={evaluations}/>
    )

}