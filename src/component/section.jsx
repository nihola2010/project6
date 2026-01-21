import React, { useRef, useState } from 'react';
import logo10 from '../assets/logo10.png'
import logo11 from '../assets/logo11.png'
import logo12 from '../assets/logo12.png'
import { BsFillBasketFill } from "react-icons/bs";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

export default function Section() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} 
      className="mySwiper">
        <SwiperSlide>
            <div className='exam'>
              <div className='headline5'>
                <img src={logo10}/>
                <p>УСК Богатырь Romana, качели <br></br> гнездо Romana</p>
                <div className='head2'>
                    <div><h6>27 590 ₽</h6></div>
                     <div><BsFillBasketFill fontSize={30} /></div>
                </div>
            </div>
            <div className='headline5'>
                <img src={logo11}/>
                <p>Спортивный детский <br></br> комплекс “Юниор-Плюс”...</p>
                <div className='head2'>
                    <div><h6>15 990 ₽</h6></div>
                     <div><BsFillBasketFill fontSize={30} /></div>
                </div>
            </div>
            <div className='headline5'>
                <img src={logo11}/>
                <p>Детский уличный спортивный <br></br> комплекс «Юниор» (с сеткой)...</p>
                <div className='head2'>
                    <div><h6>19 490 ₽</h6></div>
                     <div><BsFillBasketFill fontSize={30} /></div>
                </div>
            </div>
            <div className='headline5'>
                <img src={logo12}/>
                <p>УСК Богатырь Romana, качели <br></br> гнездо Romana</p>
                <div className='head2'>
                    <div><h6>27 590 ₽</h6></div>
                     <div><BsFillBasketFill fontSize={30} /></div>
                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='exam'>
              <div className='headline5'>
                <img src={logo10}/>
                <p>УСК Богатырь Romana, качели <br></br> гнездо Romana</p>
                <div className='head2'>
                    <div><h6>27 590 ₽</h6></div>
                     <div><BsFillBasketFill fontSize={30} /></div>
                </div>
            </div>
            <div className='headline5'>
                <img src={logo11}/>
                <p>Спортивный детский <br></br> комплекс “Юниор-Плюс”...</p>
                <div className='head2'>
                    <div><h6>15 990 ₽</h6></div>
                     <div><BsFillBasketFill fontSize={30} /></div>
                </div>
            </div>
            <div className='headline5'>
                <img src={logo11}/>
                <p>Детский уличный спортивный <br></br> комплекс «Юниор» (с сеткой)...</p>
                <div className='head2'>
                    <div><h6>19 490 ₽</h6></div>
                     <div><BsFillBasketFill fontSize={30} /></div>
                </div>
            </div>
            <div className='headline5'>
                <img src={logo12}/>
                <p>УСК Богатырь Romana, качели <br></br> гнездо Romana</p>
                <div className='head2'>
                    <div><h6>27 590 ₽</h6></div>
                     <div><BsFillBasketFill fontSize={30} /></div>
                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='exam'>
              <div className='headline5'>
                <img src={logo10}/>
                <p>УСК Богатырь Romana, качели <br></br> гнездо Romana</p>
                <div className='head2'>
                    <div><h6>27 590 ₽</h6></div>
                     <div><BsFillBasketFill fontSize={30} /></div>
                </div>
            </div>
            <div className='headline5'>
                <img src={logo11}/>
                <p>Спортивный детский <br></br> комплекс “Юниор-Плюс”...</p>
                <div className='head2'>
                    <div><h6>15 990 ₽</h6></div>
                     <div><BsFillBasketFill fontSize={30} /></div>
                </div>
            </div>
            <div className='headline5'>
                <img src={logo11}/>
                <p>Детский уличный спортивный <br></br> комплекс «Юниор» (с сеткой)...</p>
                <div className='head2'>
                    <div><h6>19 490 ₽</h6></div>
                     <div><BsFillBasketFill fontSize={30} /></div>
                </div>
            </div>
            <div className='headline5'>
                <img src={logo12}/>
                <p>УСК Богатырь Romana, качели <br></br> гнездо Romana</p>
                <div className='head2'>
                    <div><h6>27 590 ₽</h6></div>
                     <div><BsFillBasketFill fontSize={30} /></div>
                </div>
            </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
