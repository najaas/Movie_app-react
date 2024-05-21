import React from 'react';
import {Carousel} from 'antd';

import Banner1 from '../assets/Banner/banner.jpg';
import Banner2 from '../assets/Banner/banner7.jpg';
import Banner3 from '../assets/Banner/banner3.png';
import Banner4 from '../assets/Banner/banner4.jpg';
import Banner5 from '../assets/Banner/banner5.avif';
import Banner6 from '../assets/Banner/banner6.jpg';
import Banner7 from '../assets/Banner/banner10.webp';


const Banner = () => (

    <div className='w-full flex justify-center h-[450px] items-center  overflow-hidden'>
  <Carousel
    autoplay
    arrows
    className='h-[400px] w-[400px] border rounded-xl overflow-hidden sm:w-[1230px] bg-black'
    >
    <div className="h-[400px] flex items-center justify-center">
      <img src={Banner1} className="w-full h-full object-contain" alt="" />
    </div>
    <div className="h-[400px] flex items-center justify-center">
      <img src={Banner2} className="w-full h-full object-contain" alt="" />
    </div>
    <div className="h-[400px] flex items-center justify-center">
      <img src={Banner3} className="w-full h-full object-contain" alt="" />
    </div>
    <div className="h-[400px] flex items-center justify-center">
      <img src={Banner4} className="w-full h-full object-contain" alt="" />
    </div>
    <div className="h-[400px] flex items-center justify-center">
      <img src={Banner5} className="w-full h-full object-contain" alt="" />
    </div>
    <div className="h-[400px] flex items-center justify-center">
      <img src={Banner7} className="w-full h-full object-contain" alt="" />
    </div>
    <div className="h-[400px] flex items-center justify-center">
      <img src={Banner6} className="w-full h-full object-contain" alt="" />
    </div>
  </Carousel>
    </div>

);
export default Banner
