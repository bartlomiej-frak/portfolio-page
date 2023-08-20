import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
// import styles from './swiper.scss';

const MobileSwiper = () => {
    return (
        <Swiper slidesPerView={1}>
            <SwiperSlide>
                <div className="slogan">
                    <h2 className="slogan__circle">Discover</h2>
                    <span className="slogan__underline">
                        <span></span>
                    </span>
                    <p>
                        The initial stage involved gathering information from the internet and
                        understanding the key ideas behind the boo.link website. The team conducted
                        research to grasp the desired aesthetic and target audience. Insights were
                        gathered to align the design with the website's purpose.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slogan">
                    <h2 className="slogan__circle">Define</h2>
                    <span className="slogan__underline slogan__underline--second">
                        <span></span>
                    </span>
                    <p>
                        Based on the gathered information, the team collaborated to define the
                        design direction for the website and the background set. Using Figma,
                        wireframes and mockups were created to visualize the proposed changes and
                        ensure a cohesive user experience.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slogan">
                    <h2 className="slogan__circle">Develop</h2>
                    <span className="slogan__underline slogan__underline--third">
                        <span></span>
                    </span>
                    <p>
                        Using Figma for the website redesign and Adobe Illustrator for creating the
                        background set, the team executed the design vision. The website was
                        redesigned to incorporate the new visual elements, such as updated
                        typography, color schemes, and improved layout. Simultaneously, the
                        background set was designed to provide a diverse range of appealing options
                        for the templates.
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default MobileSwiper;
