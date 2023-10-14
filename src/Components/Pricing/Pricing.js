import React from 'react'
import { PricingProps } from './PricingProps'

export const Pricing = () => {
  return (
    <section className='paddings w-full'>
      <p className='text-brand-orange font-bold my-5'>Practice Advice</p>
      <p className='font-bold text-xl'>Watch our Courses</p>
      <p className='lg:w-1/2 md:w-full sm:w-full font-light my-5'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full'>
      <PricingProps new='hidden'/>
      <PricingProps/>
      <PricingProps new='hidden'/>
    </div>
    </section>
  )
}
