import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid'; 
import LoginBanner from '../LoginBanner';
import Form from './Form';

export default function SignInSide() {
  return (
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <LoginBanner/>
        <Form/>
      </Grid>
  );
}