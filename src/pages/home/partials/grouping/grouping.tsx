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
            imageAddresss="public/imageForHome/grouping/1712594678.png"
          />
        </SwiperSlide>
        <SwiperSlide>
        <ComponentForGrouping
            categoryName="مانتو و پانچو"
            imageAddresss="public/imageForHome/grouping/imag.png"
          />
        </SwiperSlide>
        <SwiperSlide>
        <ComponentForGrouping
            categoryName="ساعت مردانه و زنانه"
            imageAddresss="public/imageForHome/grouping/watch22.png"
          />
         
        </SwiperSlide>
        <SwiperSlide>
        <ComponentForGrouping
            categoryName="لباس زیر"
            imageAddresss="public/imageForHome/grouping/lebas.png"
          />
        </SwiperSlide>
        <SwiperSlide>
        <ComponentForGrouping
            categoryName="کالای خواب و استراحت"
            imageAddresss="public/imageForHome/grouping/kala.png"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
