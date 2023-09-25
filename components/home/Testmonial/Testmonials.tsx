'use client'
import React, {useRef} from 'react'
import TestimonialItem from './Testmonial__Card'
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextArrow from './Arrows/NextArrow';
import PrevArrow from './Arrows/PrevArrorw';



const Testmonials: React.FC = () => {
    const arr = [1,2,3,4,5,6,7,8,9];

    const sliderRef = useRef<Slider | null>(null);

    const goToNextSlide = () => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    };

    const goToPrevSlide = () => {
      if (sliderRef.current) {
        sliderRef.current.slickPrev();
      }
    };

    const settings = {
      arrow: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <NextArrow onClick={goToNextSlide} />,
      prevArrow: <PrevArrow onClick={goToPrevSlide} />,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    }
  return (
    <section className='bg-[#E5EEF6] py-[150px]'>
      <section className='max-w-[1200px] mx-auto'>
      <div>
      <p className='text-[12px] mb-[7px] text-[#737373] tracking-[1px] font-bold'>TESTMONIAL & PARTNER</p>
      <h2>What our clients says?</h2>
      </div>

      <div className='relative'>
        <Slider {...settings} ref={sliderRef}>
        {arr.map(item => (
          <TestimonialItem key={item} name='Monir Hosain' location='Dhaka' text='fsdjfjksdfhdsjk' rating={5} />
        ))}
        </Slider>
        
      </div>
      </section>
    </section>
    
  )
}

export default Testmonials