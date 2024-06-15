import styled from 'styled-components'

export const ButtonLayout = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.colors['tomato-100']};
  color: ${(props) => props.theme.colors['light-100']};
  font-size: 1.4rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  padding: 1.2rem 3.2rem;
  border: 0;
  border-radius: 5px;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.colors['tomato-200']};
  }
`