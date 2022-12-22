import React, { useEffect } from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    
    useEffect(() => {
      if (token == "") {
        toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate("/login")
  
      }
  }, [token])
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa imgb' >
                <Grid alignItems="center" item xs={12}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo grid5'>Seja bem vindo ao site do Projeto MEUI</Typography>
                
                        <img src="https://cdn.discordapp.com/attachments/1047476710578331680/1054388073275867207/about-poor-removebg-preview.png" alt="0" width="852px" height="200px"/>

                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo grid5'>Este é o site do nosso Projeto Integrador. Confira nossas postagens ou faça uma!</Typography>
                        <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" className='titulo grid5'> Erradicação da Pobreza:
                        Neste projeto o nosso tema principal é compartilhar o máximo de informações com pessoas em situação de vulnerabilidade para que elas possam ter acesso à educação, moradia e alimentação, com o objetivo de erradicar a pobreza.
                        O nosso site será voltado para pessoas que estão em situação de vulnerabilidade e empresas que desejam ajudar essas pessoas. Nossa motivação surge da necessidade de divulgação de informações, pois acreditamos que quanto mais educação e informação as pessoas tiverem, mais conseguiremos reduzir o número de pessoas em situação precária, tendo em vista que há uma ligação entre a educação das pessoas e seu status socio-econômico.
                        Vamos criar uma rede social com a intenção de fornecer um acesso limpo, sem propagandas, que contenham informações personalizadas por meio de cadastros, identificando os perfis e mandando as oportunidades de forma direta para as pessoas se inteirarem de assuntos que sejam pertinentes a ela.
                        Porque como mencionamos, as informações precisam chegar nessas pessoas de alguma forma, e por meio de uma rede social a gente consegue identificar os perfis e direcionar, por exemplo, um projeto de moradia que está surgindo na região dela e ela tem o perfil para se cadastrar nesse projeto, com isso ajudando uma pessoa a sair de uma situação de aluguel ou pobreza.</Typography>
                    </Box>
                   
                </Grid>
                <Grid item xs={6} >
                    <img src="https://cdn.discordapp.com/attachments/1047476710578331680/1053296630180364408/POBREZAA1.jpg" alt="" width="632px" height="350px" />
                </Grid>

                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>

                <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/posts" className="text-decorator-none">
                            <Button variant="outlined" className='botao botton txt'>Ver Postagens</Button>
                        </Link>
                    </Box>

            </Grid>
        </>
    );
}

export default Home;