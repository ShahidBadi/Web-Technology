import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Eventhandler } from './props'
import {Parent,Eventhandler} from './props'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Parent/>
      <Eventhandler/>
    </>
  )
}

export default App
