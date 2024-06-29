import LogoFooterSvg from "../../assets/explorer-logo-gray.svg"
import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { Input } from "../Input";
import { MenuFooter, MenuHeader, MenuLayout, MenuMain } from "./styles";
import { useAuthContext } from "../../hooks/use-auth-context";
import { useNavigate } from "react-router-dom";

export function Menu({onDesactiveMenu, menu, onChangeSearch, value}){
  const navigate = useNavigate()

  const {signOut, user} = useAuthContext()

  function handleKeyDown(event){
    if(event.key === "Enter"){
      onDesactiveMenu()
    }
  }

  return (
    <MenuLayout data-menu={menu}>
      <MenuHeader>
        <button onClick={onDesactiveMenu}>
          <X size={18} color="#FFFFFF"/>
        </button>
        <h3>Menu</h3>
      </MenuHeader>
      <MenuMain>
        <Input 
          identifier={"search"}
          placeholder={"Busque por pratos ou ingredientes"}
          icon={MagnifyingGlass}
          onChange={(event)=>onChangeSearch(event.target.value)}
          onKeyDown={handleKeyDown}
          value={value}
        />
        <section>
         {
          user && user.role === "admin" && 
          <button onClick={()=>navigate("/new-product")}>Novo prato</button>
          }
          <button onClick={()=>signOut()}>Sair</button>
        </section>
      </MenuMain>
      <MenuFooter>
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
      </MenuFooter>
    </MenuLayout>
  )
}