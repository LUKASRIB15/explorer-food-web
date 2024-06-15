import styled from 'styled-components'

export const InputLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  & label {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors['light-400']};
  }

  & input {
    background-color: ${(props) => props.theme.colors['dark-900']};
    color: ${(props) => props.theme.colors['light-100']};
    font-size: 1.6rem;
    border: 0;
    border-radius: 0.8rem;
    padding-inline: 1.4rem;
    padding-block: 1.2rem;

    &::placeholder {
      color: ${(props) => props.theme.colors['light-500']};
    }

    &:focus {
      outline: 1px solid ${(props) => props.theme.colors['light-100']};
    }
  }
`
