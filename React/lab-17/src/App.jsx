import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './layout'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from './home'
import About from './About'
import Contact from './contact'
import Resume from './resume'
import Detail from './detail'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/resume' element={<Resume/>}></Route>
            <Route path='/detail' element={<Detail/>}></Route>
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
