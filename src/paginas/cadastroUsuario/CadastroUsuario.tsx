import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import React, { ChangeEvent, useEffect, useState } from "react";
import './CadastroUsuario.css';
import User from "../../models/User";
import { cadastroUsuario } from "../../services/Service";

function CadastroUsuario() {
  let navigate = useNavigate();
  const [confirmarSenha, setConfirmarSenha] = useState<String>("")
  const [user, setUser] = useState<User>(
    {
      id: 0,
      nome: '',
      usuario: '',
      senha: '',
      foto:''
    })

  const [userResult, setUserResult] = useState<User>(
    {
      id: 0,
      nome: '',
      usuario: '',
      senha: '',
      foto:''
      
    })

  useEffect(() => {
    if (userResult.id != 0) {
      navigate("/login")
    }
  }, [userResult])


  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value)
  }


  function updatedModel(e: ChangeEvent<HTMLInputElement>) {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    })

  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    if (confirmarSenha == user.senha && confirmarSenha !='') {
      
      cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)     
      alert('Usuario cadastrado com sucesso')}      
     else {
      alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
    }
  }
  return (
    <Grid container direction='row' justifyContent='center' alignItems='center' className='imgb'>
    <Grid item xs={6} className='imagem2'></Grid>
    <Grid item xs={5} alignItems='center' className='grid2'>
        <Box paddingX={10}>
            <form onSubmit={onSubmit}>
                <Typography variant='h5' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'><h1 className='texto3'>Junte-se a nós,</h1><h3 className='texto3'>Crie hoje a sua conta!</h3><h4 className='texto3'>Informe seus dados</h4></Typography>
                <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Insira seu nome' variant='outlined' name='nome' margin='normal' fullWidth />
                <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}id='usuario' label='Insira seu usuário' variant='outlined' name='usuario' margin='normal'fullWidth />
                <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}id='senha' label='Digite sua senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}id='confirmarSenha' label='Confirme a sua senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                <Box marginTop={2} textAlign='center'>
                    <Link to='/login' className='text-decorator-none'>
                        <Button variant='contained' color='secondary' className='btnCancelar botton txt'>
                            Cancelar
                        </Button>
                    </Link>
                    <Button type='submit' variant='contained' color='primary' className='botton txt'>
                            Cadastrar Agora
                    </Button>
                </Box>
            </form>
        </Box>
    </Grid>



</Grid>

  )
}
export default CadastroUsuario;