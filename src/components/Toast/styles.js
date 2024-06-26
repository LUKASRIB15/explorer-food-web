import styled from 'styled-components'

export const ToastLayout = styled.section`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;

  background-color: ${(props) => props.theme.colors['tomato-300']};
  padding: 1.4rem;
  border-radius: 10px;

  animation-name: appearance;
  animation-duration: 4s;
  animation-fill-mode: forwards;

  & p {
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
  }

  @keyframes appearance {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export const ToastProgress = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${(props) => props.theme.colors['light-400']};
  position: absolute;
  bottom: 0;
  left: 0;

  & div {
    width: 0%;
    height: 5px;
    background-color: ${(props) => props.theme.colors['tomato-200']};
    animation-name: progress;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-delay: 0.5s;

    @keyframes progress {
      from {
        width: 0%;
      }

      to {
        width: 100%;
      }
    }
  }
`
