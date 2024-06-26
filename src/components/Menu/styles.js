import styled from "styled-components";


export const MenuLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  position: absolute;
  inset: 0;
  z-index: 1;
  transition: all 0.4s;

  &[data-menu="false"]{
    transform: translateX(-100%);
  }

  &[data-menu="true"]{
    transform: translateX(0);
  }

`

export const MenuHeader = styled.header`
  background-color: ${props=>props.theme.colors["dark-700"]};
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 5.6rem 2.8rem 2.4rem;

  & button{
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }
`

export const MenuMain = styled.main`
  background-color: ${props=>props.theme.colors["dark-400"]};
  padding: 3.6rem 2.4rem;

  & section{
    margin-top: 3.6rem;
  }

  & button{
    width: 100%;
    padding: 1rem;
    background-color: transparent;
    color: ${props=>props.theme.colors["light-100"]};
    display: flex;
    border: 0;
    border-bottom: 1px solid ${props=>props.theme.colors["dark-1000"]};
    font-size: 2.4rem;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
  }
`

export const MenuFooter = styled.footer`
  background-color: ${props=>props.theme.colors["dark-700"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.8rem;

  & > div{
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
  }

  & div{
    font-size: clamp(1.2rem, 1vw, 2.4rem);
    color: ${props=>props.theme.colors["light-700"]};

    display: flex;
    align-items: center;
    gap: 0.8rem;
    justify-content: space-between;
  }

  & p{
    color: ${props=>props.theme.colors["light-200"]};
    font-size: clamp(1.2rem, 1vw, 1.4rem);
  }
`
