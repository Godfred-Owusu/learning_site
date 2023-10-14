import React from 'react'
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

export const TestimonialProp = () => {
  return (
    <div className='flex flex-col w-11/12 items-center px-20 gap-3 my-5'>
    <div className='flex gap-2 items-center '>
        <AiFillStar color='gold' />
        <AiFillStar color='gold'/>
        <AiFillStar color='gold'/>
        <AiFillStar color='gold'/>
        <AiOutlineStar color='gold'/>
    </div>
    <div>
        <p className='text-center font-light'>Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
    </div>

    <div className='flex items-center gap-3 mt-2'>
      <img src='../img/testimonial-user-cover-167.png' alt=''/>
      <div>
        <p className='font-bold text-sm text-brand-orange '>Regina Miles</p>
        <p className='text-sm'>Designer</p>
      </div>
    </div>
    </div>
  )
}
