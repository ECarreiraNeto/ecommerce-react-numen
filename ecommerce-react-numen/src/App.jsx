import { useState } from 'react'
import Navbar from './assets/Components/Navbar/Navbar'
import Galeria from './assets/Components/Galeria/Galeria'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Shopping from './assets/Components/Shop/Shopping';
import ShoppingProvider from './assets/context/ShoppingContext';
import Cart from './assets/Components/Navbar/Cart';
import ProductsProvider from './assets/context/ProductsContext';
import Footer from './assets/Components/Footer/footer';





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full h-screen'>
  <ProductsProvider>
    <ShoppingProvider>
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Galeria/>}/> 
            <Route path="/cart" element={<Cart/>}/> 
          </Routes>
       <Footer/>
      </Router>
      </ShoppingProvider>
  </ProductsProvider>
    </div>
    </>
  )
}

export default App
