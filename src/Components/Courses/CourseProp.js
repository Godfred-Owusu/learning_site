import React from 'react'
import {AiOutlineHeart,AiOutlineShoppingCart,AiFillEye,AiOutlineDownload,AiFillStar,AiOutlineRight} from 'react-icons/ai'
export const CourseProp = (prop) => {
  return (

    <div className='mb-5'>
        <div className='bg-white w-11/12'>
        <div className='relative' >
            <img  className='w-full' src={prop.image} alt=''/>
            <p className='absolute top-3 left-3 text-white font-bold bg-red-500 py-1 px-4 rounded-lg'>Sale</p>
           
    
            <div className='flex justify-center items-center gap-2 absolute bottom-3 left-[32%]'>
            <AiOutlineHeart size={35} className=' bg-white p-2 rounded-full'/>
            <AiOutlineShoppingCart size={35} className=' bg-white p-2 rounded-full'/>
            <AiFillEye size={35} className=' bg-white p-2 rounded-full'/>
            </div>
            
        </div>

        <div className='px-5 pb-5'>
            <div>
            <div className='flex justify-between items-center my-5'>
        <p className='text-brand-orange  font-bold'>{prop.title}</p>
        <div className='flex items-center gap-2 bg-[#26335D] rounded-2xl p-1 px-2'>
            <AiFillStar color='gold' size={22}/>
        <p className='text-white font-bold'>4.9</p>
        </div>
            </div>
            <p className='font-bold'>{prop.subtitle}</p>
            <p className='my-3 w-11/12 font-light'>{prop.desc}.</p>
        </div>

        <div className='flex items-center gap-3'>
            <AiOutlineDownload />
            <p className='font-medium text-sm'>15 Sales</p>
        </div>
        <p className='my-3 font-bold'><span className='text-slate-500'>$16.48 </span> <span className='text-[#2435A1] ml-2'>$6.48</span></p>

        <div className='flex gap-3 w-fit items-center text-brand-orange border rounded-3xl border-brand-orange font-bold px-5 py-3 mb-5'>
        <button>Learn More </button>
        <AiOutlineRight />
        </div>
        </div>
        
        </div>
    </div>
  )
}
