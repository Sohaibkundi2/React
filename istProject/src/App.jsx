import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



export default function App() {



  const [color, setcolor] = useState('yellow');
  return (
      <div className="box" style={{backgroundColor:color}} >
        <button onClick={()=>{setcolor("red")}} style={{backgroundColor:'red'}} className="btn">Red</button>
        <button onClick={()=>{setcolor("green")}} style={{backgroundColor:'green'}} className="btn">Green</button>
        <button onClick={()=>{setcolor("yellow")}} style={{backgroundColor:'yellow'}} className="btn">Yellow</button>
        <button onClick={()=>{setcolor("blue")}} style={{backgroundColor:'blue'}} className="btn">Blue</button>
        <button onClick={()=>{setcolor("orangered")}} style={{backgroundColor:'orangered'}} className="btn">Orangered</button>
        <button onClick={()=>{setcolor("white")}} style={{backgroundColor:'white'}} className="btn">White</button>
        <button onClick={()=>{setcolor("purple")}} style={{backgroundColor:'purple'}} className="btn">Purple</button>
      </div>
  )
}