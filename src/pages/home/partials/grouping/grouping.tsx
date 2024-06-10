import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { ComponentForGrouping } from "./component";

export const Grouping = () => {
  return (
    <>
      <Swiper
        spaceBetween={3}
        slidesPerView={3}
        breakpoints={{
          320: {
            slidesPerView: 3,
          },
          488: {
            slidesPerView: 4,
          },
          568: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 5,
          },
          920: {
            slidesPerView: 6,
          },
          1200: {
            slidesPerView: 7,
          },
          1400: {
            slidesPerView: 8,
          },
        }}
      >
        <SwiperSlide>
          <ComponentForGrouping
            categoryName="پوشاک بچه گانه"
            imageAddresss="https://www.banimode.com/img/cms/030120/1712594678.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
        <ComponentForGrouping
            categoryName="مانتو و پانچو"
            imageAddresss="https://www.banimode.com/img/cms/030120/1712594497.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
        <ComponentForGrouping
            categoryName="ساعت مردانه و زنانه"
            imageAddresss="https://www.banimode.com/img/cms/020705/1695832447.jpg"
          />
         
        </SwiperSlide>
        <SwiperSlide>
        <ComponentForGrouping
            categoryName="لباس زیر"
            imageAddresss="https://www.banimode.com/img/cms/020705/1695832454.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
        <ComponentForGrouping
            categoryName="کالای خواب و استراحت"
            imageAddresss="https://www.banimode.com/img/cms/020705/1695832439.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
