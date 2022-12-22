import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import './Nossamissao.css';

function Nossamissao() {
  return (
    <>
    <Grid container justifyContent='center' alignItems='center' className='imgb'>
    <Grid alignItems="center" item xs={6}>
     <Box paddingX={0}>
 
     <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'><h5 className='cordaletra'>Nossa Missão</h5></Typography>
           <Typography variant="h5" component='h3' align='left' className='titulo grid3' >Projeto MEUI. Nosso Projeto tem como finalidade relatar sobre a erradicação contra a pobreza, que é a primeira ODS. <Typography variant="h5" component='h1' align='left'><h5 className='titulo'>A erradicação da pobreza corresponde ao primeiro dos Objetivos de Desenvolvimento Sustentável (ODS) criados pela Organização das Nações Unidas (ONU) para cumprir com os acordos feitos na Agenda 2030. Seu princípio consiste em “reduzir pelo menos à metade, até 2030, a proporção de homens, mulheres e crianças que vivem na pobreza extrema, em todas as suas dimensões”.
           Melhorar a qualidade de vida de pessoas em situação de vulnerabilidade social, combatendo a fome,resgatando a
           dignidade humana.</h5></Typography></Typography>
       </Box>
   </Grid>
   <Grid item xs={6} >
                   <img src="https://cdn.discordapp.com/attachments/1014550882538504273/1052917572586188810/MVV-removebg-preview.png" alt="" width= "622px" height="550px" />
               </Grid>
                </Grid>
               </>
  )
  
}

export default Nossamissao;