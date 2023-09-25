import React, { FC } from 'react';
import { BsChevronRight } from 'react-icons/bs';

interface NextArrowProps {
  onClick: () => void;
}

const NextArrow: FC<NextArrowProps> = ({ onClick }) => {
  return (
    <div className='absolute right-0 -top-[80px]' onClick={onClick}>
      <div className='hover:bg-[#f26522] group transition-all duration-300 ease-linear border-[2px] border-[#737373] hover:border-[#f26522] h-[50px] w-[50px]  grid place-items-center cursor-pointer'>
        <BsChevronRight className="group-hover:text-white text-[24px]" />
      </div>
    </div>
  );
};

export default NextArrow;
