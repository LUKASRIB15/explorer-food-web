import { List, MagnifyingGlass, Receipt, SignOut } from "@phosphor-icons/react";
import { HeaderLayout, HeaderLink } from "./styles";
import LogoSvg from "../../assets/explorer-logo.svg"
import { Input } from "../Input";
import { useAuthContext } from "../../hooks/use-auth-context";

export function Header({onChangeSearch, returnToPageTop, onActiveMenu, value}){
  const {signOut} = useAuthContext()

  function handleSignOut(){
    signOut()
  }

  return (
    <HeaderLayout>
      <div>
        <button onClick={onActiveMenu}>
          <List size={24} color="#FFFFFF"/>
        </button>
        <button onClick={returnToPageTop}>
          <img 
            src={LogoSvg}
            alt="Explorer Logo"
            width={24}
            height={24}
          />
          <h1>food explorer</h1>
        </button>
        <Input 
          identifier={"search"}
          placeholder={"Busque por pratos ou ingredientes"}
          icon={MagnifyingGlass}
          onChange={(event)=>onChangeSearch(event.target.value)}
          value={value}
        />
        <HeaderLink href="#">
          <Receipt size={24} color="#FFFFFF"/>
          <span>0</span>
          <p>Pedidos (0)</p>
        </HeaderLink>
        <button onClick={handleSignOut}>
          <SignOut size={24} color="#FFFFFF"/>
        </button>
      </div>
    </HeaderLayout>
  )
}