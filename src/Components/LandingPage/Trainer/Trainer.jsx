


import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Trainer.css'
// import required modules
import { Pagination } from 'swiper/modules';

import t1 from '../../../Assets/img/t1.svg'
import t2 from '../../../Assets/img/t2.svg'
import t3 from '../../../Assets/img/t3.svg'
import star from '../../../Assets/img/star.svg'

export default function App() {
  return (
    <>

<div className="trainingdiv">
             <h1>Our professional <br />
              <span>trainers</span></h1>
              <p>Whether you're looking to set up a home gym or enhance your current 
                 <br /> workout routine</p>
     

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='maincontent'>
                <img src={t1} alt="" />
                <h2>Borney Exiteid</h2>
                <p>Rate Trainer :</p>
                <div className="starmaindiv">
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                </div>
            </div>
        </SwiperSlide>
       
        <SwiperSlide>
            <div className='maincontent'>
                <img src={t2} alt="" />
                <h2>Borney Exiteid</h2>
                <p>Rate Trainer :</p>
                <div className="starmaindiv">
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='maincontent'>
                <img src={t3} alt="" />
                <h2>Borney Exiteid</h2>
                <p>Rate Trainer :</p>
               <div className="starmaindiv">
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='maincontent'>
                <img src={t1} alt="" />
                <h2>Borney Exiteid</h2>
                <p>Rate Trainer :</p>
               <div className="starmaindiv">
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                </div>
            </div>
        </SwiperSlide>
       
        <SwiperSlide>
            <div className='maincontent'>
                <img src={t2} alt="" />
                <h2>Borney Exiteid</h2>
                <p>Rate Trainer :</p>
               <div className="starmaindiv">
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className='maincontent'>
                <img src={t3} alt="" />
                <h2>Borney Exiteid</h2>
                <p>Rate Trainer :</p>
               <div className="starmaindiv">
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                <img className='star' src={star} alt="" />
                </div>
            </div>
        </SwiperSlide>

      </Swiper>

      </div>

    </>
  );
}
