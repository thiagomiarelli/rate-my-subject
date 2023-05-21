import {AppBar, Avatar, Toolbar, Grid, Typography, Paper, InputBase, IconButton, Box} from "@mui/material"
import { useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import {useContext} from 'react'
import { AuthContext } from "../../context/authContext";
import { QueryContext } from "../../context/searchContext";
import logo from "../../assets/images/logo.svg"

export default function Navbar() {

    const {auth, user} = useContext(AuthContext)
    const {query, setQuery} = useContext(QueryContext)

    const navigate = useNavigate()

    const getFirstTwoLetters = (name:string) => {
        const nameArray = name.split(' ')
        return nameArray.length > 1 ? nameArray[0][0] + nameArray[1][0] : nameArray[0][0]
    }

    const style = {
        navItems: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        navSearch: {
            width: '100%',
            height: '100%',
        },
        icon: {
            color: '#FFFFFF',
        }
    }
    return(
        <AppBar position="fixed" color="secondary">
            <Toolbar>
                <Grid container>
                    <Grid item  sx={style.navItems} xs={3}>
                    <div onClick={() => navigate("/")}>
                        <Box
                            component="img"
                            sx={{
                            height: '4vh',
                            }}
                            src={logo}
                        /> 
                    </div>
                    </Grid>
                    <Grid item  sx={style.navItems} xs={6} paddingY={1}>
                        <Paper
                            component = "form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600 }}
                        >
                            <InputBase
                                sx={{ p: '10px',  flex: 1}}
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <IconButton type="button" sx={{ p: '10px'}} aria-label="search" onClick={() => navigate("/")}>
                                    <SearchIcon/>
                            </IconButton>
                        </Paper>
                    </Grid>
                    <Grid item  sx={style.navItems} xs={3}>
                            <Avatar sx={{ bgcolor: '#fca503' }}> {getFirstTwoLetters(user?.name)} </Avatar>
                            <Typography marginLeft={2}>
                                {auth? "Olá, " + user?.name.split(" ")[0]: 'Entrar'}

                            </Typography>
                    </Grid >
                </Grid>
            </Toolbar>
        </AppBar>
    )
 }