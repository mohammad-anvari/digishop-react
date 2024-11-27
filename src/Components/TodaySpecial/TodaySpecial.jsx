import style from "./Todayspecial.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "../../Css/swiperstyle.css";

// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetchs from "../../CustomHooks/useFetchs";
const TodaySpecial = () => {
  const [seconds, setSeconds] = useState(30);
  const [minutes, setMinutes] = useState(51);
  const [hour, setHour] = useState(11);
  const [data] = useFetchs("http://localhost:30018/todayspecial");
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
      <div className="w-[100%] h-[360.15px] mx-auto px-[16px]">
        <div
          className={`w-[100%] h-[344.15px] pb-[12px] mt-[16px] rounded-[8px] ${style.bgimage} `}
        >
          <div className="w-[100%] mx-[16px] ">
            <div className="w-[100%] py-[16px]">
              <div className="w-[100%] flex grow items-center ">
                <div className="w-[24px] h-[24px] flex items-center justify-center me-[8px] ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.9184 14.5704C17.6594 14.8214 17.5404 15.1844 17.5994 15.5404L18.4884 20.4604C18.5634 20.8774 18.3874 21.2994 18.0384 21.5404C17.6964 21.7904 17.2414 21.8204 16.8684 21.6204L12.4394 19.3104C12.2854 19.2284 12.1144 19.1844 11.9394 19.1794H11.6684C11.5744 19.1934 11.4824 19.2234 11.3984 19.2694L6.96839 21.5904C6.74939 21.7004 6.50139 21.7394 6.25839 21.7004C5.66639 21.5884 5.27139 21.0244 5.36839 20.4294L6.25839 15.5094C6.31739 15.1504 6.19839 14.7854 5.93939 14.5304L2.32839 11.0304C2.02639 10.7374 1.92139 10.2974 2.05939 9.90037C2.19339 9.50437 2.53539 9.21537 2.94839 9.15037L7.91839 8.42937C8.29639 8.39037 8.62839 8.16037 8.79839 7.82037L10.9884 3.33037C11.0404 3.23037 11.1074 3.13837 11.1884 3.06037L11.2784 2.99037C11.3254 2.93837 11.3794 2.89537 11.4394 2.86037L11.5484 2.82037L11.7184 2.75037H12.1394C12.5154 2.78937 12.8464 3.01437 13.0194 3.35037L15.2384 7.82037C15.3984 8.14737 15.7094 8.37437 16.0684 8.42937L21.0384 9.15037C21.4584 9.21037 21.8094 9.50037 21.9484 9.90037C22.0794 10.3014 21.9664 10.7414 21.6584 11.0304L17.9184 14.5704Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <p className="font-bold text-[1rem] text-white">
                  شگفت&zwnj;انگیز روز
                </p>
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[266.55px] ">
            <div className="w-[100%] h-full p-[4px]">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                slidesPerView={2.35}
                className="mySwiper6 swiper6"
              >
                {data?.map((item) => {
                  return (
                    <SwiperSlide>
                      <div className="w-[614.4px] h-[258.55px] rounded-[8px] relative">
                        <Link className="w-[614.4px] h-[258.55px] px-[16px] py-[8px] rounded-[8px] flex flex-col items-center justify-center">
                          <div className="w-[582.4px] h-[242.55px] flex-col overflow-hidden justify-start">
                            <div className="w-[582.4px] h-[26.04px] mb-[4px] flex items-center justify-start">
                              <div className="w-[116px] h-[14px] me-[4px]">
                                <img
                                  src="../../../public/Image/Incredibleoffers/Todayspecial/IncredibleOffer.svg"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="w-[582.4px] h-[212.51px] flex flex-row grow relative ">
                              <div className="w-[200px] h-[212.51px] flex flex-col grow items-stretch me-[12px] ">
                                <div className="w-[200px] h-[200px] flex flex-col items-center">
                                  <img src={item.image} alt="" />
                                </div>
                              </div>
                              <div className="w-[370.4px] flex flex-col justify-start items-stretch grow">
                                <div className="w-[370.4px] h-[28.8px] mb-[4px]"></div>
                                <div className="w-[370.4px] h-[52px] text-start">
                                  <h3 className="text-[.8rem] font-bold leading-[2] text-[#3f4064]">
                                    {item.title}
                                  </h3>
                                </div>
                                <div className="w-[370.4px] h-[26.04px] mb-[4px] flex items-center justify-between">
                                  <div className="w-[45.49px] h-[14.4px] flex">
                                    <div className="w-[14px] h-[14px] "></div>
                                    <p className="ms-[8px] text-[#424750] text-[.7rem]">
                                      {item.color}
                                    </p>
                                  </div>
                                  {item.score ? (
                                    <div className="w-[40.91px] h-[26.04px] flex items-center ">
                                      <p className="text-[#3f4064] text-[.7rem] font-bold">
                                        {item.score}
                                      </p>
                                      <div className="w-[16px] h-[16px] ms-[8px] flex items-center">
                                        <svg
                                          width="16"
                                          height="16"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            d="M17.9184 14.5704C17.6594 14.8214 17.5404 15.1844 17.5994 15.5404L18.4884 20.4604C18.5634 20.8774 18.3874 21.2994 18.0384 21.5404C17.6964 21.7904 17.2414 21.8204 16.8684 21.6204L12.4394 19.3104C12.2854 19.2284 12.1144 19.1844 11.9394 19.1794H11.6684C11.5744 19.1934 11.4824 19.2234 11.3984 19.2694L6.96839 21.5904C6.74939 21.7004 6.50139 21.7394 6.25839 21.7004C5.66639 21.5884 5.27139 21.0244 5.36839 20.4294L6.25839 15.5094C6.31739 15.1504 6.19839 14.7854 5.93939 14.5304L2.32839 11.0304C2.02639 10.7374 1.92139 10.2974 2.05939 9.90037C2.19339 9.50437 2.53539 9.21537 2.94839 9.15037L7.91839 8.42937C8.29639 8.39037 8.62839 8.16037 8.79839 7.82037L10.9884 3.33037C11.0404 3.23037 11.1074 3.13837 11.1884 3.06037L11.2784 2.99037C11.3254 2.93837 11.3794 2.89537 11.4394 2.86037L11.5484 2.82037L11.7184 2.75037H12.1394C12.5154 2.78937 12.8464 3.01437 13.0194 3.35037L15.2384 7.82037C15.3984 8.14737 15.7094 8.37437 16.0684 8.42937L21.0384 9.15037C21.4584 9.21037 21.8094 9.50037 21.9484 9.90037C22.0794 10.3014 21.9664 10.7414 21.6584 11.0304L17.9184 14.5704Z"
                                            fill="#f9bc00"
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                  ) : null}
                                </div>
                                <div className="w-[370.4px] h-[63.64px] flex flex-col pt-[4px] ">
                                  <div className="w-[370.4px] h-[33.6px] flex items-center justify-between ">
                                    <div className="w-[34px] h-[20px] px-[4px] bg-[#d32f2f] rounded-[16px] flex items-center justify-center text-white">
                                      <span className="text-[.7rem] font-bold">
                                        {item.discount}
                                      </span>
                                    </div>
                                    <div className="w-[336.4px] h-[33.6px] flex gap-1 items-center justify-end">
                                      <span className="text-[1rem] font-bold">
                                        {item.price}
                                      </span>
                                      <div className="w-[16px] h-[16px] "></div>
                                    </div>
                                  </div>
                                  <div className="w-[370.4px] h-[26.04px] pe-[20px] flex items-center justify-end">
                                    <span className="text-[.7rem] font-bold line-through text-[#c0c2c5] ">
                                      {item.lastprice}
                                    </span>
                                  </div>
                                  <div className="w-[370.4px] h-[34.04px]">
                                    <div className="w-[370.4px] h-[30.04px] flex pt-[4px] justify-end items-center">
                                      <p className="text-[.8rem] text-[#ef394e] font-bold">
                                        {hour}:{minutes}:{seconds}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                        {item.lock === true ? (
                          <div className="w-[614.4px] h-[258.55px] bg-[#000000a6] rounded-[8px] absolute top-0 flex flex-col items-center justify-center gap-6 ">
                            <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full bg-[#ef4056] p-[16px]">
                              <svg
                                width="48"
                                height="48"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M18 11.0002C17.59 11.0002 17.25 10.6602 17.25 10.2502V8.25024C17.25 5.10024 16.36 3.00024 12 3.00024C7.64 3.00024 6.75 5.10024 6.75 8.25024V10.2502C6.75 10.6602 6.41 11.0002 6 11.0002C5.59 11.0002 5.25 10.6602 5.25 10.2502V8.25024C5.25 5.35024 5.95 1.50024 12 1.50024C18.05 1.50024 18.75 5.35024 18.75 8.25024V10.2502C18.75 10.6602 18.41 11.0002 18 11.0002Z"
                                  fill="#fff"
                                />
                                <path
                                  d="M12 19.5002C10.21 19.5002 8.75 18.0402 8.75 16.2502C8.75 14.4602 10.21 13.0002 12 13.0002C13.79 13.0002 15.25 14.4602 15.25 16.2502C15.25 18.0402 13.79 19.5002 12 19.5002ZM12 14.5002C11.04 14.5002 10.25 15.2902 10.25 16.2502C10.25 17.2102 11.04 18.0002 12 18.0002C12.96 18.0002 13.75 17.2102 13.75 16.2502C13.75 15.2902 12.96 14.5002 12 14.5002Z"
                                  fill="#fff"
                                />
                                <path
                                  d="M17 23.0002H7C2.59 23.0002 1.25 21.6602 1.25 17.2502V15.2502C1.25 10.8402 2.59 9.50024 7 9.50024H17C21.41 9.50024 22.75 10.8402 22.75 15.2502V17.2502C22.75 21.6602 21.41 23.0002 17 23.0002ZM7 11.0002C3.42 11.0002 2.75 11.6802 2.75 15.2502V17.2502C2.75 20.8202 3.42 21.5002 7 21.5002H17C20.58 21.5002 21.25 20.8202 21.25 17.2502V15.2502C21.25 11.6802 20.58 11.0002 17 11.0002H7Z"
                                  fill="#fff"
                                />
                              </svg>
                            </div>
                            <div className="w-[347.71px] h-[40px] flex items-center justify-center gap-4 text-[.8rem] text-white font-bold">
                              <span className="text-center">
                                {" "}
                                شروع تخفیف از
                                <span>
                                  {" "}
                                  {seconds} : {minutes} : {hour}{" "}
                                </span>
                                دیگر
                              </span>
                              <button className="w-[108.6px] h-[40px] border-[1px] border-[#fff] py-[8px] px-[16px] bg-transparent text-white rounded-[8px] flex items-center justify-center">
                                <div className="w-[75px] h-[26.04px] flex items-center justify-center  ">
                                  <div className="w-[24px] h-[24px] me-[4px] flex">
                                    <svg
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M12.02 2.90991C8.70997 2.90991 6.01997 5.59991 6.01997 8.90991V11.7999C6.01997 12.4099 5.75997 13.3399 5.44997 13.8599L4.29997 15.7699C3.58997 16.9499 4.07997 18.2599 5.37997 18.6999C9.68997 20.1399 14.34 20.1399 18.65 18.6999C19.86 18.2999 20.39 16.8699 19.73 15.7699L18.58 13.8599C18.28 13.3399 18.02 12.4099 18.02 11.7999V8.90991C18.02 5.60991 15.32 2.90991 12.02 2.90991Z"
                                        stroke="#fff"
                                        strokeWidth="1.5"
                                        strokeiterlimit="10"
                                        strokeLinecap="round"
                                      />
                                      <path
                                        d="M13.87 3.19994C13.56 3.10994 13.24 3.03994 12.91 2.99994C11.95 2.87994 11.03 2.94994 10.17 3.19994C10.46 2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994Z"
                                        stroke="#fff"
                                        strokeWidth="1.5"
                                        strokeiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601"
                                        stroke="#fff"
                                        strokeWidth="1.5"
                                        strokeiterlimit="10"
                                      />
                                    </svg>
                                  </div>
                                  <p>خبرم کن</p>
                                </div>
                              </button>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodaySpecial;
