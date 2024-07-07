import { CardTwo } from "components";
import { Swiper, SwiperSlide } from "swiper/react";

export const TheNewest = () => {
  return (
    <Swiper
    slidesPerView={1}
    spaceBetween={3}
    breakpoints={{
      320:{
        slidesPerView:1.5,
      },
      480:{
        slidesPerView:2,
      },
      568:{
        slidesPerView:2.5,
      },
      680:{
        slidesPerView:3.3,
      },
      780:{
        slidesPerView:3.5,
      },
      823:{
        slidesPerView:4,
      },
      1200:{
        slidesPerView:5,
      },
      1400:{
        slidesPerView:6,
      },
    }}>
      <SwiperSlide>
        <CardTwo id="1" altForImage="احیای لباس یا کمترین هزیته"
        description="احیای لباس هایتان با کمترین هزینه"
        imageAddress="public/imageForHome/newest/new1.png"/>
      </SwiperSlide>
      <SwiperSlide>
        <CardTwo altForImage="عملکرد گوشی a55 نسبت به نسخه های قبلی کمپانی سامسونگ"
        description="عملکرد گوشی a55 نسبت به نسخه های قبلی کمپانی سامسونگ"
        id="2"
        imageAddress="public/imageForHome/newest/new2.png"/>
      </SwiperSlide>
      <SwiperSlide>
        <CardTwo altForImage="راهنمای کامل تسلط بر گوشی هوشمند تان"
        description="راهنمای کامل تسلط بر گوشی هوشمند تان"
        id="3"
        imageAddress="public/imageForHome/newest/new3.png"/>
      </SwiperSlide>
      <SwiperSlide>
        <CardTwo altForImage="معرفی بهترین محصولات مراقبت از پوست زنانه (به تفکیک هر نوع پوست)"
        description="معرفی بهترین محصولات مراقبت از پوست زنانه (به تفکیک هر نوع پوست)"
        id="4"
        imageAddress="public/imageForHome/newest/new4.png"/>
      </SwiperSlide>
      <SwiperSlide>
        <CardTwo altForImage="مانتو تابستانه: مانتوهای مناسب برای فصل تابستان"
        description="مانتو تابستانه: مانتوهای مناسب برای فصل تابستان"
        id="5"
        imageAddress="public/imageForHome/newest/new5.png"/>
      </SwiperSlide>
      <SwiperSlide>
        <CardTwo altForImage="هدیه ای خاص برای روز دختر: بهترین ایده ها در بانی مد"
        description="هدیه ای خاص برای روز دختر: بهترین ایده ها در بانی مد"
        id="6"
        imageAddress="public/imageForHome/newest/new6.png"/>
      </SwiperSlide>
      <SwiperSlide>
        <CardTwo altForImage="۸ نکته مهم در انتخاب تیپ تابستانه پسرانه"
        description="۸ نکته مهم در انتخاب تیپ تابستانه پسرانه"
        id="6"
        imageAddress="public/imageForHome/newest/new7.png"/>
      </SwiperSlide>
      <SwiperSlide>
        <CardTwo altForImage="۸ فیشیال پوست صورت: روند سال ۲۰۲۴ برای مراقبت آسان و کم هزینه از پوستتان "
        description="فیشیال پوست صورت: روند سال ۲۰۲۴ برای مراقبت آسان و کم هزینه از پوستتان "
        id="6"
        imageAddress="public/imageForHome/newest/new8.png"/>
      </SwiperSlide>
    </Swiper>
  );
};
