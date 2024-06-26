import { useState } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { useAuthContext } from '../../hooks/use-auth-context'
import { SignInForm, SignInHeader, SignInPage } from './styles'
import { Link } from 'react-router-dom'
import { Toast } from '../../components/Toast'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const { signIn } = useAuthContext()

  const isDisabledButton = email === '' || password === ''

  async function handleSignIn(event) {
    event.preventDefault()

    try {
      await signIn({ email, password })
    } catch (error) {
      setErrorMessage("Não foi possível realizar o login. Verifique seus dados e tente novamente.")
      
    } finally{
      setTimeout(()=>setErrorMessage(''), 4000)
      setEmail('')
      setPassword('')
    }
  }

  return (
    <SignInPage>
      {errorMessage && <Toast message={errorMessage} />}

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
          value={email}
        />
        <Input
          identifier={'password'}
          label={'Senha'}
          placeholder={'No mínimo 6 caracteres'}
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <Button title={'Entrar'} type={'submit'} disabled={isDisabledButton}/>
        <Link to="/register">Criar uma conta</Link>
      </SignInForm>
    </SignInPage>
  )
}
