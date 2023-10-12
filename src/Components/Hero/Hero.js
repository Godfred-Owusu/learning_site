import React from 'react'
import './Hero.css'

export const Hero = () => {
  return (
    <section id='home'>
    <div className='hero-container paddings relative'>
      <p className='text-brand-orange'>For Better Future</p>
      <p className='text-5xl font-bold mt-5 leading-snug'>HIGH QUALITY COURSE</p>
      <p className='mt-5 font-light'>Every day brings with it a fresh <br /> set of learning possibilities.</p>
      <div className='mt-5'>
      <button className='bg-brand-orange p-3 px-5 rounded-lg text-white mr-9'>Get Quotes Now</button>
      <button className='border-brand-orange border p-3 rounded-lg px-5 mt-3'>Learn More</button>
      </div>

      
    </div>
    </section>
  )
}
