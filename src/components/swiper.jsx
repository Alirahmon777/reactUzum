import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Manipulation,
  Zoom,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function swiper() {
  return (
    <Swiper
      className="overflow-hidden w-full rounded-[10px]"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={1}
      loop={true}
      navigation
      autoplay
      speed={200}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img
          className="w-full rounded-[10px]"
          src="https://images.uzum.uz/cg3c2bnhj8j9g6998t6g/main_page_banner.jpg"
          alt="aksiya"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full rounded-[10px]"
          src="https://images.uzum.uz/cg4mamfg49devoaa323g/main_page_banner.jpg"
          alt="aksiya"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full rounded-[10px]"
          src="https://images.uzum.uz/cg4mbqfhj8j9g699dmjg/main_page_banner.jpg"
          alt="tova"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full rounded-[10px]"
          src="https://images.uzum.uz/cg4md8ng49devoaa32f0/main_page_banner.jpg"
          alt="varrak"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-full rounded-[10px]"
          src="https://images.uzum.uz/cfv22a7hgiov1qid9m1g/main_page_banner.jpg"
          alt="yog'"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default swiper;
