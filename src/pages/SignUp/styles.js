import styled from 'styled-components'

export const SignUpPage = styled.div`
  min-width: 316px;
  max-width: 1120px;
  margin: 0 auto;
  padding-inline: 4rem;

  height: 100vh;

  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const SignUpHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 7.2rem;

  & h1 {
    font-size: clamp(3.7rem, 5.5vw, 4.2rem);
    color: ${(props) => props.theme.colors['light-100']};
  }
`

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  & h2 {
    font-size: 3.2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: ${(props) => props.theme.colors['light-100']};
    align-self: center;
  }

  & a {
    align-self: center;
    text-decoration: none;
    font-size: 'Poppins', sans-serif;
    color: ${(props) => props.theme.colors['light-100']};
    font-size: 1.4rem;
    font-weight: 500;
  }

  .text-appearance {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  @media (min-width: 768px) {
    background-color: ${(props) => props.theme.colors['dark-700']};
    justify-content: center;
    width: 476px;
    align-self: center;
    padding: 6.4rem;
    border-radius: 1.6rem;

    .text-appearance {
      position: static;
      width: auto;
      height: auto;
      margin: 0;
      overflow: visible;
      clip: auto;
      white-space: normal;
    }
  }
`
