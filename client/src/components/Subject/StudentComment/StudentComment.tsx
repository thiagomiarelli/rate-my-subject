import {Card, Grid, Typography, SvgIcon, Rating} from '@mui/material'
import QuickreplyIcon from '@mui/icons-material/Quickreply';

type Props = {
    rating: number;
    difficulty: number;
    evaluation_method: string;
    recommend: boolean;
    comment: string;
}

export default function StudentComment({rating, difficulty, evaluation_method, recommend, comment} : Props){

    return(
        <Grid marginBottom={2}>
            <Card variant='outlined'>
                <Grid
                    container
                    direction="column"
                    paddingX={4}
                    paddingY={3}
                >
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        marginBottom={1}
                    >
                        <Grid
                            item xs={9}
                            container
                            direction="row"
                        >
                            <QuickreplyIcon color='primary'/>
                            <Typography variant='body1' sx={{marginLeft: '1vh'}} color="primary" fontWeight={500}> Anônimo disse: </Typography>
                        </Grid>

                        <Grid
                            item xs={3}
                            container
                         >
                            <Rating value={rating} size="medium" precision={0.5} getLabelText={(rating) => String(rating)} readOnly/>
                            <Typography variant='body1' sx={{marginLeft: '1vh'}}> {rating} </Typography>
                        </Grid>
                        
                    </Grid>
                    <Typography variant='body2' color={'#696969'} paddingBottom={2}> {comment} </Typography>
                    <Typography variant='body1' > Método de Avaliação </Typography>
                    <Typography variant='body2' color={'#696969'} paddingBottom={2}> {evaluation_method} </Typography>  

                    <Grid
                        container
                        direction="row"
                    >
                        <Grid
                            marginRight={4}
                        >
                            <Typography variant='body1' > Recomenda? </Typography>
                            <Typography variant='body2' color={'#696969'}> {recommend ? 'Sim' : 'Não'} </Typography>
                        </Grid>
                        <Grid>
                            <Typography variant='body1' > Dificuldade </Typography>
                            <Typography variant='body2' color={'#696969'}> {difficulty} </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )

}