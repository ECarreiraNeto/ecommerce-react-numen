import React from 'react'
import SecondFooter from './SecondFooter'

const Footer = () => {
  return (
    <footer className='mt-[12.5rem] -z-40'>
    <SecondFooter/>
    <div className='bg-gray-800 text-white w-full h-[18.75rem] flex flex-col items-center gap-4 p-3 sm:flex-row sm:justify-around'>
      <div  className='bg-yellow-300 w-36 text-xl rounded-full flex place-items-center justify-center font-[Poppins] h-[1.875rem]  text-black '>
        <ion-icon name="game-controller-outline"></ion-icon>
        <h1 className='text-base font-extrabold text-black'>ELECTRONICS</h1>
      </div>
      <div className='flex flex-col justify-center'>
        <div className='flex justify-center'>
            <button className='border-2 border-white border-solid w-[4.375rem] p-1 rounded-md hover:bg-white hover:text-gray-800 '>Ayuda</button>
        </div>
        <div>
            <h3>Si tenes sugerencias o comentarios,<strong>contactanos</strong></h3>
        </div>
      </div>
      <div className='w-[15.625rem] text-4xl flex flex-col'>
        <h2 className='flex justify-center mb-[1.25rem] text-base sm:text-2xl'>Seguinos en</h2>
        <div className='flex justify-center gap-4'>
          <div className='transition ease-in-out delay-150 hover:-translate-y-5 hover: transform-cpu hover:cursor-pointer'>
            <ion-icon name="logo-facebook"></ion-icon>
          </div>
          <div className='transition ease-in-out delay-150 hover:-translate-y-5 hover: transform-cpu hover:cursor-pointer'>
            <ion-icon name="logo-instagram"></ion-icon>
          </div>
          <div className='transition ease-in-out delay-150 hover:-translate-y-5 hover: transform-cpu hover:cursor-pointer'>
            <ion-icon name="phone-portrait-outline"></ion-icon>
          </div>
          <div className='transition ease-in-out delay-150 hover:-translate-y-5 hover: transform-cpu hover:cursor-pointer'>
            <ion-icon name="mail-unread-outline"></ion-icon>
          </div>
        </div>
      </div>
      <div className='flex w-[4.375rem] md:w-[100px]'>
          <img src="./src/assets/Components/Footer/image/Data-fiscal.jpg" alt="Data Fiscal" />
      </div>
    </div>
    </footer>
  )
}

export default Footer
