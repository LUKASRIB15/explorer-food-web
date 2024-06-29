import styled from "styled-components";

export const EditProductLayout = styled.div`
  height: 100vh;
  /* display: grid;
  grid-template-rows: max-content 1fr max-content; */
  overflow-y: hidden;
`

export const EditProductScroll = styled.div`
  overflow-y: auto;
  height: calc(100% - 108px); // 108px = size of header
  display: grid;
  grid-template-rows: 1fr auto;

  @media(min-width: 768px){
    height: calc(100% - 128px); // 128px = size of header
  }
`

export const EditProductMain = styled.form`
  display: grid;
  gap: 1.2rem;
  padding: 1rem 3.2rem 2rem;
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;

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

  & > h2{
    width: 100%;
    color: ${props=>props.theme.colors["light-300"]};
    font-size: 3.2rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
  }
  
  & > section:nth-child(3){
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    & p{   
      font-size: 1.6rem;
      font-weight: 400;
      color: ${(props) => props.theme.colors['light-400']};
    }

    & label{
      display: block;
      background-color: ${props=>props.theme.colors["dark-800"]};
      display: flex;
      align-items: center;
      gap: 0.8rem;
      padding: 1.2rem 3.2rem;
      border-radius: 8px;
      font-family: 'Poppins', sans-serif;
      font-size: 1.4rem;
    }

    & input{
      display: none;
    }
  }

  & > section:nth-child(5){
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.8rem; 

    & label{   
      font-size: 1.6rem;
      font-weight: 400;
      color: ${(props) => props.theme.colors['light-400']};
    }

    & select{
      border: 0;
      outline: 0;
      padding: 1.6rem;
      border-radius: 5px;
      color: ${props=>props.theme.colors["light-400"]};
      font-size: 1.4rem;
      
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      
      background-color: ${props=>props.theme.colors["dark-900"]};
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNCAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjQ1NDUgOC43NTM1OEM0Ljg5Mzg0IDguMzE0MjQgNS42MDYxNiA4LjMxNDI0IDYuMDQ1NSA4Ljc1MzU4TDEyIDE0LjcwODFMMTcuOTU0NSA4Ljc1MzU4QzE4LjM5MzggOC4zMTQyNCAxOS4xMDYyIDguMzE0MjQgMTkuNTQ1NSA4Ljc1MzU4QzE5Ljk4NDggOS4xOTI5MiAxOS45ODQ4IDkuOTA1MjMgMTkuNTQ1NSAxMC4zNDQ2TDEyLjc5NTUgMTcuMDk0NkMxMi4zNTYyIDE3LjUzMzkgMTEuNjQzOCAxNy41MzM5IDExLjIwNDUgMTcuMDk0Nkw0LjQ1NDUgMTAuMzQ0NkM0LjAxNTE3IDkuOTA1MjMgNC4wMTUxNyA5LjE5MjkyIDQuNDU0NSA4Ljc1MzU4WiIgZmlsbD0iI0M0QzRDQyIvPgo8L3N2Zz4K);
      background-repeat: no-repeat;
      background-position: center right 1.6rem; 
    
    }
  }

  & > section:nth-child(6){
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      & label{   
        font-size: 1.6rem;
        font-weight: 400;
        color: ${(props) => props.theme.colors['light-400']};
      }

      & > div{
        background-color: ${props=>props.theme.colors["dark-800"]};
        display: flex;
        flex-wrap: wrap;
        gap: 1.6rem;
        padding: 0.4rem 0.8rem;
        border-radius: 8px;
      
        & div:last-child{
          padding: 1rem 1.6rem;
          border: 1px dashed ${props=>props.theme.colors["light-500"]};
          border-radius: 8px;

          display: flex;
          align-items: center;
          gap: 0.8rem;

          & input{ 
            
            background-color: transparent;
            border: 0;
            color: ${props=>props.theme.colors["light-100"]};
            
            &:focus{
              outline: 1px solid ${props=>props.theme.colors["light-100"]};
            }
          }

          & button{
            background-color: transparent;
            border: 0;
            cursor: pointer;

            display: flex;

            & svg{
              align-self: center;
            }
          }
        }

      }

    }

  & > section:nth-child(8){
    display: flex;
    flex-direction: column;
    resize: none;
    gap: 0.8rem;

    & label{   
      font-size: 1.6rem;
      font-weight: 400;
      color: ${(props) => props.theme.colors['light-400']};
    }

    & textarea{
      background-color: ${props=>props.theme.colors["dark-800"]};
      display: flex;
      gap: 1.6rem;
      padding: 0.4rem 0.8rem;
      border-radius: 8px;
      border: 0;
      height: 172px;
      resize: none;
      color: ${(props) => props.theme.colors['light-100']};

      &::placeholder{
        color: ${props=>props.theme.colors["light-500"]};
      }
    }
  }

  & > section:nth-child(9){
    display: flex;
    gap: 0.8rem;
  }

  @media(min-width: 768px){
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: repeat(6, max-content);

    & > section:nth-child(1){
      grid-column: 1 / 4;
    }

    & > h2{
      grid-column: 1 / 4;
    }

    & > section:nth-child(3){
      grid-column: 1/2;
    }

    & > section:nth-child(4){
      grid-column: 2/3;
    }

    & > section:nth-child(5){
      grid-column: 3/4;
    }

    & > section:nth-child(6){
      grid-column: 1/3;
    }

    & > section:nth-child(8){
      grid-column: 1/4;
    }

    & > section:nth-child(9){
      width: max-content;
      grid-column: 2/4;
      place-self: end;

      & button{
        width: max-content; 
      }
    }
  } 
  
`

export const EditProductIngredientCard = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.6rem;
  background-color: ${props=>props.theme.colors["light-600"]};
  border-radius: 10px;
  color: ${props=>props.theme.colors["light-100"]};

  & button{
    background-color: transparent;
    border: 0;
    color: ${props=>props.theme.colors["light-100"]};
    font-size: 1.6rem;
    cursor: pointer;
    display: flex;
    
    & svg{
      align-self: center;
    }
  }
`
export const EditProductFooter = styled.footer`
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
