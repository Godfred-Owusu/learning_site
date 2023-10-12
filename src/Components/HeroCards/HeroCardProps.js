import React from 'react'
import './HeroCard.css'
export const HeroCardProp = (prop) => {
  return (
    <div className=''>
    <div className={`mt-20 card-container rounded-lg`}>

    <div>
        <img className={`w-10 h-10 ${prop.imageStyle} p-1 rounded`} src={prop.image} alt=''/>
    </div>
    <p className='my-5 card-title relative'>{prop.title}</p>
    <p className='text-sm font-thin'>{prop.desc}</p>
    </div>
    </div>
  )
}