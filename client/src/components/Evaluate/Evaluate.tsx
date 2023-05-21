import { Button, Box, Checkbox, Container, FormControlLabel, Grid, Paper, Rating, Slider, TextField, Typography, Select, MenuItem } from '@mui/material';
import { useState } from 'react';
import { theme } from '../../theme';

type infos = {
    professor: string;
    rating: number;
    difficulty: number;
    recommended: boolean;
}

type Props = {
    subject_name: string;
    professors: {
        name: string;
        id: string;
    }[];
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function Evaluate(props: Props) {

    const [infos, setInfos] = useState<infos>({
        professor: '',
        rating: 0,
        difficulty: 0,
        recommended: false,
    });

    function handleChange(event: any) {
        setInfos({
            ...infos,
            [event.target.name]: event.target.value,
        });
    }

    return (
        <Grid
            sx={{
                backgroundColor: theme.palette.background.default,
                paddingY: '1rem',
            }}
        >
            <Container maxWidth='md' >
                <Grid
                    container
                    direction="column"
                    component={Paper}
                    marginTop={10}
                    padding={8}
                >
                    <Typography variant='h3' sx={{ marginBottom: '1rem' }}> Avalie {props.subject_name} </Typography>
                    <Typography variant='body1' sx={{ marginBottom: '1rem', width: '40vw', color: "#7d7d7d" }}> Descreva como foi sua experiência ao fazer essa disciplina. Seja gentil, respostas fora da nossa política de uso serão removidas. </Typography>
                    <Box component="form" noValidate onSubmit={props.handleSubmit}>
                        <Grid sx={{ width: '15vw' }} paddingTop={3}>
                            <Typography variant='h5' sx={{ marginTop: '1.3rem', marginBottom: "0.8rem" }}> Quem foi seu professor? </Typography>
                            <Select
                                name='professor'
                                sx={{ width: 300 }}
                                value={infos.professor}
                                onChange={handleChange}>
                                {props.professors.map((item, i) => <MenuItem key={i} value={item.id}>{item.name}</MenuItem>)}
                            </Select>
                            <div>
                                
                            </div>
                        </Grid>
                        <Grid paddingTop={3}>
                            <Typography variant='h5' sx={{ marginTop: '1.3rem', marginBottom: "0.8rem" }}> Nota da disciplina </Typography>
                            <Rating id='rating' name="rating" defaultValue={0} size='large' />
                        </Grid>
                        <Grid sx={{ width: '18vw' }} paddingTop={3}>
                            <Typography variant='h5' sx={{ marginTop: '1.3rem', marginBottom: "0.8rem" }}> Qual foi o nível de dificuldade? </Typography>
                            <Slider
                                defaultValue={0}
                                step={1}
                                marks min={0}
                                max={5}
                                name="difficulty"
                                valueLabelDisplay="auto" />
                        </Grid>

                        <Grid sx={{ width: '35vw' }} paddingTop={3}>
                            <Typography variant='h5' sx={{ marginTop: '1.3rem', marginBottom: "0.8rem" }}> Como era o sistema de avaliação? </Typography>
                            <TextField
                                name='evaluation_method'
                                multiline
                                placeholder="2 provas valendo 40% cada, 1 trabalho valendo 20%"
                                fullWidth
                                rows={3}
                            />
                        </Grid>

                        <Grid sx={{ width: '35vw' }} paddingTop={3}>
                            <Typography variant='h5' sx={{ marginTop: '1.3rem' }}> Comentários gerais </Typography>
                            <Typography variant='body2' sx={{ color: "#7d7d7d", marginBottom: "0.8rem" }}> Aproveite esse campo para contar como eram as aulas, a didática, o nível de cobrança e dicas para os alunos</Typography>
                            <TextField
                                id="evaluation-method"
                                name='comment'
                                multiline
                                placeholder="As aulas eram muito interessantes, o professor era muito didático e as provas eram bem fáceis."
                                fullWidth
                                rows={5}
                            />

                        </Grid>

                        <Grid sx={{ width: '35vw' }} paddingTop={3}>
                            <FormControlLabel control={<Checkbox name='recommended' value={infos.recommended} onChange={handleChange}/>} label="Eu recomendo essa matéria" />
                        </Grid>
                        <Grid paddingTop={3}>
                            <Button variant="contained" type='submit'> Enviar avaliação </Button>
                        </Grid>
                    </Box>

                </Grid>
            </Container>
        </Grid>
    )
}