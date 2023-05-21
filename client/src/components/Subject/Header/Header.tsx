import {Button, Chip, Grid, Rating, Typography} from '@mui/material';
import { useParams, useNavigate} from 'react-router-dom';

type Props = {
    rating: number;
    name: string;
    code: string;
}

export default function Header({rating, name, code}:Props) {
    
    const {id} = useParams()
    const navigate = useNavigate()

    
    return (
        <Grid
            direction="column"
        >
            <Chip
                label={code}
                size='medium'
                sx={{
                    padding: '0.5rem',
                }}
                color="primary"
            />
            <Grid
                container
                justifyContent='space-around'
                alignItems='center'
            >
                    <Grid
                        item xs={9}
                    >
                        <Typography
                            variant='h2'
                            marginY={2}>
                                {name}
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        item xs={3}
                    >
                        <Rating value={rating} name="size-large" precision={0.5} getLabelText={(rating) => String(rating)} readOnly/>
                        <Typography variant='body1' sx={{marginLeft: '1vh'}}> {+rating.toFixed(2)} </Typography>
                    </Grid>
                    <Grid
                        container
                    >
                        <Button variant='outlined' onClick={() => navigate(`../subject/evaluate/${id}`)}> Avaliar esta matéria </Button>
                    </Grid>
       

            </Grid>
           
        </Grid>
    )

}