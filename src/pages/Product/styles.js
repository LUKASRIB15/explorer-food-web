import styled from "styled-components";

export const ProductLayout = styled.div`
  height: 100vh;
  overflow-y: hidden;

  /* display: grid;
  grid-template-rows: auto 1fr auto; */
`

export const ProductScroll = styled.div`
  overflow-y: auto;
  height: calc(100% - 108px); // 108px = size of header
  display: grid;
  grid-template-rows: 1fr auto;

  @media(min-width: 768px){
    height: calc(100% - 128px); // 128px = size of header
  }
`

export const ProductMain = styled.main`
  padding: 1.6rem 5.6rem 3.2rem;

  max-width: 1120px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  & section:first-child{
    width: 100%;

    & button{
      background-color: transparent;
      border: 0;
      cursor: pointer;
      padding: 0;
      color: ${props=>props.theme.colors["light-100"]};
      
      display: flex;
      align-items: center;
      font-family: 'Poppins', sans-serif;
      font-size: 2.4rem;
    }
  }

  & section:last-child{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2.4rem;

    & h2{
      color: ${props=>props.theme.colors["light-100"]};
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 2.8rem;
    }

    & p{
      font-family: 'Poppins', sans-serif;
      text-align: center;
    }

    & > div{
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 2.4rem;
    }
  }

  & img{
    animation-name: appearenceImage;
    animation-duration: 0.7s;
  }

  @keyframes appearenceImage{
    from{
      opacity: 0;
      transform: translateY(-50%);
    }
    to{
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media(min-width: 1024px){
    
    & section:last-child{
      flex-direction: row;

      & > div{
        align-items: start;
      }
    }
  }
`

export const ProductFooter = styled.footer`
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

export const ProductFooterActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.2rem;
  width: 100%;
  margin-top: 2.4rem;

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

  @media(min-width: 1024px){
    & > button{
      width: max-content;
    }
  }
`

export const ProductActions = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
`

export const ProductIngredients = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  justify-content: center;

  & span{
    --delay: 0.5s;
    background-color: ${props=>props.theme.colors["dark-1000"]};
    padding: 0.4rem 0.8rem;
    border-radius: 5px;
    font-size: 1.4rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;

    animation-name: showSpan;
    animation-delay: var(--delay);
    animation-duration: 1s;
    animation-fill-mode: forwards;
    opacity: 0;

    @keyframes showSpan{
      0%{
        rotate: -20deg;
        scale: 0.7;
      }
      50%{
        scale: 1.2;
      }
      100%{
        opacity: 1;
        rotate: 0deg;
        scale: 1;
      }
    }

  }
`