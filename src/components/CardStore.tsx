import { Play, SkipBack, SkipForward, X } from 'phosphor-react'
import Sofa from '../assets/sofa.png'
import Vector360 from '../assets/360.png'
import VectorGif from '../assets/sofaGif.gif'
import { useState } from 'react'

export function CardStore () {
  const [handleGif, setHandleGif] = useState(false)

  return (
    <div className="flex items-center gap-5 bg-[#D9CDF7] rounded-lg w-[875px] h-[449px]">
      <div className='flex flex-col items-end'>
        <button onClick={() => setHandleGif(!handleGif)}>
        {handleGif ? (
            <X size={23}/>
          ) : (
            <img src={Vector360} alt="" />
          )}
        </button>
        {handleGif ? (
            <img src={VectorGif} alt="" className='max-w-[449px]' />
          ) : (
            <img src={Sofa} alt="" />
          )}
      </div>
      <div className='flex flex-col justify-center items-start gap-2'>
        <span className='text-xs text-gray-500'>CÓDIGO: 42404</span>
        <h1 className='font-semibold font-serif text-2xl'>Sofá Margot II - Rosé</h1>
        <span className='text-md text-gray-600'>R$ 4.000</span>
        <button className='border rounded-full px-3 py-1 border-gray-600 hover:border-[#ae93f0] hover:bg-[#ae93f0] transition-colors'>ADICIONAR À CESTA</button>
      </div>
    </div>
  )
}