import React from 'react'
import { TestimonialProp } from './TestimonialProp'


export const Testimonial = () => {
  return (
    <section className='paddings w-full'>
      <div>
        <p className='text-brand-orange font-bold my-5'>Practice Advice</p>
      <p className='font-bold text-xl'>Approdable Packages</p>
      <p className='lg:w-1/2 md:w-1/2 sm:w-full font-light my-5'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
      </div>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-ful'>
      <TestimonialProp />
      <TestimonialProp />
      <TestimonialProp />
    </div>
    </section>
  )
}
