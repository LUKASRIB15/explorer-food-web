import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { SignUpForm, SignUpHeader, SignUpPage } from './styles'
import { useAuthContext } from '../../hooks/use-auth-context'
import { useState } from 'react'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signUp } = useAuthContext()

  async function handleSignUp(event) {
    event.preventDefault()
    await signUp({ name, email, password })
  }

  return (
    <SignUpPage>
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
        />
        <Input
          identifier={'email'}
          label={'Email'}
          placeholder={'Exemplo: exemplo@exemplo.com.br'}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          identifier={'password'}
          label={'Senha'}
          placeholder={'No mínimo 6 caracteres'}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button title={'Criar conta'} type={'submit'} />
        <Link to="/">Criar uma conta</Link>
      </SignUpForm>
    </SignUpPage>
  )
}
