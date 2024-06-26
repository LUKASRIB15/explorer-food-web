import styled from "styled-components";

export const HomeLayout = styled.div`
  height: 100vh;
  overflow-y: hidden;
  
  /* display: grid;
  grid-template-rows: auto auto 1fr auto; */
`

export const HomeScroll = styled.div`
  overflow-y: auto;
  height: calc(100% - 108px); // 108px = size of header
  display: grid;
  grid-template-rows: auto 1fr auto;

  @media(min-width: 768px){
    height: calc(100% - 128px); // 128px = size of header
  }
`

export const HomePresentation = styled.aside`
  max-width: 1120px;
  width: 100%;
  margin: 3rem auto 0;
  display: flex;
  align-items: center;
  position: relative;
  height: clamp(120px, 20vw, 240px);
  z-index: -1;

  background: linear-gradient(360deg,  #00131C,  #091E26 );

  & h2{
    color: ${props=>props.theme.colors["light-300"]};
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.8rem, 5vw, 4rem);
    font-weight: 500;
  }

  & p{
    color: ${props=>props.theme.colors["light-300"]};
    font-family: 'Poppins', sans-serif;
    font-size: clamp(1.2rem, 2vw, 1.6rem);
  }

  & img:first-child{
   display: none;
  }
  
  & img:nth-child(2){
   position: absolute;
   width: clamp(191px, 20vw, 240px);
   bottom: 0;


   animation-name: showImage;
   animation-duration: 1.5s;

   @keyframes showImage {
    from {
      opacity: 0;
      transform: translateY(50%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
   }
  }

  & div{
    padding-left: clamp(16rem, 40vw, 58.9rem);
    flex: 1;
  }

  @media(min-width: 1120px){
    margin: 18rem auto 0;
    border-radius: 8px;

    & img:first-child{
      display: block;
      position: absolute;
      bottom: 0;
      left: -70px;
      animation-name: showImage;
      animation-duration: 1.5s;

      @keyframes showImage {
        from {
          opacity: 0;
          transform: translateY(50%);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }

    & img:nth-child(2){
      display: none;
    }
  }  

`

export const HomeMain = styled.main`
  background-color:  ${props=>props.theme.colors["dark-400"]};
  padding-top: 6.2rem;
  max-width: 640px;
  margin: 0 auto;
  min-width: 100%;
  width: 100%;

  @media(min-width: 1120px){
    max-width: 1120px;
    min-width: auto;
  }
`

export const HomeMainEmpty = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: center;
  padding-bottom: 6.2rem;

  & p{
    font-size: 2.4rem;
    font-family: 'Poppins', sans-serif;
  }
`

export const HomeFooter = styled.footer`
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

