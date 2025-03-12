import { useState } from 'react'
import './App.css'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Navbar from './Navbar'
import Category from './Category'
import BestSellingProducts from './BestSellingProducts'
import Banner from './Banner'


function App() {
  return (
    <> 
      <Navbar/>
      <Banner></Banner>
      <Category/>
      <BestSellingProducts/>
    </>
  )
}
export default App
