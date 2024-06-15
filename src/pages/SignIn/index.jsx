import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { SignInForm, SignInHeader, SignInPage } from './styles'
import { Link } from 'react-router-dom'

export function SignIn() {
  return (
    <SignInPage>
      <SignInHeader>
        <img src="/src/assets/explorer-logo.svg" alt="Explorer Logo" />
        <h1>food explorer</h1>
      </SignInHeader>
      <SignInForm>
        <h2 className="text-appearance">Faça Login</h2>
        <Input
          identifier={'email'}
          label={'Email'}
          placeholder={'Exemplo: exemplo@exemplo.com.br'}
        />
        <Input
          identifier={'password'}
          label={'Senha'}
          placeholder={'No mínimo 6 caracteres'}
        />
        <Button title={'Entrar'} type={'submit'} />
        <Link to="/register">Criar uma conta</Link>
      </SignInForm>
    </SignInPage>
  )
}
