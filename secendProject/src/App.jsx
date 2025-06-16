import { useState } from 'react'
import './App.css'
import Card from './compunents/Card'

function App() {

  const [counter, setCounter] = useState(0)
  const name = "Sohaib khan"
  const increase=()=>{
    setCounter((counter)=>counter + 1)
    setCounter((counter)=>counter + 1)
    setCounter((counter)=>counter + 1)
    setCounter((counter)=>counter + 1)
    setCounter((counter)=>counter + 1)
  }
  const decrease=()=>{
    setCounter(counter - 1)
  }


  return (
    <>
      <h1 className='custom-class' >Hellow {name}</h1>
      <h2>Counter : { counter}</h2>
      <button className='p-2 bg-blue-900 m-2 rounded-md '  onClick={increase}>increase</button>
      <button className='p-2 bg-blue-900 m-2 rounded-md ' onClick={decrease}>decrease</button>
      <div className='flex items-center justify-center flex-wrap'>
      <Card name="Sohaib" />
      <Card name="Kashif" />
      <Card name="Muneeb" />
      <Card name="khalid" />
      <Card name="Faisal" />
      </div>
    </>
  )
}

export default App
