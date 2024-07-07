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
                  src="https://www.banimode.com/img/cms/030321/1718020738.jpg"
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
                  src="https://www.banimode.com/img/cms/030320/1717931594.jpg"
                  alt="image product"
                  sx={{ width: "100%", height: "20rem" }}
                ></Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component={"img"}
                  src="https://www.banimode.com/img/cms/030320/1717927395.jpg"
                  alt="image product"
                  sx={{ width: "100%", height: "20rem" }}
                ></Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component={"img"}
                  src="https://www.banimode.com/img/cms/030320/1717931604.jpg"
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
                  src="https://www.banimode.com/img/cms/030320/1717932354.jpg"
                  alt="image product"
                  sx={{ width: "100%", height: "20rem" }}
                ></Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component={"img"}
                  src="https://www.banimode.com/img/cms/030320/1717931745.jpg"
                  alt="image product"
                  sx={{ width: "100%", height: "20rem" }}
                ></Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component={"img"}
                  src="https://www.banimode.com/img/cms/030320/1717931604.jpg"
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
                  src="https://www.banimode.com/img/cms/030320/1717932006.jpg"
                  alt="image product"
                  sx={{ width: "100%", height: "20rem" }}
                ></Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  component={"img"}
                  src="https://www.banimode.com/img/cms/030320/1717927371.jpg"
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
