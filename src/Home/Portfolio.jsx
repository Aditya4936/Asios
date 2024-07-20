import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Mousewheel } from 'swiper/modules';
import sanitry from '../assets/Portfolio/sanitry.jpg';
import porclane from '../assets/Portfolio/slab.jpg';
import Sink from '../assets/Portfolio/Sink.jpg';
import Fault from '../assets/Portfolio/Fault.jpg';
import Outdoor from '../assets/Portfolio/outdoor-wall-tiles.jpg';
import ceramic from '../assets/Portfolio/Ceramic.webp';
const portfoliodata = [
    {
        img: porclane,
        title: 'Porcelain Tiles',
    },
    {
        img:ceramic,
        title:"Ceramic Tiles"
    },
    {
        img:Outdoor ,
        title:"Outdoor Tiles"
    },
    {
        img: sanitry,
        title: 'Sanitary Wares',
    },
    {
        img: Sink,
        title: 'Kitchen Sink',
    },
    {
        img: Fault,
        title: 'Faucets',
    },
];

const Portfolio = () => {
    return (
        <div className='container pt-4'>
            <div className='font-bold md:text-4xl sm:text-2xl text-xl text-center flex flex-col justify-center'>
                Product
            </div>
            <div className='mt-4 py-4 md:flex hidden'>
                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView="4"
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    mousewheel={{ releaseOnEdges: true }}
                    freeMode={true}
                    watchOverflow={true}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination, Mousewheel]}
                    className="mySwiper"
                >
                    {portfoliodata.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='relative'>
                                <img src={item.img} alt={item.title} className='w-[290px] h-[466px] object-cover' />
                                <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full text-left pl-6'>
                                    <p className='font-bold text-white'>{item.title}</p>
                                    <button className='button mt-2 bg-blue-500 text-white py-1 px-3 rounded'>
                                        View Product
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Portfolio;
