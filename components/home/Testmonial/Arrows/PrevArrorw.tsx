import React, { FC } from 'react';
import { BsChevronLeft } from 'react-icons/bs';

interface PrevArrowProps {
  onClick: () => void;
}

const PrevArrow: FC<PrevArrowProps> = ({ onClick }) => {
  return (
    <div className='absolute right-[70px] -top-[80px]' onClick={onClick}>
      <div className='hover:bg-[#f26522] group transition-all duration-300 ease-linear h-[50px] w-[50px] grid place-items-center cursor-pointer border-[2px] border-[#737373] hover:border-[#f26522]'>
        <BsChevronLeft className="group-hover:text-white text-[24px]" />
      </div>
    </div>
  );
};

export default PrevArrow;
