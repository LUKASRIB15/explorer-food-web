import styled from 'styled-components'

export const InputLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;

  & svg{
    position: absolute;
    top: 50%;
    left: 1.4rem;
    transform: translateY(-50%);
  }

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
    padding-right: 1.4rem;
    padding-left: ${props=>props.iconExists ? '4.8rem' : '1.4rem'};
    padding-block: 1.2rem;
    width: 100%;
    
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &::placeholder {
      color: ${(props) => props.theme.colors['light-500']};
    }

    &:focus {
      outline: 1px solid ${(props) => props.theme.colors['light-100']};
    }
  }
`
