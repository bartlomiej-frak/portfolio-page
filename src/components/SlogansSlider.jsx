import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export const SlogansSlider = ({ slogans }) => {
    return (
        <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={50}
            followFinger={true}
            speed={100}
            allowTouchMove={true}
            autoplay={{ disableOnInteraction: false, delay: 10000 }}
        >
            <SwiperSlide>
                <div className="slogan">
                    <h2 className="slogan__circle">{slogans.firstSlide.title}</h2>
                    <span className="slogan__underline">
                        <span></span>
                    </span>
                    <p>{slogans.firstSlide.content}</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slogan">
                    <h2 className="slogan__circle">{slogans.secondSlide.title}</h2>
                    <span className="slogan__underline slogan__underline--second">
                        <span></span>
                    </span>
                    <p>{slogans.secondSlide.content}</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slogan">
                    <h2 className="slogan__circle">{slogans.thirdSlide.title}</h2>
                    <span className="slogan__underline slogan__underline--third">
                        <span></span>
                    </span>
                    <p>{slogans.thirdSlide.content}</p>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};
