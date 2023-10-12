import React from 'react'
import './Services.css'
export const Services = () => {
  return (
    <section className='paddings'>

    <div className='w-full grid lg:grid-cols-2 md:grid-col-1 items-center gap-20'>
      <div className=''>
        <img src='../img/col-md-6.png' alt=''/>
      </div>
      <div className=' w-full '>
        <p className='text-3xl font-bold w-1/2 py-10 relative service-title '>  Get Quality Education</p>
        <p className='w-11/12 font-light pb-10'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
        <a href='learnMore' className=' text-brand-orange'>Learn More</a>
      </div>
    </div>
    </section>
  )
}
