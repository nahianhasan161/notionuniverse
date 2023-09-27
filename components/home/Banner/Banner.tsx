"use client";
import React from "react";
import img1 from "@/images/ch-girl.png";
import img2 from "@/images/w-f.png";
import img3 from "@/images/test.png";
import { SwiperSlide, Swiper } from "swiper/react";
import Image from "next/image";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import SwiperNavButton from "./SwiperNavButton";
import Features from "./Features";

import "swiper/css/effect-fade";
import VarientAnimation from "@/Assets/Animation/VarientAnimation.";

const Banner = () => {
    const demoData = [
        {
            id: 1,
            title: "From Financial Insight to Success",
            description:
                "In the pursuit of success, financial focus is the anchor that keeps you grounded yet moving forward.",
            image: img1,
        },
        {
            id: 2,
            title: "Help You To Grow Your Business",
            description:
                "Turn setbacks into comebacks, and challenges into opportunities – that's the essence of business growth.",
            image: img2,
        },
        {
            id: 3,
            title: "Recover, Rebuild, Rise",
            description:
                "Every step towards debt recovery is a stride towards the limitless horizon of financial independence.",
            image: img3,
        },
    ];

    return (
        <div className="banner h-auto md:h-[65vh]" id="banner">
            <section className="">
                <Swiper
                    className="swiperS pt-[200px]"
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{
                        nextEl: "swiper-button-next",
                        prevEl: "swiper-button-prev",
                    }}
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    speed={1300}
                >
                    {demoData?.map(({ id, title, description, image }) => {
                        return (
                            <SwiperSlide key={id}>
                                <section className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-center h-full pt-[150px] lg:pt-[40px] p-[20px]">
                                    <div className="max-w-[700px] relative">
                                        <VarientAnimation
                                            direction="left"
                                            delay={0.2}
                                        >
                                            <div className="tp-caption tp-resizeme font-second text-second bolder">
                                                WE'RE NOTION RECOVERY
                                            </div>
                                        </VarientAnimation>
                                        <VarientAnimation
                                            direction="left"
                                            delay={0.5}
                                        >
                                            <div
                                                className="tp-caption tp-resizeme font-second text-second bolder text-[50px]"
                                                style={{ fontSize: "50px" }}
                                            >
                                                <p>{title}</p>
                                            </div>
                                        </VarientAnimation>
                                        <VarientAnimation
                                            direction="left"
                                            delay={0.7}
                                        >
                                            <p className='tp-caption tp-resizeme sh3"'>
                                                {description}
                                            </p>
                                        </VarientAnimation>
                                    </div>
                                    <VarientAnimation
                                        direction="left"
                                        delay={0.4}
                                    >
                                        <div className="flex-initial relative">
                                            <Image
                                                src={image}
                                                width={600}
                                                alt=""
                                                className="relative -bottom-[80px]"
                                            ></Image>
                                        </div>
                                    </VarientAnimation>
                                </section>
                            </SwiperSlide>
                        );
                    })}

                    <SwiperNavButton />
                </Swiper>

                <Features />
            </section>
        </div>
    );
};

export default Banner;
