import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/**
 * Presentación de imagenes con controles y páginación
 * @param {*} slides arreglo de imagenes a presentar
 * @returns 
 */
const Slider = ({ slides }) => {
    return <>
        <Swiper
            spaceBetween={10}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Navigation, Pagination]}
            grabCursor={true}
        >
            {slides.map((item, index) => {
                return <SwiperSlide key={"slide-" + index} width={500}>
                    <img src={item} alt={"Fotografía"} />
                </SwiperSlide>
            })}
        </Swiper>
    </>
}

export default Slider