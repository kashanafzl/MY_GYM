import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import star from "../../../Assets/img/star.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Client.css";
import man1 from "../../../Assets/img/t1.svg";
import man2 from "../../../Assets/img/t2.svg";
import man3 from "../../../Assets/img/t3.svg";
import man4 from "../../../Assets/img/t1.svg";
import man5 from "../../../Assets/img/t2.svg";

// import required modules
import { Navigation } from "swiper/modules";

export default function Client() {
  return (
    <>
      <div className="cparentdivv">
        <h1>
          What <span>clients say</span> with us
        </h1>
      </div>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="cparentdiv">
            <p>
              "I am extremely grateful for the positive impact gym training has
              had on my life; through consistent training, expert guidance from
              coaches, and access to top-notch facilities, I have witnessed a
              remarkable transformation in strength, endurance, and overall
              fitness levels."
            </p>

            <div className="stardiv">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>

            <h4 className="textjohn">John</h4>
            <div className="tmaindiv">
              <img src={man1} alt="" />
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="cparentdiv">
            <p>
              "I am extremely grateful for the positive impact gym training has
              had on my life; through consistent training, expert guidance from
              coaches, and access to top-notch facilities, I have witnessed a
              remarkable transformation in strength, endurance, and overall
              fitness levels."
            </p>

            <div className="stardiv">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>

            <h4 className="textjohn">Qasim</h4>
            <div className="tmaindiv">
              <img src={man2} alt="" />
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="cparentdiv">
            <p>
              "I am extremely grateful for the positive impact gym training has
              had on my life; through consistent training, expert guidance from
              coaches, and access to top-notch facilities, I have witnessed a
              remarkable transformation in strength, endurance, and overall
              fitness levels."
            </p>

            <div className="stardiv">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>

            <h4 className="textjohn">Alyan</h4>
            <div className="tmaindiv">
              <img src={man3} alt="" />
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="cparentdiv">
            <p>
              "I am extremely grateful for the positive impact gym training has
              had on my life; through consistent training, expert guidance from
              coaches, and access to top-notch facilities, I have witnessed a
              remarkable transformation in strength, endurance, and overall
              fitness levels."
            </p>

            <div className="stardiv">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>

            <h4 className="textjohn">Alyan</h4>
            <div className="tmaindiv">
              <img src={man4} alt="" />
            </div>
          </div>
        </SwiperSlide>
 


        <SwiperSlide>
          <div className="cparentdiv">
            <p>
              "I am extremely grateful for the positive impact gym training has
              had on my life; through consistent training, expert guidance from
              coaches, and access to top-notch facilities, I have witnessed a
              remarkable transformation in strength, endurance, and overall
              fitness levels."
            </p>

            <div className="stardiv">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>

            <h4 className="textjohn">Alyan</h4>
            <div className="tmaindiv">
              <img src={man5} alt="" />
            </div>
          </div>
        </SwiperSlide>
 
 
      </Swiper>
    </>
  );
}
