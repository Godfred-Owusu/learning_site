import React from 'react'
import {BsTelephone,BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'
import {HiMail} from 'react-icons/hi'
export const Footer = () => {
  return (
    <section className='paddings'>
      <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2'>

      <div>
        <p className=' my-2  mt-4 font-bold'>Company Info</p>
        <p className='font-light my-2 text-sm'>About Us</p>
        <p className='font-light my-2 text-sm'>About Us</p>
        <p className='font-light my-2 text-sm'>About Us</p>
        <p className='font-light my-2 text-sm'>About Us</p>
      </div>

      <div>
        <p className=' my-2 mt-4 font-bold'>Legal</p>
        <p className='font-light my-2 text-sm'>About Us</p>
        <p className='font-light my-2 text-sm'>About Us</p>
        <p className='font-light my-2 text-sm'>About Us</p>
        <p className='font-light my-2 text-sm'>About Us</p>
      </div>

      <div>
        <p className=' my-2 mt-4 font-bold'>Features</p>
        <p className='font-light my-2 text-sm'>About Us</p>
        <p className='font-light my-2 text-sm'>About Us</p>
        <p className='font-light my-2 text-sm'>About Us</p>
        <p className='font-light my-2 text-sm'>About Us</p>
      </div>

      <div>
        <p className=' my-2 mt-4 font-bold'>Resources</p>
        <p className='font-light my-2 text-sm'>About Us</p>
        <p className='font-light my-2 text-sm'>About Us</p>
        <p className='font-light my-2 text-sm'>About Us</p>
        <p className='font-light my-2 text-sm'>About Us</p>
      </div>

      <div>
      <p className=' my-2 font-bold'>Get In Touch</p>
        <div className='flex items-center gap-2'>
          <BsTelephone color='#FF6551'/>
        <p className='font-light my-2 text-sm'>About Us</p>
        </div>


        <div className='flex items-center gap-2'>
          <CiLocationOn color='#FF6551' size={30}/>
          <div>
          <p className='font-light text-sm'>4517 Washington Ave. Manchester, 
</p>
        <p className='font-light text-sm'>Kentucky 39495</p>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <HiMail color='#FF6551'/>
        <p className='font-light my-2 text-sm'>About Us</p>
        </div>
        
      </div>
      </div>
      <div className='flex items-center justify-between pr-10 bg-[#FAFAFA] mt-10'>
        <p>Made With Love By Godfred</p>
        <div className='flex items-center gap-5'>
          <BsFacebook color='#FF6551'/>
          <BsInstagram color='#FF6551'/>
          <BsTwitter color='#FF6551'/>
        </div>
      </div>
    </section>
  )
}
