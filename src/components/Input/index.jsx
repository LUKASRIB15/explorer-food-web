import { InputLayout } from './styles'

export function Input({ identifier, label, ...rest }) {
  return (
    <InputLayout>
      <label htmlFor={identifier}>{label}</label>
      <input id={identifier} {...rest} />
    </InputLayout>
  )
}
