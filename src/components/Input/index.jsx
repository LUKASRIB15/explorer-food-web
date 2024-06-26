import { InputLayout } from './styles'

export function Input({ identifier, label, icon:Icon ,...rest }) {
  return (
    <InputLayout iconExists={Boolean(Icon)}>
      {
        Icon && 
        <Icon size={24} color="#C4C4CC"/>
      }
      <label htmlFor={identifier}>{label}</label>
      <input id={identifier} {...rest} />
    </InputLayout>
  )
}
