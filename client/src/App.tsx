// pages
import {theme} from "./theme";
import { ThemeProvider } from '@mui/material/styles';
import {useContext} from 'react'
import { AuthContext } from "./context/authContext";

import PublicRoutes from './routes/public.routes'
import PrivateRoutes from './routes/private.routes'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

function App() {

  const {auth} = useContext(AuthContext)

  console.log("routes", auth)
  return (
    <ThemeProvider theme={theme}>
      {auth ? <PrivateRoutes/> : <PublicRoutes/>}
    </ThemeProvider>
  );
}

export default App


