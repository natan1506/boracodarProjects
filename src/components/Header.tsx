import { Calculator, Cards, Columns, MusicNoteSimple, Rows, ShoppingCart } from "phosphor-react"
import { useEffect, useState } from "react"

interface HeaderProps {
  handleAlternateComponentsVisible: (arg0: string) => void
}

export function Header({handleAlternateComponentsVisible}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if(isOpen === true) {
      setTimeout(() => {
        setVisible(true)
      }, 70)
    }else {
      setVisible(false)
    }
  }, [isOpen])

  const openStyled = isOpen ? "w-60" : "w-12"
  const transformIconStyled = isOpen ? "rotate-90" : "rotate-0"
  return (
    <div className={["h-screen text-gray-100 top-0 left-0 bg-space-grey flex flex-col p-2 transition-all shadow-lg shadow-gray-900", openStyled].join(" ") }>
      <div>
        <button className="text-cameo-pink hover:text-french-mauve transition-colors" onClick={()=>{setIsOpen(!isOpen)}}>
          <Columns size={32} weight="fill" className={["transition-all transform", transformIconStyled].join(" ")}/>
        </button>
      </div>
      <div className={visible ? "block" : "hidden"}>
        <div className="p-2 rounded-lg">
          <button className="hover:bg-cameo-pink flex gap-2 hover:text-gray-800 my-1 px-2 py-1 rounded w-full text-left transition-all" onClick={() =>handleAlternateComponentsVisible("player")}>
            <MusicNoteSimple size={24} weight="fill" />
            Music player
          </button>
          <button className="hover:bg-cameo-pink flex gap-2 hover:text-gray-800 my-1 px-2 py-1 rounded w-full text-left transition-all" onClick={() =>handleAlternateComponentsVisible("cardStore")}>
            <Cards size={24} weight="fill" />
            Card Store
          </button>
          <button className="hover:bg-cameo-pink flex gap-2 hover:text-gray-800 my-1 px-2 py-1 rounded w-full text-left transition-all" onClick={() =>handleAlternateComponentsVisible("calculator")}>
            <Calculator size={24} weight="fill" />
            Calculadora
          </button>
          <button className="hover:bg-cameo-pink flex gap-2 hover:text-gray-800 my-1 px-2 py-1 rounded w-full text-left transition-all" onClick={() =>handleAlternateComponentsVisible("shoppingCart")}>
            <ShoppingCart size={24} weight="fill" />
            Carrinho de Compras
          </button>
        </div>
      </div>
    </div>
  )
}