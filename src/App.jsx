
import axios from 'axios'
import { useEffect } from 'react';
import './App.css'
import { useState } from 'react'
import logo17 from './assets/logo17.png'
import logo18 from './assets/logo18.png'
import logo19 from './assets/logo19.png'
import logo20 from './assets/logo20.png'
import logo21 from './assets/logo21.png'
import logo22 from './assets/logo22.png'
import logo23 from './assets/logo23.png'
import logo24 from './assets/logo24.png'
import logo25 from './assets/logo25.png'
import logo26 from './assets/logo26.png'
import logo27 from './assets/logo27.png'
import logo28 from './assets/logo28.png'
import logo29 from './assets/logo29.png'
import logo30 from './assets/logo30.png'
import Navbar from './component/navbar';
import logo1 from './assets/logo1.png'
import Swiper from './component/swiper';
import Card from './component/card';
import Section from './component/section';
import Section1 from './component/section1';
import { FaWhatsapp } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { BsTelegram } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";



function App() {
  
  return (
    <>
      <Navbar/>
      <div className='section1'>
        <div>
          <img src={logo1}/>
        </div>
        <div>
          <form>
            <input type='text' placeholder='Поиск по сайту'/>
          </form>
        </div>
      </div>
      <div className='section2'>
          <button className='button1'>Каталог товаров</button>
          <p>Шведские стенки</p>
          <p>Уличные комплексы</p>
          <p>Турники</p>
          <p>Тяжелая атлетика</p>
          <p>Тяжелая атлетика</p>
      </div>
  <Swiper/>
  <Card/>
  <h1 className='head1'>Уличные спортивные комплексы</h1>
  <Section/>
  <h1 className='head3'>Тяжелая атлетика</h1>
  <Section1/>
  <h1 className='head3'>Каталог товаров</h1>
  <div className='exam2'>
    <div className='headline8'>
      <div>
        <img src={logo17}/>
        <p>Щведские стенки</p>
      </div>
    </div>
     <div className='headline8'>
      <div>
        <img src={logo18}/>
        <p>Турники</p>
      </div>
    </div>
     <div className='headline8'>
      <div>
        <img src={logo19}/>
        <p>Уличные комплексы</p>
      </div>
    </div>
     <div className='headline8'>
      <div>
        <img src={logo20}/>
        <p>Тяжелая атлетика</p>
      </div>
    </div>
  </div>

  <div className='exam2'>
    <div className='headline8'>
      <div>
        <img src={logo21}/>
        <p>Стойки под штангу</p>
      </div>
    </div>
     <div className='headline8'>
      <div>
        <img src={logo22}/>
        <p>Единоборства</p>
      </div>
    </div>
     <div className='headline8'>
      <div>
        <img src={logo23}/>
        <p>Фитнес</p>
      </div>
    </div>
     <div className='headline8'>
      <div>
        <img src={logo24}/>
        <p>Весь каталог</p>
      </div>
    </div>
  </div>
  <h1 className='head1'>О компании</h1>
  <div className='section9'>
    <div>
      <p className='tag'>Компания «Sportova» специализируется на продаже шведских стенок, детских <br></br> площадок и тренажеров. Мы являемся официальными дилерами ведущих <br></br> производителей шведских стенок и детских площадок.</p>
    </div>
    <div>
      
    </div>
  </div>

  <div className='section10'>
    <div className='headline9'>
      <div>
        <img  className='' src={logo17}/>
      </div>
      <div>
        <p>Выставочный зал <br></br>на 450 кв.м</p>
      </div>
    </div>
    <div className='headline9'>
      <div>
        <img src={logo25}/>
      </div>
      <div>
        <p>90% товара <br></br> наличии на <br></br> складе</p>
      </div>
    </div>
    <div className='headline9'>
      <div>
        <img src={logo26}/>
      </div>
      <div>
        <p>Монтаж <br></br> опытными <br></br> специалистами</p>
      </div>
    </div>
    <div className='headline9'>
      <div>
        <img src={logo27}/>
      </div>
      <div>
        <p>Отправляем в <br></br> регионы с оплатой <br></br> при получении</p>
      </div>
    </div>
  </div>
  <div className='section11'>
    <div>
      <img src={logo28}/>
      <div className='head5'>
        <div>
          <img src={logo29}/>
        </div>
        <div>
          <img src={logo30}/>
        </div>
         <div>
          <img src={logo29}/>
        </div>
        <div>
          <img src={logo30}/>
        </div>
      </div>
    </div>
    <div className='hard'><div className='headline10'>
      <p>Узкая специализация. Мы знаем больше нюансов и <br></br> потребностей клиента, чем магазины, которые продают все <br></br> подряд. Соответственно, сможем лучше проконсультировать <br></br> и подобрать необходимый Вам комплекс;</p>
      <p>90% ассортимента держим в наличии на складе в Нижнем <br></br> Новгороде и Москве;</p>
      <p>Выставочный зал, где все оборудование <br></br> надежно закреплено. Вы можете протестировать комплексы еще до <br></br> покупки;</p>
      <p>Если Вам необходима сборка шведской стенки, детской <br></br> площадки или турника – мы предоставляем такую услугу. В <br></br> компании работают опытные и аккуратные специалисты. <br></br> Также мы оказываем услугу по укорачиванию шведской <br></br> стенки;</p>
      <p>Если товар не подошел, Вы можете его обменять или вернуть <br></br> в течение расширенного срока в 30 дней;</p>
    </div>
  </div>
      <div className='section12'>
        <div className='headline11'>
          <h1>Доставка</h1>
          <p>Проснувшись однажды утром после беспокойного сна, <br></br> Грегор Замза обнаружил, что он у себя в постели <br></br> превратился в страшное насекомое.</p>
          <h6>Лежа на панцирнотвердой спине, он видел, стоило ему <br></br> приподнять голову, свой коричневый, выпуклый, <br></br> разделенный дугообразными чешуйками живот, на <br></br> верхушке которого еле держалось готовое вот-вот <br></br> окончательно сползти одеяло.</h6>
          <h5 className='head6'>Детальное описание</h5>
        </div>
        <div className='headline113'>
          <h1>Оплата</h1>
          <p>Проснувшись однажды утром после беспокойного сна, <br></br> Грегор Замза обнаружил, что он у себя в постели <br></br> превратился в страшное насекомое.</p>
          <h6>Лежа на панцирнотвердой спине, он видел, стоило ему <br></br> приподнять голову, свой коричневый, выпуклый, <br></br> разделенный дугообразными чешуйками живот, на <br></br> верхушке которого еле держалось готовое вот-вот <br></br> окончательно сползти одеяло.</h6>
          <h5 className='head6'>Детальное описание</h5>
        </div>
      </div></div>

      <div className='section13'>
        <div>
          <h3>Редкие, но очень полезные письма!</h3>
          <p>Подпишись и получи промокод на скидку! Его можно <br></br> применить ко всем товарам в магазине</p>
        </div>
        <div className='headline12'>
         <div> <button className='button3'>Ваш e-mail</button></div>
          <div><button className='button4'>Подписаться</button></div>
        </div>
      </div>
      <div className='section14'>
        <div className='headline13'>
          <h4>Контакты</h4>
          <h5>г. Нижний Новгород, <br></br> ул.Народная, 20</h5>
          <h6>8 (800) 550-22-16</h6>
          <p>info@sportova.ru</p>
          <p>Sportova на связи:</p>
          <div className='headline14'>
            <div>
             <FaWhatsapp  className='icon' fontSize={45} color='green'/>
            </div>
            <div>
              <SiInstagram  className='icon' fontSize={40} color='red'/>
            </div>
            <div>
              <BsTelegram  className='icon' fontSize={40} color='blue'/>
            </div>
          </div>
        </div>
        <div className='headline15'>
            <h4>Каталог</h4>
            <p>Шведские стенки</p>
            <p>Турники</p>
            <p>Уличные комплексы</p>
            <p>Тяжелая атлетика</p>
            <p>Единоборства</p>
            <p>Тюбинги </p>
          </div>
          <div className='headline15'>
            <p>Шведские стенки</p>
            <p>Турники</p>
            <p>Уличные комплексы</p>
            <p>Тяжелая атлетика</p>
            <p>Единоборства</p>
            <p>Тюбинги </p>
          </div>
          <div className='headline15'>
            <h4>Полезное</h4>
            <p>Шведские стенки</p>
            <p>Турники</p>
            <p>Уличные комплексы</p>
            <p>Тяжелая атлетика</p>
            <p>Единоборства</p>
            <p>Тюбинги </p>
          </div>
      </div>
      <div className='section15'>
        <div><h2>SPORTOVA</h2></div>
        <div><p>© ООО «Спортова», 2021</p></div>
      </div>
    </>
  )
}

export default App
