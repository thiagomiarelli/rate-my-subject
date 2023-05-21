import Swal from 'sweetalert2';
import { Box,
  FormControl,
  Grid,
  Paper,
  MenuItem,
  TextField,
  Typography,
  Button
} from '@mui/material';

// interfaces
import { signupBody } from '../../../requests/signup';

// requests
import signup from '../../../requests/signup';

import { useNavigate } from 'react-router-dom';



export default function() {

  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      
      const body:signupBody = {
        email: String(data.get('email')),
        name: String(data.get('name')),
        term: String(data.get('term')),
        password: String(data.get('password')),

        course: 'Ciência da Computação',
        university: 'UFMG',
      }
      signup(body)
        .then((res) => {
          navigate('../login');
          Swal.fire({
            icon: 'success',
            text: 'Cadastrado com sucesso!',
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch((err) => {
          console.log(err.response);
          
          Swal.fire({
            title: 'Falha ao realizar o Cadastro.',
            text: 'Verifique se o e-mail já foi cadastrado',
            icon: 'error',
            confirmButtonText: 'Ok!'
          })
        });
  }

  const terms = [
    {value: '1º período', label: '1º período'},
    {value: '2º período', label: '2º período'},
    {value: '3º período', label: '3º período'},
    {value: '4º período', label: '4º período'},
    {value: '5º período', label: '5º período'},
    {value: '6º período', label: '6º período'},
    {value: '7º período', label: '7º período'},
    {value: '8º período', label: '8º período'},
    {value: '9º período', label: '9º período'},
    {value: '10º período', label: '10º período'},
  ];

  return (
    <Grid item xs={12}
    sm={8}
    md={5}
    padding={8}
    component={Paper}
    elevation={6}
    display="flex"
    flexDirection="column"
    alignItems="flex-start"
    justifyContent="center"
    square>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginBottom: '20px'
        }}
      >
          <Typography
            component="h1"
            variant="h5"
            fontWeight={600}
          > Cadastre-se </Typography>
          <Typography
            component="p"
            variant="body1"
            sx={{paddingRight: '20%', marginTop: '1vh'}}
          > Cadastre ou faça login para avaliar e matérias anonimamente e de graça.  </Typography>
      </Box>

      <FormControl
        fullWidth
        margin='dense'
        component='form'
        onSubmit={handleSubmit}
      >
        <TextField
          required
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          id="name"
          label="Nome"
          name="name"
          autoComplete="name"
          autoFocus
        />

        <TextField
          select
          margin="normal"
          required
          name="term"
          label="Período"
          id="term"
          autoComplete="current-password"
        >
          {terms.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
       
        <TextField
          margin="normal"
          required
          name="password"
          label="Senha"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        
        <Button
                type="submit"
                fullWidth
                variant="contained"
               color="primary"
                sx={{ mt: 3, mb: 2 }}
              >
                Criar conta
        </Button>
        
      </FormControl>


    </Grid>
  )
};