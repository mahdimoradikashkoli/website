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
import { Box } from "@mui/material";

export const MaySlider = () => {
  return (
    <>
    <Box>
      
    </Box>

    
    {/* اسلایدر برای عرض تا 800پیکسل */}
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
          src="public/imageForHome/slider/1714569207.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{ width: "100%" }}
          alt="دیجیتال"
          src="public/imageForHome/slider/1714633499.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{ width: "100%" }}
          alt="دیجیتال"
          src="public/imageForHome/slider/slde6.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{ width: "100%" }}
          alt="دیجیتال"
          src="public/imageForHome/slide4.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{ width: "100%" }}
          alt="دیجیتال"
          src="public/imageForHome/slider/slide3.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          style={{ width: "100%" }}
          alt="دیجیتال"
          src="public/imageForHome/slider/1720337323.png"
        />
      </SwiperSlide>
    </Swiper>
    </>
  );
};
