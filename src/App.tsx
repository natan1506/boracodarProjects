import { useState } from 'react'
import { CardStore } from './components/CardStore'
import { Header } from './components/Header'
import { Player } from './components/Player'

function App() {
  const [visibleComp, setVisibleComp] = useState('player')

  const handleVisible = (comp: string) => {
    setVisibleComp(comp)
  }

 return (
  <div className='bg-space-cadet h-screen flex overflow-hidden'>
    <Header handleAlternateComponentsVisible={handleVisible}/>
    <div className='p-4 w-full flex justify-center items-center'>
      {visibleComp === 'player' && <Player/>}
      {visibleComp === 'cardStore' && <CardStore/>}
      <div className='fixed bottom-0 text-cameo-pink p-1'>
        Developed by <a href="https://github.com/natan1506" target="_blank" className='font-bold'>Natan Souza</a>
      </div>
    </div>
    
  </div>
  )
}

export default App
