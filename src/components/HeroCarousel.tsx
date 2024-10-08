"use client"
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const heroImage = [
    { imgUrl: '/assets/images/hero-1.svg', alt: 'smartwatch'},
    { imgUrl: '/assets/images/hero-2.svg', alt: 'bag'},
    { imgUrl: '/assets/images/hero-3.svg', alt: 'lamp'},
    { imgUrl: '/assets/images/hero-4.svg', alt: 'air fryer'},
    { imgUrl: '/assets/images/hero-5.svg', alt: 'chair'},
]

function HeroCarousel() {
  return (
    <div className=' hero-carousel'>
     <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      showStatus={false}
      showArrows={false}
      interval={2000}
     >
        {
            heroImage.map((img, ) => (
               <Image 
                 src={img.imgUrl}
                 alt={img.alt}
                 width={484}
                 height={484}
                 key={img.alt}
                 className='object-contain '
               />
            ))}
    </Carousel>

    <Image
    src='/assets/icons/hand-drawn-arrow.svg'
    alt='arrow'
    width={175}
    height={175}
    className='absolute max-xl:hidden left-[15%] z-0 bottom-0'
    />
    </div>
  )
}

export default HeroCarousel