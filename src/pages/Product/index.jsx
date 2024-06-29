import { useParams } from "react-router-dom"
import { Header } from "../../components/Header"
import { useState } from "react"
import { Menu } from "../../components/Menu"
import { ProductActions, ProductFooter, ProductFooterActions, ProductIngredients, ProductLayout, ProductMain, ProductScroll } from "./styles"
import LogoFooterSvg from "../../assets/explorer-logo-gray.svg"
import { CaretLeft, Minus, Plus, Receipt } from "@phosphor-icons/react"
import { useEffect } from "react"
import { api } from "../../libs/axios/api"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { useLocation } from "react-router-dom"
import { formatQuantity } from "../../utils/format-quantity"
import { formatPrice } from "../../utils/format-price"
import { useAuthContext } from "../../hooks/use-auth-context"

export function Product(){
  const {user} = useAuthContext()
  const [product, setProduct] = useState({})
  const params = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const [menuActive, setMenuActive] = useState(false)
  const [search, setSearch] = useState("")
  const [quantity, setQuantity] = useState(location.state?.quantity || 1)

  function handleDecrementQuantity(){
    if(quantity > 1){
      setQuantity(quantity - 1)
    }
  }

  function handleIncrementQuantity(){
    if(quantity < 10){
      setQuantity(quantity + 1)
    }
  }

  async function fetchProduct(){
    try{
      const tokenExists = api.defaults.headers.common.Authorization
      if(tokenExists){
        const product = await api.get(`/products/${params.id}`)
        setProduct(product.data)
      }

      
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchProduct()
  },[])

  return (
    <ProductLayout>
      <Header 
        onActiveMenu={()=>setMenuActive(true)}
      />
      <ProductScroll>
        <ProductMain>
          <section>
            <button onClick={()=>navigate(-1)}>
              <CaretLeft size={32} color="#FFFFFF"/>
              voltar
            </button>
          </section>
          <section>
            <img 
              src={`${api.defaults.baseURL}/files/${product.avatar}`}
              alt={`Imagem de um produto chamado ${product.name}`}
              width={264}
              height={264}
            />
            <div>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <ProductIngredients>
                {
                  product.ingredients && product.ingredients.map((ingredient, index)=>{
                    return (
                      <span key={ingredient.id} style={{
                        animationDelay: `${index / 2}s`
                      }}>{ingredient.name}</span>
                    )
                  })
                }
              </ProductIngredients>
              <ProductFooterActions>
                {
                  user && user.role === "client" &&
                  <div>
                    <ProductActions onClick={handleDecrementQuantity}>
                      <Minus size={24} color="#FFFFFF"/>
                    </ProductActions>
                    <span>{formatQuantity(quantity)}</span>
                    <ProductActions onClick={handleIncrementQuantity}>
                      <Plus size={24} color="#FFFFFF"/>
                    </ProductActions>
                  </div>
                }
                  {
                    user && user.role === "client" ?
                    <Button
                      icon={Receipt} 
                      title={`pedir ∙ R$ ${formatPrice(product.price * quantity)}`} 
                      onClick={()=>navigate(`/product/${product.id}`)}
                    />
                    :
                    <Button
                      title={"Editar prato"} 
                      onClick={()=>navigate(`/edit-product/${product.id}`)}
                    />
                  }
              </ProductFooterActions>
            </div>
          </section>
        </ProductMain>
        <ProductFooter>
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
        </ProductFooter>
      </ProductScroll>
      <Menu 
        onDesactiveMenu={()=>setMenuActive(false)}
        menu={menuActive}
        onChangeSearch={setSearch}
        value={search}
      />
    </ProductLayout>
  )
}