import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Eventhandler } from './props'
import {Parent,Eventhandler,Childternary} from './props'
import Mapdemo from './mapdemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Parent/>
      <Eventhandler/>
      <Childternary isDisplay={false}/> */}
      <div>
      <Mapdemo/>
      </div>
      
    </>
  )
}

export default App
