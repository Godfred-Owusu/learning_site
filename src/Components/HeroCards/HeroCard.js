import React from 'react'
import { HeroCardProp } from './HeroCardProps'
export const HeroCard = () => {
  return (
    <div className='wrapper relative grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
      <HeroCardProp 
       image='../img/icon cool-icon-n2.svg'
      imageStyle='bg-brand-orange'
      title='Expert instruction'
      desc='The gradual accumulation of 
      information about atomic and 
      small-scale behaviour...'
      />

<HeroCardProp  
       image='../img/013-telescope-1.png'
      imageStyle='bg-[#2435A1]'
      title='Expert instruction'
      desc='The gradual accumulation of 
      information about atomic and 
      small-scale behaviour...'
      />

<HeroCardProp  
       image='../img/icon cool-icon-n8.svg'
      imageStyle='bg-[#FFC652]'
      title='Expert instruction'
      desc='The gradual accumulation of 
      information about atomic and 
      small-scale behaviour...'
      />
     
     </div>

  )
}

