import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from 'uuid';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CROUSELARR } from "../utils/Common";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const CrouselComp = () => {
  return (
    <div className="drop-shadow-2xl bg-white border border-slate-200">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {CROUSELARR.map((ele) => {
          return (
            <div key={uuidv4}>
              <SwiperSlide className="flex justify-center items-center flex-col p-8 ">
                <img
                  className="max-h-[300px] max-w-[300px] min-h-[180px] object-contain "
                  src={ele.img}
                />
                <p className="max-w-[65%] text-xl tablet:text-2xl laptop:text-3xl text-center m-6">
                  {ele.text}
                </p>
                <a className="text-[#1967d2] text-xl mb-6" href={ele.link}>
                  Read Story
                </a>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CrouselComp;
