import { useEffect, useState, useContext} from 'react'

//style
import './SubjectGrid.css'

// components
import Card
  from "./components/CardComponent/CardComponent"


// MUI
import { TextField, Grid } from '@mui/material'
// interfaces
import { SubjectCard } from './components/CardComponent/CardComponent'

// requests
import listSubjects
  from '../../../requests/Subjects/listSubjects'

// context
import { QueryContext } from '../../../context/searchContext'

interface subject {
    id: string;
    name: string;
    syllabus: string;
    department: string;
    workload: number;
    created_at: string;
    code: string;
    rating: number;
}


export default function SubjectGrid() {
    const [subjects, setSubjects] = useState<Array<SubjectCard>>([])
    const [filter, setFilter] = useState<string>('')

    const { query } = useContext(QueryContext)

    function filterList(list:Array<SubjectCard>) {
        const filtro = list.filter((item) => {
            const subject = item.subject.toLowerCase().includes(filter.toLowerCase())
            const subjectCode = item.subjectCode.toLowerCase().includes(filter.toLowerCase())
            const syllabus = item.description.toLowerCase().includes(filter.toLowerCase())
            return subject || subjectCode || syllabus
        })
        return filtro
    }

    useEffect(() =>{
        listSubjects()
            .then((res) => {
                console.log(res.data);
                
                const list = res.data.map((item:subject) => {
                    const card:SubjectCard ={
                        id: item.id,
                        subject: item.name,
                        subjectCode: item.code,
                        description: item.syllabus,
                        workload: String(item.workload),
                        rating:String((Math.floor( item.rating * 100) / 100)),
                    }
                    return card;
                })
                setSubjects(list);
            }
            )
    }, [])

    useEffect(() => {
        setFilter(query)
    }, [query])
    
   
    return(
        <Grid paddingX={6} marginTop={15}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {filterList(subjects).map((item, i) => {
                    return (
                    <Grid item xs={2} sm={3} md={4} key={i}>
                        <Card data={item}/>
                    </Grid>
                )})}
            </Grid>
        </Grid>
    )
}