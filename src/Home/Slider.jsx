import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import b1 from '../assets/1.jpg';
import b2 from '../assets/2.jpg';
import b3 from '../assets/3.jpg';
import b4 from '../assets/4.webp';

const Banner= () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider {...settings} >
            <div >
                {/* <span className='absolute top-[30%] left-[23%] font-semibold text-white text-[30px]'>Transform Your Space with Premium Tiles</span> */}
                <img src={b1} alt="Slide 1" className=" h-[500px]  w-full" />
            </div>
            <div >
                <img src={b2} alt="Slide 2" className=" h-[500px]  w-full " />
            </div>
            <div >
                <img src={b3} alt="Slide 3" className=" h-[500px]  w-full " />
            </div>
            <div >
                <img src={b4} alt="Slide 4" className=" h-[500px]  w-full " />
            </div>
        </Slider>
    )
}

export default Banner;
