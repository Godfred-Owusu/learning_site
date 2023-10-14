import React from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {MdOutlineDone} from 'react-icons/md'

export const PricingProps = (prop) => {
  return (
    <div className='relative bg-white w-11/12 py-10 px-10 shadow-xl my-5'>
        <div className={`absolute -right-4 top-5 ${prop.new}`}>
            <p className=' text-white bg-[#E77C40] rounded-[50%] p-5'>New</p>
        </div>
    <div className='bg-[#FF6551] w-fit p-5 rounded-full mt-10'>
        <AiFillHeart color='white' size={50}/>
    </div>
    <p className='font-bold text-2xl my-5'>FREE</p>
    <p>Organize across all apps by hand</p>
    <div className='my-5'>
    <p className='text-3xl font-bold text-[#FF6551]'>19$</p>
    <p className='text-[#8EC2F2]'>Pre Month</p>
    </div>
    <p className='font-light'>Slate helps you see how many more days you need...</p>
    <button className='w-full bg-brand-orange p-3 rounded-lg text-white my-5'>Try for free</button>
    <div className='flex items-center gap-3'>

    <div className='bg-[#2DC071] w-fit p-1 rounded-full '>
        <MdOutlineDone color='white' size={30}/>
    </div>
    <p>Unlimited product updates</p>
    </div>

    <div className='flex items-center gap-3 my-5'>
    <div className='bg-[#2DC071] w-fit p-1 rounded-full '>
        <MdOutlineDone color='white' size={30}/>
    </div>
    <p>Unlimited product updates</p>
    </div>

    <div className='flex items-center gap-3 my-5'>
    <div className='bg-[#2DC071] w-fit p-1 rounded-full '>
        <MdOutlineDone color='white' size={30}/>
    </div>
    <p>Unlimited product updates</p>
    </div>

    <div className='flex items-center gap-3 my-5'>
    <div className='bg-[#BDBDBD] w-fit p-1 rounded-full '>
        <MdOutlineDone color='white' size={30}/>
    </div>
    <p>1GB Cloud storage</p>
    </div>

    <div className='flex items-center gap-3 my-5'>
    <div className='bg-[#BDBDBD] w-fit p-1 rounded-full '>
        <MdOutlineDone color='white' size={30}/>
    </div>
    <p>1GB Cloud storage</p>
    </div>

    </div>
  )
}
