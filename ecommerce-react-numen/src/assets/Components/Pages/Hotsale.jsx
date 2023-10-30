import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import ItemsCard from '../Shop/ItemsCard';

const Hotsale = () => {
  const [products,setProducts]= useContext(ProductsContext);

  const newProducts= products.filter((products) => {
        return products.precio < 80.000
     });
    
    
  return (
      
  <section className='flex flex-col'>
      <div>
            <section className='flex items-center w-full h-auto'>
            <img src="../src/assets/components/Pages/image/BlackFriday.jpg" alt="imagen de bienvenida" className='object-cover w-full h-[31.25rem] -z-20' />
            </section>
      </div>
    <div className='flex justify-center mt-20 mb-10 border-2 border-black rounded-sm mx-9 hover:bg-gray-800 hover:text-lime-500'>
          <h2 className='text-2xl'>HOT SALE</h2>
          </div>
    <div className='flex flex-wrap justify-center gap-5'>
       {newProducts.map((products) => {
                return <ItemsCard key={products.id} {...products}/>
            })} 
    </div>
  </section>
      )
}

export default Hotsale
