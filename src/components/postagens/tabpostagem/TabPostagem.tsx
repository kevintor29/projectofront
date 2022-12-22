import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';
import { Link } from 'react-router-dom';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="primary" onChange={handleChange} className='text-decorator-none fundobackground'>
            <Tab label="Todas as postagens" value="1"/>
            <Link to='/sobrenos' className='text-decorator-none '>
          
            <Tab label="Sobre-nós" value="2" />
            </Link>
            <Link to='/nossamissao' className='text-decorator-none '>
          
            <Tab label="Nossa-Missao" value="3" />
            </Link>

            <Link to='/posts' className='text-decorator-none '>
            <Tab label="Postagens" value="4" />
            </Link>

            <Link to='/temas' className='text-decorator-none '>
            <Tab label="Temas" value="5" />

            </Link>

            <Link to='/formularioTema' className='text-decorator-none '>
            <Tab label="Cadastrar Tema" value="6" />

            </Link>

          </Tabs>
        </AppBar>
        <TabPanel value="1">
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>        
      </TabContext>
    </>
  );
}
export default TabPostagem;