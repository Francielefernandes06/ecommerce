import React from 'react'
import FormContainer from './FormContainer'
import styled from 'styled-components'

const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  
 
`;

const InputArea = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    
`;

const Input = styled.input`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    
`;

const Button = styled.button`
    display: flex;
    margin-top: 3px;
`;

function Form() {
  return (
    <FormContainer>
      <h1>Fazer Login</h1>
      <InputArea className='mb-3'>
      <Label>Email</Label>
      <Input className='form-control' type="email" placeholder="Digite seu email"/>
      </InputArea>
      <InputArea className='mb-3'>
      <Label>Senha</Label>
      <Input className='form-control' type="password" placeholder="Digite sua senha"/>
      </InputArea>
      
      
      

      <InputArea className='mb-3'>
      <Label>Não tem uma conta? <a href="#">Cadastre-se</a></Label>
      
      </InputArea>

     

      <Button className='btn btn-primary' type="submit">Entrar</Button>
     


    </FormContainer>


    
  )
}

export default Form