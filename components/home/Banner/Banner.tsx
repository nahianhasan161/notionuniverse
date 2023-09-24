'use client'
import React from 'react'
import img1 from "@/images/ch-girl.png"
import { url } from 'inspector'
import bg from "@/images/slide-home1.jpg"
import { SwiperSlide, Swiper } from 'swiper/react'
import Image from 'next/image'
import  {Navigation} from "swiper/modules"
import swiperCore from "swiper"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperNavButton from './SwiperNavButton'
import Features from './Features'




const Banner = () => {


  return (
    <div className='banner' id='banner' >
      <Swiper className='swiperS' spaceBetween={50} slidesPerView={1} 
      navigation={{ nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }}
      modules={[Navigation]}  

        
      
      
      >
       <SwiperSlide>
        <section className='max-w-[1400px] mx-auto flex justify-between items-center h-full'>
        <div className='max-w-[700px]'>
          <div className='tp-caption tp-resizeme font-second text-second bolder'>WE'RE NOTION RECOVERY</div>
          <div className='tp-caption tp-resizeme font-second text-second bolder text-[50px]' style={{fontSize: "50px"}}>
            <p>Help You to Grow Your Business</p>
          </div>
          <p className='tp-caption tp-resizeme sh3"'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam minus rem soluta dolorum ratione placeat enim, consectetur, animi facere dolorem error incidunt veniam tenetur illum totam sequi itaque laudantium molestiae.</p>
        </div>
        <div className='flex-initial relative'>
          <Image src={img1} width={800} alt='' className='relative -bottom-28'></Image>
        </div>
      </section>
        </SwiperSlide>
        <SwiperSlide>
        <section className='max-w-[1400px] mx-auto flex justify-between items-center h-full'>
        <div className='max-w-[700px]'>
          <div className='tp-caption tp-resizeme font-second text-second bolder'>WE'RE NOTION RECOVERY</div>
          <div className='tp-caption tp-resizeme font-second text-second bolder text-[50px]' style={{fontSize: "50px"}}>
            <p>Help You to Grow Your Business</p>
          </div>
          <p className='tp-caption tp-resizeme sh3"'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam minus rem soluta dolorum ratione placeat enim, consectetur, animi facere dolorem error incidunt veniam tenetur illum totam sequi itaque laudantium molestiae.</p>
        </div>
        <div className='flex-initial relative'>
          <Image src={img1} width={800} alt='' className='relative -bottom-28'></Image>
        </div>
      </section>
        </SwiperSlide>

        <SwiperNavButton />
      </Swiper>

      <Features />
      
    </div>
  )
}

export default Banner