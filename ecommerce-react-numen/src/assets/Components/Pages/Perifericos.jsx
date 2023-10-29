import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import ItemsCard from '../Shop/ItemsCard';

const Perifericos = () => {
  const [products,setProducts]= useContext(ProductsContext);

  const newProducts= products.filter((products) => {
        return products.id > 11 && products.id < 18
     });
    
    
  return (
  <section className='flex flex-col'>
    <div className='flex justify-center mt-20 mb-10 border-2 border-black rounded-sm mx-9 hover:bg-gray-800 hover:text-lime-500'>
          <h2 className='text-2xl'>PERIFERICOS</h2>
          </div>
    <div className='flex flex-wrap justify-center gap-5'>
       {newProducts.map((products) => {
                return <ItemsCard key={products.id} {...products}/>
            })} 
    </div>
  </section>
      )
}

export default Perifericos
