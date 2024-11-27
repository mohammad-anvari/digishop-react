// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../Css/swiperstyle.css";

// import required modules
import { Navigation } from "swiper/modules";
import useFetchs from "../CustomHooks/useFetchs";
const Stories = () => {
  const [data] = useFetchs("http://localhost:30018/stories");
  return (
    <>
      <div className="w-full max-w-[1528px] mx-auto pt-[16px] ">
        <div className="w-full  max-w-[1336px] mx-auto lg:px-[16px] 2xl:px-0">
          <div className=" flex swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events swiper-container-rtl">
            <div className=" swiper-wrapper flex items-center">
              {/* slider */}
              <Swiper
                slidesPerView={"auto"}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper swiper1"
              >
                {data?.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <div className="w-[84px] h-[84px] flex items-center justify-center rounded-full bg-swiper ">
                        <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full bg-white ">
                          <div className="w-[74px] h-[74px] rounded-full flex items-center justify-center bg-swiper">
                            <img
                              src={item.image}
                              className="flex items-center justify-center rounded-full "
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <p className="w-[84px] h-[47.73px] mt-[8px] text-[.7rem] text-[#23254e] font-medium text-center">
                        {item.text}
                      </p>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              {/* end slider */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stories;
