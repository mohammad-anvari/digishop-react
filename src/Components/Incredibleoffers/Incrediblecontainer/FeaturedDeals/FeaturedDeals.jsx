import { Swiper, SwiperSlide } from "swiper/react";
import style from "./FeaturedDeals.module.css";
import "swiper/css";
import "swiper/css/pagination";

import "../../../../Css/swiperstyle.css";

// import required modules
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetchs from "../../../CustomHooks/useFetchs";
import { Navigation } from "swiper/modules";
const FeaturedDeals = () => {
  const [data] = useFetchs("http://localhost:30018/FeaturedDeals");
  
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(59);
  const [hour, setHour] = useState(7);
  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (minutes === 0) {
        setHour(hour - 1);
        setMinutes(59);
      } else if (hour < 0) {
        setSeconds(0);
        setMinutes(0);
        setHour(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });
  return (
    <>
      <div className="w-full max-w-[1676px] mb-[24px] mx-auto 2xl:px-[16px]">
        <div className={`flex flex-col relative py-[12px] lg:py-[28px] overflow-hidden ${style.bggradient} 2xl:rounded-[8px] `}
        >
          <div className="pe-[2px] lg:px-0 lg:gap-0 px-[8px] gap-2">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={4}
              modules={[Navigation]}
              navigation={true}
              className="mySwiper8 swiper8"
            >
              <SwiperSlide>
                <div className="flex flex-col items-center justify-center py-0 lg:py-[24px] mx-[16px] lg:px-[32px] md:h-full">
                  <div className="w-[120px] h-[120px]">
                    <img
                      src="../../../../../public/Image/Incredibleoffers/FeaturedDeals/FeaturedPromos.svg"
                      className="w-full inline-block object-contain"
                      alt=""
                    />
                  </div>
                  <div className="my-[12px] w-[145px] h-[145px]">
                    <img
                      src="../../../../../public/Image/Incredibleoffers/FeaturedDeals/General.webp"
                      className="w-full inline-block object-contain"
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              {data?.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <Link className="w-[192px] max-w-[192px] lg:px-[8px] lg:h-full py-[12px] px-[16px] bg-white rounded-[8px] overflow-hidden" >
                      <div className="flex flex-col items-stretch justify-start h-full overflow-hidden">
                        <div className="flex items-center justify-start mb-[4px]">
                          <div className="me-[4px]">
                            <img
                              src="../../../../../public/Image/Incredibleoffers/FeaturedDeals/IncredibleOffer.svg"
                              className="w-full inline-block object-contain"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex flex-col items-stretch mb-[4px]">
                            <div className="w-[152px] h-[152px] flex items-start mx-auto">
                              <img
                                src={item.image}
                                className="w-[150px] h-[150px] rounded-[8px] inline-block object-contain"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-stretch justify-start">
                            <div>
                              <h3 className="line-clamp-[2] text-[.8rem] font-bold text-[#3f4064] leading-[2] text-start">
                                {item.title}
                              </h3>
                            </div>
                            <div className="flex justify-start items-center mb-[4px] ">
                              <div className="flex items-center">
                                <div className="flex me-[4px]">
                                  <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M20.0001 12.0003H4.0001C3.7701 12.0003 3.5601 11.9003 3.4201 11.7203C3.2801 11.5503 3.2201 11.3103 3.2701 11.0903L4.4001 5.69026C4.7701 3.94026 5.5201 2.33026 8.4901 2.33026H15.5201C18.4901 2.33026 19.2401 3.95026 19.6101 5.69026L20.7401 11.1003C20.7901 11.3203 20.7301 11.5503 20.5901 11.7303C20.4401 11.9003 20.2301 12.0003 20.0001 12.0003ZM4.9201 10.5003H19.0701L18.1301 6.00026C17.8501 4.69026 17.5201 3.83026 15.5101 3.83026H8.4901C6.4801 3.83026 6.1501 4.69026 5.8701 6.00026L4.9201 10.5003Z"
                                      fill="#1028ff"
                                    />
                                    <path
                                      d="M19.9601 23.0003H18.0801C16.4601 23.0003 16.1501 22.0703 15.9501 21.4603L15.7501 20.8603C15.4901 20.1003 15.4601 20.0003 14.5601 20.0003H9.44009C8.54009 20.0003 8.48009 20.1703 8.25009 20.8603L8.05009 21.4603C7.84009 22.0803 7.54009 23.0003 5.92009 23.0003H4.04009C3.25009 23.0003 2.49009 22.6703 1.96009 22.0903C1.44009 21.5203 1.19009 20.7603 1.26009 20.0003L1.82009 13.9103C1.97009 12.2603 2.41009 10.5003 5.62009 10.5003H18.3801C21.5901 10.5003 22.0201 12.2603 22.1801 13.9103L22.7401 20.0003C22.8101 20.7603 22.5601 21.5203 22.0401 22.0903C21.5101 22.6703 20.7501 23.0003 19.9601 23.0003ZM9.44009 18.5003H14.5601C16.3801 18.5003 16.8101 19.3103 17.1701 20.3703L17.3801 20.9903C17.5501 21.5003 17.5501 21.5103 18.0901 21.5103H19.9701C20.3401 21.5103 20.6901 21.3603 20.9401 21.0903C21.1801 20.8303 21.2901 20.5003 21.2601 20.1503L20.7001 14.0603C20.5701 12.7103 20.4101 12.0103 18.4001 12.0103H5.62009C3.60009 12.0103 3.44009 12.7103 3.32009 14.0603L2.76009 20.1503C2.73009 20.5003 2.84009 20.8303 3.08009 21.0903C3.32009 21.3603 3.68009 21.5103 4.05009 21.5103H5.93009C6.47009 21.5103 6.47009 21.5003 6.64009 21.0003L6.84009 20.3903C7.09009 19.5903 7.46009 18.5003 9.44009 18.5003Z"
                                      fill="#1028ff"
                                    />
                                    <path
                                      d="M4 9.00027H3C2.59 9.00027 2.25 8.66027 2.25 8.25027C2.25 7.84027 2.59 7.50027 3 7.50027H4C4.41 7.50027 4.75 7.84027 4.75 8.25027C4.75 8.66027 4.41 9.00027 4 9.00027Z"
                                      fill="#1028ff"
                                    />
                                    <path
                                      d="M21 9.00027H20C19.59 9.00027 19.25 8.66027 19.25 8.25027C19.25 7.84027 19.59 7.50027 20 7.50027H21C21.41 7.50027 21.75 7.84027 21.75 8.25027C21.75 8.66027 21.41 9.00027 21 9.00027Z"
                                      fill="#1028ff"
                                    />
                                    <path
                                      d="M12 6.00027C11.59 6.00027 11.25 5.66027 11.25 5.25027V3.25027C11.25 2.84027 11.59 2.50027 12 2.50027C12.41 2.50027 12.75 2.84027 12.75 3.25027V5.25027C12.75 5.66027 12.41 6.00027 12 6.00027Z"
                                      fill="#1028ff"
                                    />
                                    <path
                                      d="M13.5 6.00027H10.5C10.09 6.00027 9.75 5.66027 9.75 5.25027C9.75 4.84027 10.09 4.50027 10.5 4.50027H13.5C13.91 4.50027 14.25 4.84027 14.25 5.25027C14.25 5.66027 13.91 6.00027 13.5 6.00027Z"
                                      fill="#1028ff"
                                    />
                                    <path
                                      d="M9 16.0003H6C5.59 16.0003 5.25 15.6603 5.25 15.2503C5.25 14.8403 5.59 14.5003 6 14.5003H9C9.41 14.5003 9.75 14.8403 9.75 15.2503C9.75 15.6603 9.41 16.0003 9 16.0003Z"
                                      fill="#1028ff"
                                    />
                                    <path
                                      d="M18 16.0003H15C14.59 16.0003 14.25 15.6603 14.25 15.2503C14.25 14.8403 14.59 14.5003 15 14.5003H18C18.41 14.5003 18.75 14.8403 18.75 15.2503C18.75 15.6603 18.41 16.0003 18 16.0003Z"
                                      fill="#1028ff"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <p className="text-[.8rem] font-[500]">
                                ارسال امروز
                              </p>
                            </div>
                            <div className="flex flex-col justify-between pt-[4px] items-stretch ">
                              <div className="flex items-center justify-between">
                                <div className="w-[34px] h-[20px] px-[4px] text-white rounded-[16px] flex items-center justify-center bg-[#d32f2f]">
                                  <span className="text-[.7rem] font-bold">
                                    {item.discont}%
                                  </span>
                                </div>
                                <div className="flex justify-end items-center gap-1 text-[1.1rem] font-bold text-[#3f4064] leading-[1.7]">
                                  <p>{item.price}</p>
                                  <div className="flex"></div>
                                </div>
                              </div>
                              <div className="flex items-center justify-between pe-[20px]">
                                <div className="ms-auto text-[.7rem] line-through text-[#c0c2c5] leading-[2]">
                                  <p>{item.lastPrice}</p>
                                </div>
                              </div>
                            </div>
                            <div className="mt-auto">
                                {item.sold?<div className="relative bg-[#f0f0f1] h-[4px] rounded-[8px]">
                                <div className={`absolute bg-[#ef394e] h-full left-0 top-0   rounded-[8px]`} style={{width:item.sold+"%"}}></div>
                              </div>:null}
                              <div className="flex justify-between items-center pt-[4px]">
                              <div>
                                  <span className="me-[4px] text-[#ef394e] text-[.7rem]">
                                    {item.sold?`${item.sold}%`:null}
                                  </span>
                                  <span className="text-[.7rem] text-[#81858b]">
                                   {item.sold?" فروش رفته":null}
                                  </span>
                                </div>
                                <p className="text-end text-[.8rem] text-[#ef394e] font-bold leading-[2]">
                                  {seconds < 10 ? "0" + seconds : seconds} :{" "}
                                  {minutes < 10 ? "0" + minutes : minutes} :{" "}
                                  {hour < 10 ? "0" + hour : hour}
                                </p>
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

export default FeaturedDeals;
