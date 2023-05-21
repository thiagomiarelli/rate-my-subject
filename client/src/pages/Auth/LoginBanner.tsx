import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import welcomeSvg from '../../assets/images/welcome.svg'

export default function() {
    
    return (
        <Grid
            container
            item xs={7}
            sx={{
            backgroundColor: 'F1F1F1',
            backgroundPosition: 'center',
            }}
            direction="column"
            justifyContent="center"
        > 
            <Grid
                container
                direction="column"
                justifyContent="flex-end"
                alignItems="center"
            >
                <Box
                    sx={{
                        display: 'flex',
                        marginBottom: '4vh',
                    }}
                    component="img"
                    alt="welcome image."
                    src = {welcomeSvg}
                />
                <Typography
                    variant='h1'
                    sx={{
                        marginBottom: '2vh',
                    }}

                > Sua opinião importa </Typography>
                <Typography variant='body1' > Cadastre ou faça login para avaliar e matérias anonimamente e de graça. </Typography>
            </Grid>
        </Grid>
    )
}