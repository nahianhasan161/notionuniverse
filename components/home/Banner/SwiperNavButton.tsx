import React from 'react'
import {useSwiper} from "swiper/react"
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"

const SwiperNavButton = () => {
    const swiper = useSwiper()
  return (
    <div>
        <div onClick={() => swiper.slidePrev()} className='swiper-button-prev arrow absolute top-[50%] bg-[rgba(0,0,0,0.5)] w-[40px] mt-[-5px] h-[40px] left-[20px] text-white'>
          <IoIosArrowBack className="w-full h-full flex justify-center items-center text-[15px]" />
        
        </div>
        <div onClick={() => swiper.slideNext()} className='swiper-button-next arrow absolute top-[50%] bg-[rgba(0,0,0,0.5)] hover:bg-black w-[60px] mt-[-5px] h-[40px] right-[20px]'>
        <IoIosArrowForward className="w-full h-full flex justify-center items-center text-[15px] text-white" />
        </div>
    </div>
  )
}

export default SwiperNavButton