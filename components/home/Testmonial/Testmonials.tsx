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

    const reviews = [
      {
        name: "John Doe",
        District: "Downtown",
        rating: 4.5,
        review: "John is a dedicated professional who consistently goes above and beyond. He's a pleasure to work with and brings a positive attitude to every task."
      },
      {
        name: "Jane Smith",
        District: "Beachside",
        rating: 4.8,
        review: "Jane is a true asset to our team. Her attention to detail and problem-solving skills are exceptional. She always meets deadlines and is a reliable team member."
      },
      {
        name: "Michael Johnson",
        District: "Suburbia",
        rating: 4.0,
        review: "Michael is a great team player. He communicates effectively and is always willing to help out. He brings a positive energy to the workplace."
      },
      {
        name: "Emily Davis",
        District: "Little India",
        rating: 4.7,
        review: "Emily's work is of the highest quality. Her dedication and commitment to excellence are commendable. She consistently exceeds expectations."
      },
      {
        name: "David Wilson",
        District: "Waterfront",
        rating: 4.6,
        review: "David is a reliable and trustworthy colleague. His work is consistently top-notch, and he is known for his problem-solving skills and creative solutions."
      },
      {
        name: "Sarah Brown",
        District: "Old Town",
        rating: 4.3,
        review: "Sarah is a dedicated professional with a strong work ethic. She is always willing to take on new challenges and adapts well to changing circumstances."
      }
    ];
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
      arrows: true,
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
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
          }
        }
      ]
    }
  return (
    <section className='bg-[#E5EEF6] py-[150px] p-[20px]'>
      <section className='max-w-[1200px] mx-auto'>
      <div>
      <p className='text-[12px] mb-[7px] text-[#737373] tracking-[1px] font-bold'>TESTMONIAL & PARTNER</p>
      <h2>What our clients says?</h2>
      </div>

      <div className='relative'>
        <Slider {...settings} ref={sliderRef}>
        {reviews?.map(({name, District, rating, review}, id) => (
          <TestimonialItem key={id} name={name} location={District} text={review} rating={rating} />
        ))}
        </Slider>
        
      </div>
      </section>
    </section>
    
  )
}

export default Testmonials