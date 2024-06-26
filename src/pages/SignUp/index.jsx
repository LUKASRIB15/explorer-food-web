import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { SignUpForm, SignUpHeader, SignUpPage } from './styles'
import { useAuthContext } from '../../hooks/use-auth-context'
import { useState } from 'react'
import { Toast } from '../../components/Toast'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const { signUp } = useAuthContext()

  const isDisabledButton = email === '' || password === '' || name === ''

  async function handleSignUp(event) {
    event.preventDefault()
    try{
      await signUp({ name, email, password })
    }catch(error){
      setErrorMessage("Não foi possível realizar o cadastro. Você provavelmente informou um email já cadastrado em nosso sistema.")
    } finally {
      setTimeout(()=>setErrorMessage(''), 4000)
      setName('')
      setEmail('')
      setPassword('')
    }
  }

  return (
    <SignUpPage>
      {errorMessage && <Toast message={errorMessage} />}

      <SignUpHeader>
        <img src="/src/assets/explorer-logo.svg" alt="Explorer Logo" />
        <h1>food explorer</h1>
      </SignUpHeader>
      <SignUpForm onSubmit={handleSignUp}>
        <h2 className="text-appearance">Crie sua conta</h2>
        <Input
          identifier={'name'}
          label={'Seu nome'}
          placeholder={'Exemplo: Maria da Silva'}
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <Input
          identifier={'email'}
          label={'Email'}
          placeholder={'Exemplo: exemplo@exemplo.com.br'}
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <Input
          identifier={'password'}
          label={'Senha'}
          placeholder={'No mínimo 6 caracteres'}
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <Button title={'Criar conta'} type={'submit'} disabled={isDisabledButton}/>
        <Link to="/">Criar uma conta</Link>
      </SignUpForm>
    </SignUpPage>
  )
}
