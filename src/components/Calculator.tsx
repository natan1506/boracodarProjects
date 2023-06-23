import { Divide, Percent, Play, SkipBack, SkipForward, X } from 'phosphor-react'
import Sofa from '../assets/sofa.png'
import Vector360 from '../assets/360.png'
import VectorGif from '../assets/sofaGif.gif'
import { useState } from 'react'

export function Calculator () {
  const [inputs, setInputs] = useState<string>('')
  const [operation, setOperation] = useState('')
  const [result, setResult] = useState('0')

  function calculate(val: string) {
    console.log(val)

    setInputs(`${inputs} ${val}`)
  }
  function clear(val: string) {
    console.log(val)

    setInputs('')
    setResult('0')
  }

  function percentage(percent: number, total: number) {

    return ((percent/ 100) * total).toFixed(2)
}

  function resultTotal(){
    setInputs('')
    if(inputs.includes("%")){
      
    }
    setResult(eval(inputs))
  }

  return (
    <div className="flex items-center justify-center text-gray-50 gap-5 bg-[#807ECE] rounded-lg w-[875px] h-[800px]">
      <div className='flex flex-col bg-[#2D2A37] w-[280px] h-[380px] rounded-2xl p-8 shadow-gray-900'>
        <div className='flex flex-col'>
          <div className='flex justify-end h-4'>
            <span className='text-xs text-[#6B6B6B]'>{inputs}</span>
          </div>
          <div className='flex justify-between'>
            <span className='text-xs text-[#6B6B6B]'>=</span>
            <span className='text-lg text-[#EBEBEB]'>{result}</span>
          </div>
        </div>
        <div className='flex flex-wrap gap-2 items-end'>
          <button
            onClick={()=>{clear('CE')}}
            className='w-12 h-12 rounded-full text-purple-500  flex items-center justify-center text-xl hover:bg-gray-900 transition-colors'>CE</button>
          <button
            onClick={()=>{clear('C')}}
            className='w-12 h-12 rounded-full flex items-center justify-center text-xl bg-gray-900 text-gray-100 border border-gray-800 hover:bg-purple-light transition-colors'>C</button>
          <button
            onClick={()=>{calculate('%')}}
            className='w-12 h-12 rounded-full flex items-center justify-center text-xl bg-gray-900 text-gray-100 border border-gray-800 hover:bg-purple-light transition-colors'>
            <Percent />
          </button>
          <button
            onClick={()=>{calculate('/')}}
            className='w-12 h-12 rounded-full flex items-center justify-center text-xl bg-purple-dark text-gray-100 border border-purple-light hover:bg-purple-light transition-colors'>
            <Divide />
          </button>
          <button
            onClick={()=>{calculate('7')}}
            className='w-12 h-12 rounded-full flex items-center justify-center text-xl bg-gray-900 text-gray-100 border border-gray-800 hover:bg-purple-light transition-colors'>7</button>
          <button
            onClick={()=>{calculate('8')}}
            className='w-12 h-12 rounded-full flex items-center justify-center text-xl bg-gray-900 text-gray-100 border border-gray-800 hover:bg-purple-light transition-colors'>8</button>
          <button
            onClick={()=>{calculate('9')}}
            className='w-12 h-12 rounded-full flex items-center justify-center text-xl bg-gray-900 text-gray-100 border border-gray-800 hover:bg-purple-light transition-colors'>9</button>

          <button
            onClick={()=>{calculate('*')}}
            className='w-12 h-12 rounded-full flex items-center justify-center text-xl  bg-purple-dark text-gray-100 border border-purple-light hover:bg-purple-light transition-colors'>X</button>

          <button
            onClick={()=>{calculate('4')}}
            className='w-12 h-12 rounded-full flex items-center justify-center text-xl bg-gray-900 text-gray-100 border border-gray-800 hover:bg-purple-light transition-colors'>4</button>
          <button
            onClick={()=>{calculate('5')}}
            className='w-12 h-12 rounded-full flex items-center justify-center text-xl bg-gray-900 text-gray-100 border border-gray-800 hover:bg-purple-light transition-colors'>5</button>
          <button
            onClick={()=>{calculate('6')}}
            className='w-12 h-12 rounded-full flex items-center justify-center text-xl bg-gray-900 text-gray-100 border border-gray-800 hover:bg-purple-light transition-colors'>6</button>

          <button
            onClick={()=>{calculate('-')}}
            className='w-12 h-12 rounded-full flex items-center justify-center text-xl  bg-purple-dark text-gray-100 border border-purple-light hover:bg-purple-light transition-colors'>-</button>

          <button
            onClick={()=>{calculate('1')}}
            className='w-12 h-12 rounded-full flex items-center justify-center text-xl bg-gray-900 text-gray-100 border border-gray-800 hover:bg-purple-light transition-colors'>1</button>
          <button
            onClick={()=>{calculate('2')}}
            className='w-12 h-12 rounded-full flex items-center justify-center text-xl bg-gray-900 text-gray-100 border border-gray-800 hover:bg-purple-light transition-colors'>2</button>
          <button
            onClick={()=>{calculate('3')}}
            className='w-12 h-12 rounded-full flex items-center justify-center text-xl bg-gray-900 text-gray-100 border border-gray-800 hover:bg-purple-light transition-colors'>3</button>

          <button
            onClick={()=>{calculate('+')}}
            className='w-12 h-12 rounded-full flex items-center justify-center text-xl bg-purple-dark text-gray-100 border border-purple-light hover:bg-purple-light transition-colors'>+</button>

          <div className='flex flex-1 justify-between'>
            <button
              onClick={()=>{calculate('+/-')}}
              className='w-12 h-12 rounded-full flex items-center justify-center text-xl bg-gray-900 text-gray-100 border border-gray-800 hover:bg-purple-light transition-colors'>+/-</button>
            <button
              onClick={()=>{calculate('0')}}
              className='w-12 h-12 rounded-full flex items-center justify-center text-xl bg-gray-900 text-gray-100 border border-gray-800 hover:bg-purple-light transition-colors'>0</button>
            <button
              onClick={()=>{calculate(',')}}
              className='w-12 h-12 rounded-full flex items-center justify-center text-xl bg-gray-900 text-gray-100 border border-gray-800 hover:bg-purple-light transition-colors'>,</button>
            <button
              onClick={()=>{resultTotal()}}
              className='w-12 h-12 rounded-full flex items-center justify-center text-xl bg-purple-dark text-gray-100 border border-purple-light hover:bg-purple-light transition-colors'>=</button>
          </div>
        </div>
      </div>
    </div>
  )
}