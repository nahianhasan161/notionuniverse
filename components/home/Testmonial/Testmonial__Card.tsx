import React from 'react';
import user from "@/images/user-icon.jpg"
import Image from 'next/image';
import {IoIosQuote} from "react-icons/io"

interface TestimonialItemProps {
  name: string;
  location: string;
  rating: number;
  text: string;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ name, location, rating, text }) => {
  return (
    <div className="testi-item box-shadow-hover">
      <div className="testi-head">
        <Image width="50" height="50" src={user} alt="" />
        <h5>
          {name}
          <span className="font12 normal">{location}</span>
        </h5>
      </div>
      <div className="line"></div>
      <div className="testi-content">
        <IoIosQuote />
        <img width="86" height="12" src="images/45-star.png" alt="" />
        <p>{text}</p>
      </div>
    </div>
  );
}

export default TestimonialItem;
