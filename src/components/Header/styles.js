import styled from "styled-components"

export const HeaderLayout = styled.header`
  background-color: ${props=>props.theme.colors["dark-700"]};
  width: 100%;

  & > div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5.6rem 2.8rem 2.4rem;

    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }

  & button{
    background-color: transparent;
    border: 0;
    display: block;
    cursor: pointer;
  }

  & button:last-child{
    display: none;
  }

  & div button:nth-child(2){
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }

  & div div:nth-child(3){
    flex: 1;
    display: none;
  }

  & h1{
    color: ${props=>props.theme.colors["light-100"]};
    font-size: clamp(2rem, 2vw, 2.4rem);
    line-height: 0.4;
  }

  & div div {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 0.8rem;
    
    & span{
      color: ${props=>props.theme.colors["cake-200"]};
      font-size: 1.2rem;
    }
  }

  @media(min-width: 768px){
    & > div{
      gap: 3.2rem;
    }

    & button{
      display: none;
    }

    & button:last-child{
      display: block;
    }

    & div div:nth-child(3){
      flex: 1;
      display: block;
    }

    & div div {
      flex-direction: column;
      align-items: end;
    }
  }

`

export const HeaderLink = styled.a`
  text-decoration: none;
  color: ${props=>props.theme.colors['light-100']};
  position: relative;

  & p{
    display: none;
  }

  & span{
    position: absolute;
    top: -25%;
    right: -50%;

    background-color: ${props=>props.theme.colors['tomato-100']};
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
  }

  @media(min-width: 768px){
    background-color: ${props=>props.theme.colors['tomato-100']};
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1.2rem 3.2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
    border-radius: 6px;

    transition: all 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.colors['tomato-200']};
    }

    & p{
      display: block;
    }

    & span{
      display: none;
    }
  }
`