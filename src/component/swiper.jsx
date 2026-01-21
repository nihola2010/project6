import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function MySwiper() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <div className="headline">
            <d  iv className="section3">
                <div className="section4"><h1>Соберите шведскую <br></br> стенку по своему <br></br> желанию!</h1>
                <p>Проснувшись однажды утром после беспокойного сна, <br></br> Грегор Замза обнаружил, что он у себя в постели <br></br> превратился в страшное насекомое.</p>
                <button className="button2">Перейти в конструктор</button></div>
            </d>
            <div className="headline2">
                <div className="section5">
                    <div className="headline3">
                        <h3>Посетите наш шоу-рум!</h3>
                        <p>Приглашаем<br></br>к сотрудничеству</p>
                        <h5>Подробнее</h5>
                    </div>
                </div>
                <div className="section6">
                     <div className="headline3">
                        <h3>Посетите наш шоу-рум!</h3>
                        <p>Приглашаем<br></br>к сотрудничеству</p>
                        <h5>Подробнее</h5>
                    </div>
                </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="headline">
            <div className="section3">
                <div className="section4"><h1>Соберите шведскую <br></br> стенку по своему <br></br> желанию!</h1>
                <p>Проснувшись однажды утром после беспокойного сна, <br></br> Грегор Замза обнаружил, что он у себя в постели <br></br> превратился в страшное насекомое.</p>
                <button className="button2">Перейти в конструктор</button></div>
            </div>
            <div className="headline2">
                <div className="section5">
                    <div className="headline3">
                        <h3>Посетите наш шоу-рум!</h3>
                        <p>Приглашаем<br></br>к сотрудничеству</p>
                        <h5>Подробнее</h5>
                    </div>
                </div>
                <div className="section6">
                     <div className="headline3">
                        <h3>Посетите наш шоу-рум!</h3>
                        <p>Приглашаем<br></br>к сотрудничеству</p>
                        <h5>Подробнее</h5>
                    </div>
                </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="headline">
            <div className="section3">
                <div className="section4"><h1>Соберите шведскую <br></br> стенку по своему <br></br> желанию!</h1>
                <p>Проснувшись однажды утром после беспокойного сна, <br></br> Грегор Замза обнаружил, что он у себя в постели <br></br> превратился в страшное насекомое.</p>
                <button className="button2">Перейти в конструктор</button></div>
            </div>
            <div className="headline2">
                <div className="section5">
                    <div className="headline3">
                        <h3>Посетите наш шоу-рум!</h3>
                        <p>Приглашаем<br></br>к сотрудничеству</p>
                        <h5>Подробнее</h5>
                    </div>
                </div>
                <div className="section6">
                     <div className="headline3">
                        <h3>Посетите наш шоу-рум!</h3>
                        <p>Приглашаем<br></br>к сотрудничеству</p>
                        <h5>Подробнее</h5>
                    </div>
                </div>
            </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
