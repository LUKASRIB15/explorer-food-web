import { Heart, Minus, Plus } from "@phosphor-icons/react";
import {Button} from "../Button"
import { api } from "../../libs/axios/api";
import { ProductCardActions, ProductCardContent, ProductCardFooterActions, ProductCardLayout } from "./styles";
import { formatPrice } from "../../utils/format-price";
import { useState } from "react";
import { formatQuantity } from "../../utils/format-quantity";
import { useNavigate } from "react-router-dom";

export function ProductCard({product}){
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)

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

  return (
    <ProductCardLayout>
      <ProductCardActions>
        <Heart size={24} color="#FFFFFF"/>
      </ProductCardActions>
      <ProductCardContent>
        <img 
          src={`${api.defaults.baseURL}/files/${product.avatar}`}
          alt={`Imagem de um ${product.name}`}
        />
        <p>{product.name}</p>
        <p>{product.description}</p>
        <span>R$ {formatPrice(product.price)}</span>
      </ProductCardContent>
      <ProductCardFooterActions>
        <div>
          <ProductCardActions onClick={handleDecrementQuantity}>
            <Minus size={24} color="#FFFFFF"/>
          </ProductCardActions>
          <span>{formatQuantity(quantity)}</span>
          <ProductCardActions onClick={handleIncrementQuantity}>
            <Plus size={24} color="#FFFFFF"/>
          </ProductCardActions>
        </div>
          <Button title={"Incluir"} onClick={()=>navigate(`/product/${product.id}`, {state: {quantity}})}/>
      </ProductCardFooterActions>
    </ProductCardLayout>
  )
}