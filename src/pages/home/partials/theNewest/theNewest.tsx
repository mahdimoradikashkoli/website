import { CardTwo } from "components";
import { Swiper, SwiperSlide } from "swiper/react";

export const TheNewest = () => {
  return (
    <Swiper
    slidesPerView={1.5}
    spaceBetween={3}>
      <SwiperSlide>
        <CardTwo id="1" altForImage="احیای لباس یا کمترین هزیته"
        description="احیای لباس هایتان با کمترین هزینه"
        imageAddress="https://www.banimode.com/blog/wp-content/uploads/2024/05/tarmime-lebas-7-300x200.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
        <CardTwo altForImage="عملکرد گوشی a55 نسبت به نسخه های قبلی کمپانی سامسونگ"
        description="عملکرد گوشی a55 نسبت به نسخه های قبلی کمپانی سامسونگ"
        id="2"
        imageAddress="https://www.banimode.com/blog/wp-content/uploads/2024/05/a55-1-300x200.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
        <CardTwo altForImage="راهنمای کامل تسلط بر گوشی هوشمند تان"
        description="راهنمای کامل تسلط بر گوشی هوشمند تان"
        id="3"
        imageAddress="https://www.banimode.com/blog/wp-content/uploads/2024/05/mobaile7-300x200.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
        <CardTwo altForImage="معرفی بهترین محصولات مراقبت از پوست زنانه (به تفکیک هر نوع پوست)"
        description="معرفی بهترین محصولات مراقبت از پوست زنانه (به تفکیک هر نوع پوست)"
        id="4"
        imageAddress="https://www.banimode.com/blog/wp-content/uploads/2024/05/mahsolate-moraghebat-az-post-300x200.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
        <CardTwo altForImage="مانتو تابستانه: مانتوهای مناسب برای فصل تابستان"
        description="مانتو تابستانه: مانتوهای مناسب برای فصل تابستان"
        id="5"
        imageAddress="https://www.banimode.com/blog/wp-content/uploads/2024/05/manto-tabestsne3-300x200.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
        <CardTwo altForImage="هدیه ای خاص برای روز دختر: بهترین ایده ها در بانی مد"
        description="هدیه ای خاص برای روز دختر: بهترین ایده ها در بانی مد"
        id="6"
        imageAddress="https://www.banimode.com/blog/wp-content/uploads/2024/05/هدیه-ای-خاص-برای-روز-دختر-بهترین-ایده-ها-در-بانی-مد-300x200.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
        <CardTwo altForImage="۸ نکته مهم در انتخاب تیپ تابستانه پسرانه"
        description="۸ نکته مهم در انتخاب تیپ تابستانه پسرانه"
        id="6"
        imageAddress="https://www.banimode.com/blog/wp-content/uploads/2024/04/8-important-points-in-choosing-a-summer-outfit-for-boys-300x200.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
        <CardTwo altForImage="۸ فیشیال پوست صورت: روند سال ۲۰۲۴ برای مراقبت آسان و کم هزینه از پوستتان "
        description="فیشیال پوست صورت: روند سال ۲۰۲۴ برای مراقبت آسان و کم هزینه از پوستتان "
        id="6"
        imageAddress="https://www.banimode.com/blog/wp-content/uploads/2024/05/FASHIYAL-300x200.jpg"/>
      </SwiperSlide>
    </Swiper>
  );
};
