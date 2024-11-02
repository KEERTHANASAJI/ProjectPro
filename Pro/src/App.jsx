import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Add from './Components/Add'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/ho' element={<Home/>}/>
      <Route path='/ad' element={ <Add/>}/>
      </Routes>
     
      
    </>
  )
}

export default App
