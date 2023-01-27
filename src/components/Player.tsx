import { Play, SkipBack, SkipForward } from 'phosphor-react'
import Avatar from '../assets/avatar.png'

export function Player () {
  return (
    <div className="flex gap-5">
      <div className="">
        <div className="bg-[#2A2141] p-9 rounded-lg h-full flex justify-between flex-col gap-3">
          <img src={Avatar}/>
          <div>
            <h2 className='text-gray-100 text-2xl font-semibold'>Acorda Devinho</h2>
            <span className='text-gray-400'>Banda Nome</span>
          </div>
          <div className="flex w-full justify-between text-gray-100">
            <SkipBack size={32} weight="fill"/>
            <Play size={32} weight="fill"/>
            <SkipForward size={32} weight="fill"/>
          </div>
          <div>
            <div className='h-1 bg-gray-600 rounded-full'>
              <div className='h-1 bg-gray-300 rounded-full w-1/2'></div>
            </div>
            <div className='flex justify-between text-gray-100 text-sm py-2'>
              <span>03:20</span>
              <span>00:12</span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-5 flex-col'>
        <div>
          <div className="bg-[#2A2141] p-9 rounded-lg flex flex-col gap-3">
            <div className='flex gap-5 items-center justify-between'>
              <img src={Avatar} className="h-24"/>
              <div>
                <h2 className='text-gray-100 text-2xl font-semibold'>Acorda Devinho</h2>
                <span className='text-gray-400'>Banda Nome</span>
              </div>
            </div>
            <div className="flex px-8 py-3 flex-1 w-full justify-between text-gray-100">
              <SkipBack size={32} weight="fill"/>
              <Play size={32} weight="fill"/>
              <SkipForward size={32} weight="fill"/>
            </div>
            <div>
            <div className='h-1 bg-gray-600 rounded-full'>
              <div className='h-1 bg-gray-300 rounded-full w-1/2'></div>
            </div>
            <div className='flex justify-between text-gray-100 text-sm py-2'>
              <span>03:20</span>
              <span>00:12</span>
            </div>
          </div>
          </div>
        </div>
        <div>
          <div className="bg-[#2A2141] p-9 rounded-lg flex flex-col gap-">
            <div className='flex gap-5 items-center justify-between'>
              <img src={Avatar} className="h-24"/>
              <div>
                <h2 className='text-gray-100 text-2xl font-semibold'>Acorda Devinho</h2>
                <span className='text-gray-400'>Banda Nome</span>
              </div>
            </div>
            <div className="flex px-8 py-3 flex-1 w-full justify-between text-gray-100">
              <SkipBack size={32} weight="fill"/>
              <Play size={32} weight="fill"/>
              <SkipForward size={32} weight="fill"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}