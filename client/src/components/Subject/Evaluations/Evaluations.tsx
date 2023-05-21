import {Box, Grid, LinearProgress, linearProgressClasses, Rating, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';

type Props = {
    rating: number;
    difficulty: number;
    recommend_rate: number;
}

export default function Evaluation({rating, difficulty, recommend_rate}:Props) {

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 7,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
        },
    }));
    
    
    return (
        <Grid
            container
            direction="column"
            gap={3}
        >
            <Grid container gap={1}>
                <Typography variant='h5'>Nota geral da disciplina</Typography>
                <Grid
                    container
                    alignItems='center'
                    direction='row'
                >
                    <Rating value={rating} name="size-large" size='large' precision={0.5} getLabelText={(rating) => String(rating)} readOnly/>
                    <Typography variant='body1' sx={{marginLeft: '1vh'}}> {+rating.toFixed(2)}/5 </Typography>
                </Grid>
            </Grid>

            <Grid container gap={1}>
                <Typography variant='h5'>Dificuldade da disciplina</Typography>
                <Grid
                    container
                    alignItems='center'
                    direction='row'
                >
                    <Box sx={{ width: '20%' }}>
                        <BorderLinearProgress variant="determinate" value={difficulty*20} />
                    </Box>
                    <Typography variant='body1' sx={{marginLeft: '1vh'}}> {+difficulty.toFixed(2)}/5 </Typography>
                </Grid>
            </Grid>

            <Grid container gap={1}>
                <Typography variant='h5'>Recomendação</Typography>
                <Grid
                    container
                >
                    <Typography variant='h4' color="#383838"> {+(recommend_rate*100).toFixed(2)}% dos alunos recomendam a disciplina</Typography>
                </Grid>
            </Grid>
        </Grid>
    )

}