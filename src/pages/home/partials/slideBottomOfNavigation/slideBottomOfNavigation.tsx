import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import style from "./slideBottomOfNavigation.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const SlideBottomOfNavigation = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Box sx={{ width: "100%", display: "flex", gap: "1rem" }}>
          <Box
            sx={{
              width: "70%",
              height: "20rem",
              borderRadius: "1rem",
              overflow: "hidden",
            }}
          >
            <Swiper
              slidesPerView={1}
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: `.${style.swiperButtonNext}`,
                prevEl: `.${style.swiperButtonprev}`,
              }}
            >
              <SwiperSlide>
                <Box
                  component={"img"}
                  src="https://www.banimode.com/img/cms/030320/1717927425.jpg"
                  alt="image product"
                  sx={{ width: "100%", height: "20rem" }}
                ></Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component={"img"}
                  src="public/imageForHome/1720246391.png"
                  alt="image product"
                  sx={{ width: "100%", height: "20rem" }}
                ></Box>
              </SwiperSlide>
              <ArrowBackIosIcon className={style.swiperButtonNext} />
              <ArrowForwardIosIcon className={style.swiperButtonprev} />
            </Swiper>
          </Box>
          <Box
            sx={{
              width: "30%",
              height: "20rem",
              borderRadius: "1rem",
              overflow: "hidden",
            }}
          >
            <Swiper
              slidesPerView={1}
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: `.${style.swiperButtonNext}`,
                prevEl: `.${style.swiperButtonprev}`,
              }}
            >
              <SwiperSlide>
                <Box
                  component={"img"}
                  src="public/imageForHome/1718368047.png"
                  alt="image product"
                  sx={{ width: "100%", height: "20rem" }}
                ></Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component={"img"}
                  src="public/imageForHome/image.png"
                  alt="image product"
                  sx={{ width: "100%", height: "20rem" }}
                ></Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component={"img"}
                  src="public/imageForHome/image2.png"
                  alt="image product"
                  sx={{ width: "100%", height: "20rem" }}
                ></Box>
              </SwiperSlide>
              {/* دکمه‌های Navigation */}
              <ArrowBackIosIcon className={style.swiperButtonNext} />
              <ArrowForwardIosIcon className={style.swiperButtonprev} />
            </Swiper>
          </Box>
        </Box>

        <Box sx={{ width: "100%", display: "flex", gap: "1rem" }}>
          <Box
            sx={{
              width: "30%",
              height: "20rem",
              borderRadius: "1rem",
              overflow: "hidden",
            }}
          >
            <Swiper
              slidesPerView={1}
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: `.${style.swiperButtonNext}`,
                prevEl: `.${style.swiperButtonprev}`,
              }}
            >
              <SwiperSlide>
                <Box
                  component={"img"}
                  src="public/imageForHome/image3.png"
                  alt="image product"
                  sx={{ width: "100%", height: "20rem" }}
                ></Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component={"img"}
                  src="public/imageForHome/image4.png"
                  alt="image product"
                  sx={{ width: "100%", height: "20rem" }}
                ></Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component={"img"}
                  src="public/imageForHome/image5.png"
                  alt="image product"
                  sx={{ width: "100%", height: "20rem" }}
                ></Box>
              </SwiperSlide>
              {/* دکمه‌های Navigation */}
              <ArrowBackIosIcon className={style.swiperButtonNext} />
              <ArrowForwardIosIcon className={style.swiperButtonprev} />
            </Swiper>
          </Box>
          <Box
            sx={{
              width: "70%",
              height: "20rem",
              borderRadius: "1rem",
              overflow: "hidden",
            }}
          >
            <Swiper
              slidesPerView={1}
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: `.${style.swiperButtonNext}`,
                prevEl: `.${style.swiperButtonprev}`,
              }}
            >
              <SwiperSlide>
                <Box
                  component={"img"}
                  src="public/imageForHome/image6.png"
                  alt="image product"
                  sx={{ width: "100%", height: "20rem" }}
                ></Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component={"img"}
                  src="public/imageForHome/image6.png"
                  alt="image product"
                  sx={{ width: "100%", height: "20rem" }}
                ></Box>
              </SwiperSlide>
              <ArrowBackIosIcon className={style.swiperButtonNext} />
              <ArrowForwardIosIcon className={style.swiperButtonprev} />
            </Swiper>
          </Box>
        </Box>
      </Box>
    </>
  );
};
