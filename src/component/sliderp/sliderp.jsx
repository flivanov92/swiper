
// Import Swiper styles
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/lazy";

import "./style.css";

// import required modules
import {Lazy, Parallax, Pagination, Navigation, Mousewheel, Keyboard, Autoplay } from "swiper";

export const Sliderp = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        lazy={true}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
          renderBullet: function (index, numere) {
            return '<span class="' + numere + '">' + (index + 1) + "</span>";
        }}}
        navigation={true}
        mousewheel={true}
        autoplay={{delay:3000, disableOnInteraction:false}}
        keyboard={{enabled:true}}
        modules={[Parallax, Pagination, Navigation, Lazy, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
        breakpoints={{
          375: {
            width: 375,
          },

          768: {
            width: 768,
          },

          1900: {
            width: 1900,
          },
        }}
      >
       
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300"><img alt="nextjs" src="https://cdn.thenewstack.io/media/2021/06/7c546588-nextjs.png" width="400"/>
           
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Why to the NextJS is the most important framework and
          
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          what is the purpose of using it ?
          
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
               It is very popular because it solve a big problem regarding the rendering of Javascript being SSR and CSR in the same time</p>
                
                <p> Is using the amazing features of React.
                 Identifying code erros earlier with Typescript and CSS support 
               
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300"><img alt="pic" src="https://www.letecode.com/storage/articles/September2021/fKFlgB6K1b9IwjcgwtGl.png" width="400"/>
           
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
           What is the difference between the client side rendering 
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            and  server side rendering ?
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            <p>Using SSR is making Next JS  one of the fastest JS framework.</p>
            <p>With SSR you will not have the problems  with the SEO or  slow initial load </p>

 

            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="picthree" data-swiper-parallax="-300">
           
          </div>
          <div className="sthree" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="tthree" data-swiper-parallax="-100">
            <p>
            1.1   It is very popular because it solve a big problem regarding the rendering of Javascript being SSR and CSR in the same time
1.2  Is using the amazing features of React.
1.3  Identifying code erros earlier with Typescript and CSS support 

            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div>
        <span id="bp-375"></span>
        <span id="bp-768"></span>
        <span id="bp-1024"></span>
      </div>
    </>
  );
}
