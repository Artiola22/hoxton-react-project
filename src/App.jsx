import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import './App.css'



import NavBar from './components/NavBar'
import Basket from './Pages/Basket'
import Categories from './Pages/Categories'
import CategoryProducts from './Pages/CategoryProducts'
import PageNotFound from './Pages/PageNotFound'
import ProductDetails from './Pages/ProductDetails'
import Products from './Pages/Products'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'


function App() {
  const [users, setUsers] = useState([])

  return (
    <div className="App">
     <>
     <NavBar />
     </>
    <main>

      <Routes >

        <Route  index element= { <Navigate replace to='/products' />} />
        <Route  path="/products" element={<Products />}/>
        <Route  path="/products/:id" element={<ProductDetails />}/>
        <Route  path="/categories" element={<Categories />}/>
        <Route  path="/categories/:id" element={<CategoryProducts />}/>
        <Route  path="/basket" element={<Basket />}/>
        <Route  path="/signin" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </main>
      
      
    </div>
  )
}

export default App
