import React from 'react'
import {useSwiper} from "swiper/react"
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"

const SwiperNavButton = () => {
    const swiper = useSwiper()
  return (
    <div>
        <div onClick={() => swiper.slidePrev()} className='swiper-button-prev '>
        
        </div>
        <div onClick={() => swiper.slideNext()} className='swiper-button-next '>
        </div>
    </div>
  )
}

export default SwiperNavButton