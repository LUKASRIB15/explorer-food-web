
import IllustrationMobilePng from "../../assets/illustration-mobile.png"
import IllustrationWebPng from "../../assets/illustration-web.png"
import { HomeFooter, HomeLayout, HomeMain, HomeMainEmpty, HomePresentation, HomeScroll } from "./styles"
import { Header } from "../../components/Header"
import { useEffect, useState } from "react"
import { api } from "../../libs/axios/api"
import { useAuthContext } from "../../hooks/use-auth-context"
import LogoFooterSvg from "../../assets/explorer-logo-gray.svg"
import { Carousel } from "../../components/Carousel"
import { Menu } from "../../components/Menu"
import { useRef } from "react"
import { SmileySad } from "@phosphor-icons/react"

export function Home() {
  
  const [meals, setMeals] = useState([])
  const [desserts, setDesserts] = useState([])
  const [drinks, setDrinks] = useState([])
  const [search, setSearch] = useState("")

  const [menuActive, setMenuActive] = useState(false)
  const returnToTopRef = useRef(null)


  const {signOut} = useAuthContext()

  async function fetchProducts(){
    try{
      const tokenExists = api.defaults.headers.common.Authorization

      if(tokenExists){
        const products = await api.get(`/products?title=${search}`)
        setMeals(products.data.filter(product=>product.category === "meal"))
        setDesserts(products.data.filter(product=>product.category === "dessert"))
        setDrinks(products.data.filter(product=>product.category === "drink"))
      }

    }catch(error){
      console.log(error)
      if(error.response.data && error.response.data.message === "Token is invalid!"){
        signOut()
      }
    }
  }

  function handleReturnToPageTop(){
      console.log(returnToTopRef.current)
      returnToTopRef.current.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    
  }


  useEffect(()=>{
    fetchProducts()
  },[search])

  return (
    <HomeLayout>
        <Header
          onActiveMenu={()=>setMenuActive(true)} 
          onChangeSearch={setSearch}
          value={search}
          returnToPageTop={handleReturnToPageTop}
        />

          <HomeScroll ref={returnToTopRef}>
        
          <HomePresentation>
            <img 
              src={IllustrationWebPng}
              alt="Ilustração de biscoitos coloridos com frutos ao redor"
            />
            <img 
              src={IllustrationMobilePng}
              alt="Ilustração de biscoitos coloridos com frutos ao redor"
            />
            <div>
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </HomePresentation>
          <HomeMain>
            {
              meals.length > 0 && <Carousel products={meals} title={"Refeições"}/>
            }
            {
              desserts.length > 0 && <Carousel products={desserts} title={"Sobremesas"}/>
            }
            {
              drinks.length > 0 && <Carousel products={drinks} title={"Bebidas"}/>
            }
            {
              meals.length === 0 && desserts.length === 0 && drinks.length === 0 && 
                <HomeMainEmpty>
                  <SmileySad size={48} color="#FFFFFF"/>
                  <p>Nenhum item encontrado</p>
                </HomeMainEmpty>
            }
            
          </HomeMain>
          <HomeFooter>
            <div>
              <div>
                <img 
                  src={LogoFooterSvg}
                  alt="gray Explorer Logo"
                  width={18}
                  height={18}
                />
                <h3>food explorer</h3>
              </div>
              <p>© 2023 - Todos os direitos reservados.</p>
            </div>
          </HomeFooter>
        </HomeScroll>
      
        <Menu 
          onDesactiveMenu={()=>setMenuActive(false)}
          menu={menuActive}
          onChangeSearch={setSearch}
          value={search}
        />
      
    </HomeLayout>
  )
}
