import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { VscTriangleLeft } from "react-icons/vsc";
import { VscTriangleRight } from "react-icons/vsc";

function App() {
  const [color, setColor] = useState(['yellow','green','blue'])

  function previous(){
    let ar = [...color]
    ar.push(ar.shift())
    setColor([...ar])
  }
  function next(){
    let ar = [...color]
    ar.unshift(ar.pop())
    setColor([...ar])
  }

  return (
    <div className='container'>
      <button className='button' onClick={previous}><VscTriangleLeft/>Preview</button>
      {color.map((val,i)=>(
        <div className='box' style={{background:color[i]}}></div>
      ))}
      <button className='button' onClick={next}>Next<VscTriangleRight/></button>
    </div>
  )
}

export default App
