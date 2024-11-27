import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../Css/swiperstyle.css";
// import required modules
import { Navigation } from "swiper/modules";
import useFetchs from "../CustomHooks/useFetchs";

const Brand = () => {
  const [data] = useFetchs("http://localhost:30018/brand");
  return (
    <>
      <div className="w-full max-w-[1336px] mx-auto px-[20px] lg:px-[16px] 2xl:px-0">
        <div className="flex flex-wrap">
          <Link className="w-full block relative lg:w-[calc(50%-8px)]  ">
            <div className="rounded-[16px] h-full">
              <img
                src="../../../public/Image/brand/5adeb622155bb92f3a88bdbcdde6988a0fe7211f_1728989494.webp"
                className="rounded-[16px] h-full w-full"
                alt=""
              />
            </div>
          </Link>
          <Link className="w-full block relative lg:w-[calc(50%-8px)] mt-[16px] lg:mt-0  lg:ms-[16px]">
            <div className="rounded-[16px] h-full ">
              <img
                src="../../../public/Image/brand/fb2ff9425c2dbf4b7b4e4e4f14ec047a23a86ea1_1729328020.webp"
                className="rounded-[16px] h-full w-full"
                alt=""
              />
            </div>
          </Link>
        </div>
      </div>
      {/* brands */}
      <div className="w-full max-w-[1336px] mx-auto lg:px-[16px] 2xl:px-0">
        <div className="w-full max-w-[1336px] lg:border-[1px] lg:border-[#e0e0e2] lg:rounded-[16px] py-[24px]">
          <div className="flex items-center justify-center">
            <div className="flex me-[8px]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.66 22.9203C17.13 22.9203 16.45 22.7503 15.6 22.2503L12.61 20.4803C12.3 20.3003 11.7 20.3003 11.4 20.4803L8.4 22.2503C6.63 23.3003 5.59 22.8803 5.12 22.5403C4.66 22.2003 3.94 21.3303 4.41 19.3303L5.12 16.2603C5.2 15.9403 5.04 15.3903 4.8 15.1503L2.32 12.6703C1.08 11.4303 1.18 10.3703 1.35 9.85025C1.52 9.33025 2.06 8.41025 3.78 8.12025L6.97 7.59025C7.27 7.54025 7.7 7.22025 7.83 6.95025L9.6 3.42025C10.4 1.81025 11.45 1.57025 12 1.57025C12.55 1.57025 13.6 1.81025 14.4 3.42025L16.16 6.94025C16.3 7.21025 16.73 7.53025 17.03 7.58025L20.22 8.11025C21.95 8.40025 22.49 9.32025 22.65 9.84025C22.81 10.3603 22.91 11.4203 21.68 12.6603L19.2 15.1503C18.96 15.3903 18.81 15.9303 18.88 16.2603L19.59 19.3303C20.05 21.3303 19.34 22.2003 18.88 22.5403C18.63 22.7203 18.23 22.9203 17.66 22.9203ZM12 18.8403C12.49 18.8403 12.98 18.9603 13.37 19.1903L16.36 20.9603C17.23 21.4803 17.78 21.4803 17.99 21.3303C18.2 21.1803 18.35 20.6503 18.13 19.6703L17.42 16.6003C17.23 15.7703 17.54 14.7003 18.14 14.0903L20.62 11.6103C21.11 11.1203 21.33 10.6403 21.23 10.3103C21.12 9.98025 20.66 9.71025 19.98 9.60025L16.79 9.07025C16.02 8.94025 15.18 8.32025 14.83 7.62025L13.07 4.10025C12.75 3.46025 12.35 3.08025 12 3.08025C11.65 3.08025 11.25 3.46025 10.94 4.10025L9.17 7.62025C8.82 8.32025 7.98 8.94025 7.21 9.07025L4.03 9.60025C3.35 9.71025 2.89 9.98025 2.78 10.3103C2.67 10.6403 2.9 11.1303 3.39 11.6103L5.87 14.0903C6.47 14.6903 6.78 15.7703 6.59 16.6003L5.88 19.6703C5.65 20.6603 5.81 21.1803 6.02 21.3303C6.23 21.4803 6.77 21.4703 7.65 20.9603L10.64 19.1903C11.02 18.9603 11.51 18.8403 12 18.8403Z"
                  fill="#f9bc00"
                />
              </svg>
            </div>
            <p className="text-[1.5rem] font-bold">محبوب‌ &zwnj;ترین برندها</p>
          </div>
          <div className="w-full overflow-hidden mt-[12px]">
            <div className="flex overflow-x-auto overflow-y-hidden">
              <Swiper
                dir="rtl"
                slidesPerView={"auto"}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper4 swiper4"
              >
                {data?.map((item) => {
                  return (
                    <SwiperSlide className="border-r-[1px] border-[#f0f0f1] flex items-center justify-center overflow-hidden h-full px-[16px] py-[4px]" key={item.id}>
                      <Link className="h-full flex items-center jusc' ">
                        <div className="flex justify-center items-center ">
                          <img
                            src={item.image}
                            alt=""
                            className="w-full object-contain inline-block h-full"
                          />
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* end brands */}
      <div className="w-full max-w-[1336px] mx-auto px-[20px] lg:px-[16px] 2xl:px-0">
        <div className="flex flex-wrap">
          <Link className="w-full lg:w-[calc(50%-8px)] ">
            <div className="rounded-[16px]">
              <img
                src="../../../public/Image/brand/63c147bfbcf525fd0eeaa33df4cdbeb4c3089659_1729333543.gif"
                className="rounded-[16px] w-full h-full"
                alt=""
              />
            </div>
          </Link>
          <Link className="w-full block relative lg:w-[calc(50%-8px)] mt-[16px] lg:mt-0  lg:ms-[16px] ">
            <div className="rounded-[16px]  ">
              <img
                src="../../../public/Image/brand/b442c807ea6a539b52de034945e990a334149961_1728998355.webp"
                className="rounded-[16px] w-full h-full"
                alt=""
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Brand;
