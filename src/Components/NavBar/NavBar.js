import React,{useState} from 'react'
import './NavBar.css'
export const NavBar = () => {
  const [active,setActive] = useState('nav_links')
  const [toggleIcon, setToggleIcon] = useState('nav_toggle')
  const nav_toggle = ()=>{
    active === 'nav_links' ? setActive('nav_links nav_active'):setActive('nav_links')
    toggleIcon === 'nav_toggle' ? setToggleIcon('nav_toggle toggle'): setToggleIcon('nav_toggle')
  }
  return (
    <div className='relative nav_paddings'>
    <div className='flex justify-between items-center '>
      <div className='flex justify-around items-center'>
      <div className='mr-14'>
        <h1 className='text-xl font-bold '>BrandName</h1>
        </div>

      <div className='desk-link'>
        <a className='mx-2' href='#home'>Home</a>
         <a className='mx-2' href='#product'>Product</a>
         <a className='mx-2' href='#pricing'>Pricing</a>
         <a className='mx-2' href='#contact'>Contact</a>
      </div>
      </div>

      <div className='desk-link'>
      <button className='text-brand-orange mr-10'>Login</button>
       <button className='text-white bg-brand-orange px-5 py-2 rounded-lg'>Join Us</button>
      </div>


{/* Mobile View */}
<div className={toggleIcon} onClick={nav_toggle}>
      <div>
         <div className='line1 w-10 h-1 m-2 bg-gray-300'></div>
         <div className='line2 w-10 h-1 m-2 bg-gray-300'></div>
         <div className='line3 w-10 h-1 m-2 bg-gray-300'></div>
      </div>
      <div className={active}>
      <a className='' href='#home'>Home</a>
         <a className='' href='#product'>Product</a>
         <a className='' href='#pricing'>Pricing</a>
         <a className='' href='#contact'>Contact</a>
         <button className='text-brand-orange mr-10'>Login</button>
       <button className='text-white bg-brand-orange px-5 py-2 rounded-lg'>Join Us</button>
      </div>
       </div>
    </div>
    </div>
  )
}
