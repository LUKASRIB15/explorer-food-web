import { useState } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuthContext } from '../../hooks/use-auth-context'
import { SignInForm, SignInHeader, SignInPage } from './styles'
import { Link } from 'react-router-dom'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuthContext()

  async function handleSignIn(event) {
    event.preventDefault()
    await signIn({ email, password })
  }

  return (
    <SignInPage>
      <SignInHeader>
        <img src="/src/assets/explorer-logo.svg" alt="Explorer Logo" />
        <h1>food explorer</h1>
      </SignInHeader>
      <SignInForm onSubmit={handleSignIn}>
        <h2 className="text-appearance">Faça Login</h2>
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
        <Button title={'Entrar'} type={'submit'} />
        <Link to="/register">Criar uma conta</Link>
      </SignInForm>
    </SignInPage>
  )
}
