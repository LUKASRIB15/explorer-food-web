import { ButtonLayout } from './styles'

export function Button({ title, icon:Icon,...rest }) {
  return (
    <ButtonLayout {...rest}>
      {Icon && <Icon size={20} color="#FFFFFF"/>}
      {title}
    </ButtonLayout>
  )
}
