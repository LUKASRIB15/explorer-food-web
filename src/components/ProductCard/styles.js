import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductCardLayout = styled.div`
  background-color: ${props=>props.theme.colors["dark-200"]};
  border-radius: 8px;
  padding: 2.4rem;
  display: flex;
  gap: 1.6rem;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  /* min-width: clamp(210px, 30vw, 304px);
  max-width: clamp(210px, 30vw, 304px); */
  align-items: center;
  position: relative;
  border: 1px solid ${props=>props.theme.colors["dark-300"]};
  /* min-height: clamp(292px, 30vw, 425px);
  max-height: 425px; */
  min-height: clamp(292px, 30vw, 425px);
  text-decoration: none;
  color: ${props=>props.theme.colors["light-100"]};

  & > button:first-child{
    position: absolute;
    right: 1.6rem;
    top: 1.6rem;
  }

  & > div:last-child{
    justify-self: end;
  }


  & img{
    width: clamp(88px, 10vw, 100%);
    height: clamp(88px, 10vw, 100%);
  }

  & p{
    text-align: center;
    font-size: clamp(1.4rem, 3vw, 2.4rem);
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
  }

  & p + p{
    display: none;
    font-size: 1.4rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
  }

  & span{
    font-size: clamp(1.6rem, 5vw, 3.2rem);
    color: ${props=>props.theme.colors["cake-200"]};
  }

  @media(min-width: 768px){
    & p + p{
      display: block;
    }
  }
`


export const ProductCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`
export const ProductCardActions = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
`

export const ProductCardFooterActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 1.2rem;
  width: 100%;

  & div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.4rem
  }

  & span{
    font-size: clamp(1.6rem, 2vw, 2rem);
    font-weight: bold;
    color: ${props=>props.theme.colors["light-100"]};	
  }

  @media(min-width: 1120px){
    flex-direction: row;
  }
`
