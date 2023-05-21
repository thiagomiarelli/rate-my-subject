import './CardComponent.css'

// MUI
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

// incons
import StarIcon from '@mui/icons-material/Star';

import { useNavigate } from 'react-router-dom';
import { height } from '@mui/system';

export interface SubjectCard  {
    id: string;
    subject: string;
    subjectCode: string;
    rating: string;
    description: string;
    workload: string;
}

interface CardProps {
    data: SubjectCard;
}

export default function CardComponent(props:CardProps) { 

    const navigate = useNavigate()
    return (
        <CardActionArea onClick={() => navigate('../../dashboard/subject/' + props.data.id)}> 
            <Card
                variant='outlined'
                sx={{padding: '10px', height: '28vh'}}>

                    <Grid container justifyContent="space-between" alignItems="center" marginY={1}>
                        <Chip color='primary' label={props.data.subjectCode}/>
                        <Grid item display='flex' alignItems='center' marginX={2}>
                            <Rating value={parseInt(props.data.rating)} name="size-large" precision={0.5} getLabelText={(rating) => String(rating)} readOnly/>
                            <Typography marginLeft={0.6} variant="body2">
                                {props.data.rating}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid>
                            <Typography marginBottom={0.3} variant='h5' color='black'>
                                {props.data.subject}
                            </Typography>
                            <Typography color='#BDBDBD' marginBottom={0.3}>
                                {props.data.workload} horas/aula
                            </Typography>
                    </Grid>
                    
                    <Grid item xs={12} marginTop={1.2}>
                        <Typography variant="body2" color='#4b4b3e'>
                            {props.data.description.substring(0, 200)}...
                        </Typography>
                    </Grid>
            </Card>
         </CardActionArea>

    )
}
