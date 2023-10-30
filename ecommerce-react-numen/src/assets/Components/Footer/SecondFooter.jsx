import React from 'react'

const SecondFooter = () => {
const Image= [
{img:"./src/assets/Components/Footer/image/acer.svg",name:"Acer"},
{img:"./src/assets/Components/Footer/image/amd.svg",name:"Amd"},
{img:"./src/assets/Components/Footer/image/asus.svg",name:"Asus"},
{img:"./src/assets/Components/Footer/image/intel.svg",name:"Intel"},
{img:"./src/assets/Components/Footer/image/Lenovo.svg",name:"Lenovo"},
{img:"./src/assets/Components/Footer/image/nvidia.svg",name:"Nvidia"},
]
  return (
    <section className='flex justify-around p-3 border shadow shadow-black border-x-2'>
      {Image.map((image)=> (
        <img key={image.name} src={image.img} alt={image.name} className='w-12' />
      ))}
    </section>
  )
}

export default SecondFooter
