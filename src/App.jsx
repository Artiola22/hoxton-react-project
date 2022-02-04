import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import './App.css'



import NavBar from './components/NavBar'
import Basket from './Pages/Basket'
import Categories from './Pages/Categories'
import CategoryProducts from './Pages/CategoryProducts'
import ContactUs from './Pages/ContactUs'
import PageNotFound from './Pages/PageNotFound'
import ProductDetails from './Pages/ProductDetails'
import Products from './Pages/Products'
import Search from './Pages/Search'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'


function App() {
 
  const [user, setUser] = useState('');

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
        <Route  path="/basket" element={<Basket  user={user}/>}/>
        <Route  path="/signin" element={<SignIn user={user} setUser={setUser} />}/>
        <Route path="/signup" element={<SignUp  user={user} setUser={setUser}/>}/>
        <Route  path="/search" element={<Search />}/>
        <Route path="/contact" element={<ContactUs />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </main>
      
      
    </div>
  )
}

export default App
