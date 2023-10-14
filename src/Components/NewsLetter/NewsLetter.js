import React from 'react'

export const NewsLetter = () => {
  return (
    <section className='paddings'>
      <div className='text-center'>
      <p className='text-brand-orange font-bold my-5'>Practice Advice</p>
      <p className='font-bold text-xl'>Watch our Courses</p>
      <p className=' font-light my-5'>Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: Newtonian mechanics </p>
      </div>

      <div className='flex justify-center items-center mt-10'>
        <input placeholder='Your Email' className='p-3 w-1/2 bg-[#E6E6E6] rounded-s-md '/>
        <button className='text-white bg-brand-orange p-3 px-5 font-bold rounded-e-md'>Subscribe</button>
      </div>
    </section>
  )
}
