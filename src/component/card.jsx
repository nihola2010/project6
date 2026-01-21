import React from "react";
import { BsFillBasketFill } from "react-icons/bs";
import logo6 from '../assets/logo6.png'
import logo7 from '../assets/logo7.png'
import logo8 from '../assets/logo8.png'
import logo9 from '../assets/logo9.png'

function Card(){
   return(
    <>
    <div className="section7">
           <div className="headline4">
            <img src={logo6}/>
            <p>Шведская стенка P-19  Цвет:  <br></br> Белый</p>
            <div className="head">
           <div> <h6>14 980 ₽</h6></div>
            <div><BsFillBasketFill fontSize={30} color="#F04716" /></div>
            </div>
           </div>
           <div className="headline4">
            <img src={logo7}/>
            <p>Шведская стенка P-3 Цвет: <br></br> Антик Серебро</p>
            <div className="head">
           <div> <h6>7 990 ₽</h6></div>
            <div><BsFillBasketFill fontSize={30} color="#F04716" /></div>
            </div>
           </div>
           <div className="headline4">
            <img src={logo8}/>
            <p>Шведская стенка P-4 Цвет: <br></br> Светофор</p>
            <div className="head">
           <div> <h6>10 990 ₽</h6></div>
            <div><BsFillBasketFill fontSize={30} color="#F04716" /></div>
            </div>
           </div>
           <div className="headline4">
            <img src={logo9}/>
            <p>Шведская стенка P-19  Цвет:  <br></br> Белый</p>
            <div className="head">
           <div> <h6>14 980 ₽</h6></div>
            <div><BsFillBasketFill fontSize={30} color="#F04716" /></div>
            </div>
           </div>
    </div>
    </>
   )
}
export default Card