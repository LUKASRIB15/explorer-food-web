import styled from "styled-components"

export const HomeCarousel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  overflow-x: hidden;
  margin-bottom: 4.8rem;
  width: max-content;
  width: 100%;

  & h3{
    padding-left: 2.4rem;
    font-size: clamp(1.8rem, 3vw, 3.2rem);
  }

  

  & > div{
    display: flex;
    gap: clamp(1.6rem, 2vw, 2.8rem);
    overflow-x: scroll;
    padding-inline: 2.4rem;
    position: relative;
    z-index: 0;
    scrollbar-width: none;
    max-width: 1120px;
    width: 100%;
  }

  @media(min-width: 1120px){
    h3{
      padding-left: 0;
    }

    & > div{
      padding-inline: 0;
    }
  }
`

const HomeCarouselAction = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 278px;
  z-index: 1;
  display: none;

  & button{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    background-color: transparent;
    border: 0;
    cursor: pointer;
  }

  @media(min-width: 1120px){
    display: block;
  }
`

export const HomeCarouselActionLeft = styled(HomeCarouselAction)`
  background: linear-gradient(90deg, rgba(0, 10, 15, 1) 20%,  rgba(0, 10, 15, 0));
  left: 0;

  & button{
    left: 18px;
  }
`

export const HomeCarouselActionRight = styled(HomeCarouselAction)`
  background: linear-gradient(90deg,  rgba(0, 10, 15, 0), rgba(0, 10, 15, 1));
  right: 0;

  & button{
    right: 18px;
  }
`
