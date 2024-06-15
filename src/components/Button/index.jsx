import { ButtonLayout } from './styles'

export function Button({ title, ...rest }) {
  return <ButtonLayout {...rest}>{title}</ButtonLayout>
}
