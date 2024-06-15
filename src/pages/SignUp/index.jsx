import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { SignUpForm, SignUpHeader, SignUpPage } from './styles'

export function SignUp() {
  return (
    <SignUpPage>
      <SignUpHeader>
        <img src="/src/assets/explorer-logo.svg" alt="Explorer Logo" />
        <h1>food explorer</h1>
      </SignUpHeader>
      <SignUpForm>
        <h2 className="text-appearance">Crie sua conta</h2>
        <Input
          identifier={'name'}
          label={'Seu nome'}
          placeholder={'Exemplo: Maria da Silva'}
        />
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
        <Link to="/">Criar uma conta</Link>
      </SignUpForm>
    </SignUpPage>
  )
}
