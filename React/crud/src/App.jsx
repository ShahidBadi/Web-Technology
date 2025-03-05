import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Productcrud from './productCrud'
import Facultycrud from './Faculty'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Productcrud/>
      </div>
      <div>
        <Facultycrud/>
      </div>
    </>
  )
}

export default App
