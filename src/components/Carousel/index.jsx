import { HomeCarousel, HomeCarouselActionLeft, HomeCarouselActionRight } from "./styles"
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import { useRef } from "react"
import { CaretLeft, CaretRight } from "@phosphor-icons/react"
import { ProductCard } from "../ProductCard"


export function Carousel({products, title}){
  const swiperRef = useRef(null)

  return (
    <HomeCarousel>
      <h3>{title}</h3>

        <Swiper
          ref={swiperRef}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1120: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          spaceBetween={75}
          slidesPerView={3}
          centeredSlides={false}
        >
          {
            products.map(product=>{
              return (
                <SwiperSlide key={product.id}>
                  <ProductCard product={product} />
                </SwiperSlide>
              )
            })
          }
        
        {
          products.length >= 3 &&
          <HomeCarouselActionLeft>
            <button onClick={() => swiperRef.current.swiper.slidePrev()}>
              <CaretLeft size={32} color="#FFFFFF"/>
            </button>
          </HomeCarouselActionLeft>
        }
        
        {
          products.length >= 3 &&
          <HomeCarouselActionRight>
            <button onClick={() => swiperRef.current.swiper.slideNext()}>
              <CaretRight size={32} color="#FFFFFF"/>
            </button>
          </HomeCarouselActionRight>
        }
        </Swiper>
    </HomeCarousel>
  )
}