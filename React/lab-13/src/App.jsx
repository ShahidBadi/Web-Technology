import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Maincomponent from './Maincomponent'
import Sidebar from './sidebar'
import Footercomponent from './Footercomponent'
import Navbarcomponent from './Navbarcomponent'


function App() {
  return (
    <>
      <div className='nav'>
        <Navbarcomponent />
      </div>
    <div className='sideandmain'>
    <div className='side'>
        <Sidebar />
      </div>
      <div className='main'>
        <Maincomponent />
      </div>
    </div>
      

      <div className='footer'>
        <Footercomponent />
      </div>


    </>
  )
}

export default App
