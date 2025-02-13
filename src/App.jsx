import './App.css';
import Faculty from './Faculty';
import Student from './Student';
import Product from './Product';
import FacultyTab from './FacultyTab'
import StudentTab from './StudentTab'
import ProductTab from './ProductTab'
import Homecomp from './Homecomp';
import Aboutcomp from './Aboutcomp';
import Contactcomp from './Contactcomp';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>

          <Route  path="/" element={<Navbar />} >

              <Route  path="/Facultycart" element={<Faculty/>} />
              <Route  path="/FacultyTable" element={<FacultyTab />} />
              
              <Route  path="/Studentcart" element={<Student/>} />
              <Route  path="/StudentTable" element={<StudentTab />} />

              <Route  path="/Productcart" element={<Product/>} />
              <Route  path="/ProductTable" element={<ProductTab />} />


          </Route>

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
