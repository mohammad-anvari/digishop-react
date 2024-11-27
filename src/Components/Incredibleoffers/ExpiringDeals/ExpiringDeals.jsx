import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../../../Css/swiperstyle.css";

// import required modules
import { FreeMode,Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
const ExpiringDeals = ({ data , h , m , s , title , clock}) => {
  return (
    <>
      <div className="w-full max-w-[1676px] mx-auto px-[16px]">
        <div className="flex flex-col w-full pt-[8px] lg:border-[1px] lg:border-[#e0e0e2] lg:rounded-[8px] ">
          <div className="lg:py-[12px] px-[20px] py-[8px]">
            <div className="flex items-center">
              <div className="flex me-[8px]">
                {clock?<svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 23.0002C6.07 23.0002 1.25 18.1802 1.25 12.2502C1.25 6.32024 6.07 1.50024 12 1.50024C17.93 1.50024 22.75 6.32024 22.75 12.2502C22.75 18.1802 17.93 23.0002 12 23.0002ZM12 3.00024C6.9 3.00024 2.75 7.15024 2.75 12.2502C2.75 17.3502 6.9 21.5002 12 21.5002C17.1 21.5002 21.25 17.3502 21.25 12.2502C21.25 7.15024 17.1 3.00024 12 3.00024Z"
                    fill="#424750"
                  />
                  <path
                    d="M15.71 16.1803C15.58 16.1803 15.45 16.1503 15.33 16.0703L12.23 14.2203C11.46 13.7603 10.89 12.7503 10.89 11.8603V7.76025C10.89 7.35025 11.23 7.01025 11.64 7.01025C12.05 7.01025 12.39 7.35025 12.39 7.76025V11.8603C12.39 12.2203 12.69 12.7503 13 12.9303L16.1 14.7803C16.46 14.9903 16.57 15.4503 16.36 15.8103C16.21 16.0503 15.96 16.1803 15.71 16.1803Z"
                    fill="#424750"
                  />
                </svg>:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.1999 23.0002C15.2599 23.0002 13.4399 21.9702 12.4499 20.3002C11.9299 19.4602 11.6499 18.4603 11.6499 17.4503C11.6499 14.3903 14.1399 11.9003 17.1999 11.9003C20.2599 11.9003 22.7499 14.3903 22.7499 17.4503C22.7499 18.4703 22.4699 19.4603 21.9399 20.3203C20.9599 21.9703 19.1399 23.0002 17.1999 23.0002ZM17.1999 13.4003C14.9699 13.4003 13.1499 15.2203 13.1499 17.4503C13.1499 18.1903 13.3499 18.9103 13.7299 19.5303C14.4699 20.7703 15.7599 21.5002 17.1999 21.5002C18.6399 21.5002 19.9299 20.7702 20.6599 19.5402C21.0499 18.9102 21.2499 18.1903 21.2499 17.4503C21.2499 15.2203 19.4299 13.4003 17.1999 13.4003Z" fill="#ff009c"/>
<path d="M16.51 19.3803C16.32 19.3803 16.13 19.3103 15.98 19.1602L14.8 17.9803C14.51 17.6903 14.51 17.2103 14.8 16.9203C15.09 16.6303 15.57 16.6303 15.86 16.9203L16.53 17.5903L18.56 15.7103C18.87 15.4303 19.34 15.4503 19.62 15.7503C19.9 16.0503 19.88 16.5303 19.58 16.8103L17.02 19.1703C16.88 19.3203 16.69 19.3803 16.51 19.3803Z" fill="#ff009c"/>
<path d="M12 21.9003C11.69 21.9003 11.38 21.8603 11.13 21.7703C8.57 20.9003 1.25 16.6602 1.25 8.94025C1.25 5.44025 4.08 2.60022 7.56 2.60022C9.22 2.60022 10.83 3.27025 12 4.44025C13.17 3.27025 14.78 2.60022 16.44 2.60022C19.92 2.60022 22.75 5.44025 22.75 8.94025C22.75 10.8902 22.28 12.7603 21.35 14.5103C21.24 14.7203 21.03 14.8703 20.79 14.9003C20.55 14.9303 20.31 14.8502 20.14 14.6702C19.36 13.8502 18.32 13.3903 17.2 13.3903C14.97 13.3903 13.15 15.2102 13.15 17.4402C13.15 18.4302 13.52 19.3903 14.19 20.1403C14.35 20.3203 14.41 20.5602 14.36 20.7902C14.31 21.0202 14.15 21.2203 13.94 21.3203C13.54 21.5003 13.18 21.6503 12.85 21.7603C12.61 21.8603 12.31 21.9003 12 21.9003ZM7.56 4.10022C4.91 4.10022 2.75 6.27025 2.75 8.94025C2.75 15.7802 9.32 19.5602 11.62 20.3502C11.81 20.4202 12.19 20.4102 12.37 20.3502C12.4 20.3402 12.43 20.3303 12.46 20.3203C11.93 19.4603 11.65 18.4703 11.65 17.4503C11.65 14.3903 14.14 11.9003 17.2 11.9003C18.36 11.9003 19.5 12.2703 20.44 12.9503C20.98 11.6703 21.25 10.3302 21.25 8.94025C21.25 6.27025 19.09 4.10022 16.44 4.10022C14.94 4.10022 13.5 4.82027 12.6 6.03027C12.32 6.41027 11.68 6.41027 11.4 6.03027C10.5 4.82027 9.06 4.10022 7.56 4.10022Z" fill="#ff009c"/>
</svg>
}
              </div>
              <p className="font-bold text-[1.1rem] text-[#0c0c0c]">
                {title}
              </p>
            </div>
            <div className="mt-[8px] bg-[#ef394e] w-[4.5rem] h-[.1rem]"></div>
          </div>
          <div>
            <Swiper
              slidesPerView={"auto"}
              freeMode={true}
              modules={[FreeMode,Navigation]}
              className="mySwiper9 swiper9"
              navigation={true}
            >
              {data?.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <Link className="lg:px-[8px] border-l-[1px] border-[#f0f0f1] py-[12px] px-[16px] h-full bg-white w-[192px]">
                      <div className="h-full">
                        <div className="flex flex-col items-stretch justify-start">
                          <div className="flex items-center justify-start mb-[4px]">
                            <div className="me-[4px] w-[116px] h-[14px]">
                              <img
                                src="../../../../public/Image/Incredibleoffers/FeaturedDeals/IncredibleOffer.svg"
                                className="w-full inline-block object-contain"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="flex flex-col items-stretch mb-[4px]">
                              <div>
                                <br />
                              </div>
                              <div className="flex items-start mx-auto">
                                <img
                                  src={item.image}
                                  className="w-[150px] h-[150px] inline-block object-contain"
                                  alt=""
                                />
                              </div>
                              <div className="flex flex-col items-stretch justify-start">
                                <div>
                                  <h3 className="line-clamp-2 text-[.8rem] font-bold leading-[2] text-[#3f4064] text-start">
                                   {item.title}
                                  </h3>
                                </div>
                                <div className="flex items-center justify-between mb-[4px]">
                                  <div className="flex items-center">
                                    <p className="text-[.7rem] text-[#ef394e] leading-[2] font-[400]">
                                      تنها ۱ عدد در انبار باقی مانده
                                    </p>
                                  </div>
                                </div>
                                <div className="flex flex-col items-stretch justify-between pt-[4px]">
                                  <div className="flex items-center justify-between">
                                    <div className="w-[34px] h-[20px] px-[4px] text-white rounded-[16px] flex items-center justify-center bg-[#d32f2f]">
                                      <span className="text-[.7rem] font-bold">
                                        {item.discont}%
                                      </span>
                                    </div>
                                    <div className="flex justify-end items-center gap-1 text-[1.1rem] font-bold text-[#3f4064] leading-[1.7]">
                                      {item.price}
                                      <div className="flex"></div>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-between pe-[20px]">
                                    <p className="line-through ms-auto text-[.8rem] text-[#c0c2c5] leading-[2]">
                                      {item.lastPrice}
                                    </p>
                                  </div>
                                </div>
                                <div className="mt-auto">
                                  {item.sold?<div className="relative bg-[#f0f0f1] h-[4px] rounded-[8px]">
                                    <div
                                      className={`absolute bg-[#ef394e] h-full left-0 top-0 rounded-[8px]`} style={{width:item.sold+"%"}}
                                    ></div>
                                  </div>:null}
                                  <div className="flex justify-between items-center pt-[4px]">
                                    <div>
                                      <span className="me-[4px] text-[#ef394e] text-[.7rem]">
                                        {item.sold?`${item.sold}%`:null}
                                      </span>
                                      <span className="text-[.7rem] text-[#81858b]">
                                        {item.sold?"فروش رفته":null}
                                      </span>
                                    </div>
                                    <p className="text-end text-[.8rem] text-[#ef394e] font-bold leading-[2]">
                                      {s < 10 ? "0" + s : s} :{" "}
                                  {m < 10 ? "0" + m : m} :{" "}
                                  {h < 10 ? "0" + h : h}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default ExpiringDeals;
