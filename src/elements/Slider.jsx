import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Lazy } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/lazy';

/**
 * Presentación de imagenes con controles y páginación
 * @param {*} slides arreglo de imagenes a presentar
 */
const Slider = ({ slides }) => {
    return <>
        <Swiper
            autoHeight={true}
            spaceBetween={10}
            pagination={{ clickable: true }}
            navigation={true}
            lazy={true}
            modules={[Navigation, Pagination, Lazy]}
            grabCursor={true}
        >
            {slides.map((item, index) => {
                return <SwiperSlide key={"slide-" + index} width={500}>
                    <div>
                        <img src={item} alt={"Fotografía"} />
                    </div>
                </SwiperSlide>
            })}
        </Swiper>
    </>
}

export default Slider