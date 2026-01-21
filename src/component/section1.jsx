import React, { useRef, useState } from 'react';
import { BsFillBasketFill } from "react-icons/bs";
import logo13 from '../assets/logo13.png'
import logo14 from '../assets/logo14.png'
import logo16 from '../assets/logo16.png'
import logo15 from '../assets/logo15.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

export default function Section1() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <div className='exam1'>
                <div className='headline6'>
                     <img src={logo13}/>
                     <p>Гантель разборная стальная <br></br> (гриф + блины) 15 кг</p>
                     <div className='head4'>
                    <div><h6>27 590 ₽</h6></div>
                    <div><BsFillBasketFill fontSize={30} /></div>
                    </div>
                </div>
                <div className='headline6'>
                     <img src={logo14}/>
                     <p>Гантель разборная (гриф + <br></br> блины) 24,1 кг</p>
                     <div className='head4'>
                    <div><h6>27 590 ₽</h6></div>
                    <div><BsFillBasketFill fontSize={30} /></div>
                    </div>
                </div>
                <div className='headline6'>
                     <img src={logo15}/>
                     <p>Гантель разборная стальная <br></br> (гриф + блины) 15 кг</p>
                     <div className='head4'>
                    <div><h6>27 590 ₽</h6></div>
                    <div><BsFillBasketFill fontSize={30} /></div>
                    </div>
                </div>
                <div className='headline6'>
                     <img src={logo16}/>
                     <p>Гантель разборная стальная <br></br> (гриф + блины) 15 кг</p>
                     <div className='head4'>
                    <div><h6>27 590 ₽</h6></div>
                    <div><BsFillBasketFill fontSize={30} /></div>
                    </div>
                </div>
               
            </div>
        </SwiperSlide>
        <SwiperSlide>
             <div className='exam1'>
                <div className='headline6'>
                     <img src={logo13}/>
                     <p>Гантель разборная стальная <br></br> (гриф + блины) 15 кг</p>
                     <div className='head4'>
                    <div><h6>27 590 ₽</h6></div>
                    <div><BsFillBasketFill fontSize={30} /></div>
                    </div>
                </div>
                <div className='headline6'>
                     <img src={logo14}/>
                     <p>Гантель разборная (гриф + <br></br> блины) 24,1 кг</p>
                     <div className='head4'>
                    <div><h6>27 590 ₽</h6></div>
                    <div><BsFillBasketFill fontSize={30} /></div>
                    </div>
                </div>
                <div className='headline6'>
                     <img src={logo15}/>
                     <p>Гантель разборная стальная <br></br> (гриф + блины) 15 кг</p>
                     <div className='head4'>
                    <div><h6>27 590 ₽</h6></div>
                    <div><BsFillBasketFill fontSize={30} /></div>
                    </div>
                </div>
                <div className='headline6'>
                     <img src={logo16}/>
                     <p>Гантель разборная стальная <br></br> (гриф + блины) 15 кг</p>
                     <div className='head4'>
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
