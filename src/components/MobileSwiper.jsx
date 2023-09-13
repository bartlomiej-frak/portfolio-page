import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const MobileSwiper = ({ slogans }) => {
    return (
        <Swiper slidesPerView={1} spaceBetween={50}>
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

export default MobileSwiper;
