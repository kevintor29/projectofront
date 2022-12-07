import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './Navbar.css';
import { Link } from 'react-router-dom';
import meui from '../../estaticos/image/meui.png';
import paginap from '../../estaticos/image/pagina_principal.png';
import sobre from '../../estaticos/image/sobre-nós.png';
import misao from '../../estaticos/image/missao.png';
import login from '../../estaticos/image/login.png';

function Navbar() {
    return (
        <>
            <AppBar position="static" className='fundo'>
                <Toolbar variant="dense">
                    <Box className='comenzo'>
                        <Typography >
                        <img src={meui} className='imglogo'></img>
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start" className='margim'>
                        <Box mx={7} className='cursor margim'>
                            <Link to='/' className='text-decorator-none'>
                            <Typography variant="h5"  >
                                <img src={paginap} className='imglink'></img>
                            </Typography>
                            <Box className='proximo fundoletras'>
                            <Typography variant="h5" >
                                HOME
                            </Typography>
                            </Box>
                            </Link>

                        </Box>
                        <Box mx={7} className='cursor margim2' >
                            <Link to='/sobrenos' className='text-decorator-none '>
                            <Typography variant="h5"  >
                                <img src={sobre} className='imgsobre'></img>
                            </Typography>
                            </Link>
                        </Box>
                        <Box mx={7} className='cursor margim2'>
                            <Link to='/nossamissao' className='text-decorator-none '>
                            <Typography variant="h5"  >
                                <img src={misao} className='imgsobre'></img>
                            </Typography>
                            </Link>
                        </Box>

                        <Box mx={1} className='cursor margim3'>
                            <Link to='/login'>
                            <Typography variant="h5"  >
                                <img src={login} className='imglogin'></img>
                            </Typography>
                            </Link>
                        </Box>
                        
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;