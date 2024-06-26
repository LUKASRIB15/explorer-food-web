import { ToastLayout, ToastProgress } from './styles'

export function Toast({ message }) {
  return (
    <ToastLayout>
      <p>{message}</p>
      <ToastProgress>
        <div />
      </ToastProgress>
    </ToastLayout>
  )
}
