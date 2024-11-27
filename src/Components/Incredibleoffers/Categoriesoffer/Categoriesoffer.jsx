// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../../Css/swiperstyle.css";

// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import useFetchs from "../../CustomHooks/useFetchs";
const Productlistoffer = () => {
  const [data] = useFetchs("http://localhost:30018/categories");
  return (
    <>
      <div className="w-full max-w-[1528px]">
        <div className="flex py-[20px] ">
          <div className="w-full">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={10}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper7 swiper7"
            >
              <SwiperSlide>
                <Link className=" py-[8px] ms-[8px] bg-[#f0f0f1] rounded-[8px] flex items-center flex-col">
                  <div className=" mx-[12px] mb-[8px]">
                    <img
                      src="../../../../public/Image/Incredibleoffers/productlistoffer/image1.png"
                      className="w-full"
                      alt=""
                    />
                  </div>
                  <span className="px-[4px] text-center text-[.7rem] font-bold ">
                    همه دسته‌بندی‌ها
                  </span>
                </Link>
              </SwiperSlide>
              {data?.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <Link className=" py-[8px] ms-[8px]  flex items-center flex-col">
                      <div className=" mx-[12px] mb-[8px]">
                        <img
                          src={item.image}
                          className="w-full"
                          alt=""
                        />
                      </div>
                      <span className="px-[4px] text-center text-[.7rem] font-bold ">
                        {item.title}
                      </span>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productlistoffer;
