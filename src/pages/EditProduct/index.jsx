import { CaretLeft, Plus, UploadSimple, X } from "@phosphor-icons/react";
import { Header } from "../../components/Header";
import { useState } from "react";
import { Menu } from "../../components/Menu";
import { EditProductFooter, EditProductIngredientCard, EditProductLayout, EditProductMain, EditProductScroll } from "./styles";
import LogoFooterSvg from "../../assets/explorer-logo-gray.svg"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { api } from "../../libs/axios/api";
import { useParams } from "react-router-dom";

export function EditProduct(){
  const navigate = useNavigate()
  const params = useParams()
  const [menuActive, setMenuActive] = useState(false)
  const [name, setName] = useState("")
  const [category, setCategory] = useState("meal")
  const [description, setDescription] = useState("")

  const [newIngredient, setNewIngredient] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [price, setPrice] = useState("")
  const [avatarFile, setAvatarFile] = useState(null)

  const saveChangesIsImpossible = name.trim() === "" || ingredients.length === 0 || price.trim() === "" || avatarFile === "" || description.trim() === ""

  function handleAddNewIngredient(){
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("")
  }

  function handleRemoveIngredient(ingredient){
    setIngredients(prevState => prevState.filter(item => item !== ingredient))
  }

  async function handleRemoveProduct(){
    await api.delete(`/products/${params.id}`)
    navigate("/")
  }

  async function handleEditProduct(event){
    event.preventDefault()

    const response = await api.put(`/products/${params.id}`, {
      name,
      category,
      description,
      ingredients,
      price: Number(price),
    })

    if(response.status === 200 && avatarFile){
      const avatarFormData = new FormData()
      avatarFormData.append("avatar", avatarFile)

      await api.patch(`/products/${params.id}/avatar`, avatarFormData, {
        headers: {
          "Content-Type": "multipart/form-data" 
        }
      })
    }

    navigate("/")
  }

  return (
    <EditProductLayout>
      <Header 
        onActiveMenu={()=>setMenuActive(true)}

      />
      <EditProductScroll>
      <EditProductMain onSubmit={handleEditProduct}>
        <section>
          <button onClick={()=>navigate(-1)}>
            <CaretLeft size={32} color="#FFFFFF"/>
            voltar
          </button>
        </section>
        <h2>Editar prato</h2>
        <section>
          <p>Imagem do prato</p>
          <label htmlFor="add-image">
            <UploadSimple size={24} color="#FFFFFF"/>
            {avatarFile ? avatarFile.name : "Selecione imagem"}
          </label>
          <input id="add-image" type="file" onChange={event=>setAvatarFile(event.target.files[0])}/>
        </section>
        <Input 
          identifier={"name"}
          label={"Nome"}
          placeholder={"Ex.: Salada Ceasar"}
          onChange={event=>setName(event.target.value)}
        />
        <section>
          <label htmlFor="category">Categoria</label>
          <select name="categories" id="category" value={category} onChange={event=>setCategory(event.target.value)}>
            <option value="meal">Refeição</option>
            <option value="dessert">Sobremesa</option>
            <option value="drink">Bebida</option>
          </select>
        </section>
        <section>
          <label>Ingredientes</label>
          <div>
            {
              ingredients.map((ingredient, index)=>(
                <EditProductIngredientCard key={index}>
                  <span>{ingredient}</span>
                  <button onClick={()=>handleRemoveIngredient(ingredient)}>
                    <X size={16} color="#FFFFFF"/>
                  </button>
                </EditProductIngredientCard>
              ))
            }
            <div>
              <input 
                type="text" 
                placeholder="Adicionar" 
                value={newIngredient} 
                onChange={event=>setNewIngredient(event.target.value)}
              />
              <button type="button" onClick={handleAddNewIngredient}>
                <Plus size={16} color="#FFFFFF"/>
              </button>

            </div>
          </div>
        </section>
        <Input 
          identifier={"price"}
          label={"Preço"}
          placeholder={"R$ 00,00"}
          type="number"
          onChange={event=>setPrice(event.target.value)}
        />
        <section>
          <label htmlFor="description">Descricão</label>
          <textarea 
            name="description" 
            id="description" 
            placeholder="Fale brevemente sobre o prato, quantos ingredientes e quantos modos de preparo ha, se houver"
            onChange={event=>setDescription(event.target.value)}
          />
        </section>
        <section>
          <Button 
            title={"Excluir prato"}
            type="button"
            onClick={handleRemoveProduct}
            style={{backgroundColor: "#0D161B"}}
          />
          <Button 
            title={"Salvar alterações"}
            type="submit"
            disabled={saveChangesIsImpossible}
          />
        </section>
      </EditProductMain>
      <EditProductFooter>
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
      </EditProductFooter>
      </EditProductScroll>
      <Menu 
        onDesactiveMenu={()=>setMenuActive(false)}
        menu={menuActive}
      />
    </EditProductLayout>
  )
}