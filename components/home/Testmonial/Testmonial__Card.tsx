import React from 'react';
import user from "@/images/user-icon.jpg"
import Image from 'next/image';
import {IoIosQuote} from "react-icons/io"
import ReactStars from 'react-rating-star-with-type'

interface TestimonialItemProps {
  name: string;
  location: string;
  rating: number;
  text: string;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ name, location, rating, text }) => {
  
  return (
    <div className="testi-item box-shadow-hover max-w-[400px]">
      <div className="testi-head">
        <Image width="50" height="50" src={user} alt="" />
        <h5>
          {name}
          <span className="font12 normal">{location}</span>
        </h5>
      </div>
      <div className="line"></div>
      <div className="relative py-[40px] px-[30px]">
        <IoIosQuote className="absolute -top-4 right-12 text-[60px] text-[rgba(242,101,34,0.3)] opacity-40" />
        <div className='my-[12px]'>
        <ReactStars
        value={rating}
        size={13}
        isEdit={false}
      />
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default TestimonialItem;
