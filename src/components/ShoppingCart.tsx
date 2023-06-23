import { ReactElement, useEffect, useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { CaretDown, CaretUp, Minus, Plus, ShoppingCart as ShoppingCartIcon } from 'phosphor-react';
import Sofa from '../assets/sofa.png'
import Monitor from '../assets/monitor.png'

const objectItems = [
  {
    id: 1,
    title: "Sofa para comprar",
    price: '1.000,00',
    quantity: 1,
    cover: Sofa,
  },
  {
    id: 2,
    title: "Monitor Dell para comprar",
    price: '1.000,00',
    quantity: 1,
    cover: Monitor,
  },
  {
    id: 3,
    title: "Sofa para comprar",
    price: '1.000,00',
    quantity: 1,
    cover: Sofa,
  },
  {
    id: 4,
    title: "Sofa para comprar",
    price: '1.000,00',
    quantity: 1,
    cover: Sofa,
  },
  {
    id: 5,
    title: "Sofa para comprar",
    price: '1.000,00',
    quantity: 1,
    cover: Sofa,
  },
]

interface productsProps {
  id: number,
  title: string,
  price: number,
  quantity: number,
  cover: string
}

export function ShoppingCart () {
  const [isOpen, setIsOpen] = useState(false) 
  const [totalPrice, setTotalPrice] = useState(0.0) 
  const [itemsShoppingCart, setItemsShoppingCart] = useState<productsProps[]>([
    {
      id: 1,
      title: "Sofa para comprar",
      price: 1000,
      quantity: 1,
      cover: Sofa,
    },
    {
      id: 2,
      title: "Monitor Dell para comprar",
      price: 1000,
      quantity: 1,
      cover: Monitor,
    },
    {
      id: 3,
      title: "Sofa para comprar",
      price: 1000.50,
      quantity: 1,
      cover: Sofa,
    },
    {
      id: 4,
      title: "Sofa para comprar",
      price: 1000,
      quantity: 1,
      cover: Sofa,
    },
    {
      id: 5,
      title: "Sofa para comprar",
      price: 1000,
      quantity: 1,
      cover: Sofa,
    },
  ])


  const somaItems = (items: productsProps[]) => {
    const reduce = items.reduce((accumulator, product) => {
      return accumulator + (product.price * product.quantity)
    }, 0)
    setTotalPrice(reduce)
  }

  useEffect(()=> {
    somaItems(itemsShoppingCart)
  }, [itemsShoppingCart])

  const incrementQuantity = (idItem: number, operation: string) => {
    const newArray = [...itemsShoppingCart]
    newArray.map(item => {
      if(item.id === idItem){
        if(operation === 'plus'){
          item.quantity++
        }else {
          item.quantity--
        }
      }
    })
    setItemsShoppingCart(newArray)
  }

  return (
    <div className="flex items-start justify-end text-gray-50 gap-5 bg-[#807ECE] rounded-lg w-[875px] h-[800px]">
      <div className='z-[999]'>
        <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenu.Trigger 
            className="p-2 text-md font-semibold bg-transparent text-left flex items-center gap-2"
          >
            <ShoppingCartIcon size={24} weight="fill" />
            <div>
              {!isOpen ? 
                <CaretUp size={20} />
                :
                <CaretDown size={20} />
              }
            </div>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content 
              align='end'
              className='pt-2 z-[99999] shadow-lg text-gray-300 right-0 min-w-40 origin-top-left bg-[#2D2A37] w-[320px] max-h-[480px] rounded-2xl mx-1 p-1 shadow-gray-900 overflow-hidden flex flex-col justify-between'
            >
              <div className='border-b-[0.05rem] border-gray-700 p-2 text-gray-300'>
                <span>
                  Seu carrinho tem <span className='font-bold text-gray-100'>{objectItems.length} itens</span>
                </span>
              </div>
              <div className='flex flex-col rounded-xl p-2 overflow-hidden overflow-scroll no-scrollbar'>
                {itemsShoppingCart.map(item => (
                  <div className='flex flex-1 my-1 border rounded-lg hover:bg-[#15131a] border-[#2D2A37] hover:p-2 hover:border-gray-500 transition-all' key={item.id}>
                    <img src={item.cover} className='w-[80px] h-[80px] object-cover rounded-lg overflow-hidden' />
                    <div className='flex flex-1 flex-col pl-3'>
                      <span>
                        {item.title}
                      </span>
                      <div className='flex flex-1 text-xs items-center justify-between gap-2'>
                        <div>
                          <span>R$ {item.price.toFixed(2).replace(".", ",").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                          <button disabled={item.quantity === 1 ? true : false}
                            onClick={() => incrementQuantity(item.id, 'minus')}
                            className='w-6 h-6 border border-gray-500 hover:bg-gray-600 rounded-md p-1 flex items-center justify-center transition-colors'>
                            <Minus size={16} weight="bold" />
                          </button>
                          <span>{item.quantity}</span>
                          <button 
                            onClick={() => incrementQuantity(item.id, 'plus')}
                            className='w-6 h-6 border rounded-md p-1 flex items-center  text-purple-500 justify-center hover:text-gray-100 border-purple-500 hover:bg-purple-600 transition-colors'>
                            <Plus size={16} weight="bold" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className='py-3 border-t-[0.05rem] border-gray-700 px-2 b-0 flex justify-between'>
                <span>Total</span>
                <span>R$ {totalPrice.toFixed(2).replace(".", ",").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}</span>
              </div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  )
}