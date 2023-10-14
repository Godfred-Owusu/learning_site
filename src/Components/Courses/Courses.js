import React from 'react'
import { CourseProp } from './CourseProp'

export const Courses = () => {
  return (
    <section className=' bg-[#26335D] paddings'>
      <div className=''>
      <div>
        <p className='text-brand-orange '>Practice Advice</p>
        <p className='text-2xl font-bold text-white py-5'>Our Popular Courses</p>
        <p className='font-light text-white mb-20'>Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics </p>
      </div>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center w-full'>
      <CourseProp 
      image='../img/product-cover-124 sec-.png'
      title='training Courses'
      subtitle='Video in Live Action'
      desc="We focus on ergonomics and meeting 
      you where you work. It's only a 
      keystroke away"
      />

<CourseProp 
      image='../img/product-cover-125 sec-.png'
      title='Books Liberary	'
      subtitle='Every Client Matters'
      desc="We focus on ergonomics and meeting 
      you where you work. It's only a 
      keystroke away"
      />
      <CourseProp 
      image='../img/product-cover-126 sec-.png'
      title='Certified Teacher'
      subtitle='Get Quality Education'
      desc="We focus on ergonomics and meeting 
      you where you work. It's only a 
      keystroke away"
      />
      
      </div>
      </div>
    </section>
  )
}
