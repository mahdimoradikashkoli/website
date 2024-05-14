import {
  Navigation,
  Pagination,
  Controller,
  Autoplay,
  EffectFlip
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const MaySlider = () => {
  return (
    <Swiper
      effect={"flip"}
      grabCursor={true}
      style={{ objectFit: "cover", backgroundColor: "white" }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false
      }}
      modules={[Navigation, Pagination, Controller, Autoplay, EffectFlip]}
      spaceBetween={1}
      slidesPerView={1}
      className="mySwiper"
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img
          style={{ width: "100%" }}
          alt="دیجیتال"
          src="https://www.banimode.com/img/cms/030213/1714633499.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{ width: "100%" }}
          alt="دیجیتال"
          src="https://www.banimode.com/img/cms/030212/1714569207.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{ width: "100%" }}
          alt="دیجیتال"
          src="https://www.banimode.com/img/cms/030213/1714633499.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{ width: "100%" }}
          alt="دیجیتال"
          src="https://www.banimode.com/img/cms/030213/1714633499.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{ width: "100%" }}
          alt="دیجیتال"
          src="https://www.banimode.com/img/cms/030213/1714633499.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{ width: "100%" }}
          alt="دیجیتال"
          src="https://www.banimode.com/img/cms/030213/1714633499.jpg"
        />
      </SwiperSlide>
    </Swiper>
  );
};
