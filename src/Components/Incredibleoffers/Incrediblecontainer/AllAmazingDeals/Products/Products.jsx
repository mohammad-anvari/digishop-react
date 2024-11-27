import { Link } from "react-router-dom";
import style from "./Products.module.css";
import useFetchs from "../../../../CustomHooks/useFetchs";
import { useEffect, useState } from "react";
import Productsmobile from "./Productsmobile";
const Products = () => {
  const [data] = useFetchs("http://localhost:30018/filters");
  const [products] = useFetchs("http://localhost:30018/FeaturedDeals");
  const [seconds, setSeconds] = useState(30);
  const [minutes, setMinutes] = useState(51);
  const [hour, setHour] = useState(11);
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
      <section className="w-full lg:overflow-hidden relative">
        <div className="lg:static sticky lg:top-[56px] top-[64px] bg-[#fff]">
          <div className="flex items-center border-b-[1px]  border-[#e0e0e2] sticky lg:static lg:top-[80px] bg-white ">
            {/* dsktop title  */}
            <div
              className={`hidden flex-row items-center gap-x-4 grow overflow-x-scroll ${style.filters} max-w-[1200px]  lg:flex`}
            >
              <div className="py-[12px]">
                <div className="flex items-center ">
                  <div className="flex me-[8px]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 20.5002H11C10.59 20.5002 10.25 20.1602 10.25 19.7502C10.25 19.3402 10.59 19.0002 11 19.0002H21C21.41 19.0002 21.75 19.3402 21.75 19.7502C21.75 20.1602 21.41 20.5002 21 20.5002Z"
                        fill="#424750"
                      />
                      <path
                        d="M21 13.5002H11C10.59 13.5002 10.25 13.1602 10.25 12.7502C10.25 12.3402 10.59 12.0002 11 12.0002H21C21.41 12.0002 21.75 12.3402 21.75 12.7502C21.75 13.1602 21.41 13.5002 21 13.5002Z"
                        fill="#424750"
                      />
                      <path
                        d="M21 6.50024H11C10.59 6.50024 10.25 6.16024 10.25 5.75024C10.25 5.34024 10.59 5.00024 11 5.00024H21C21.41 5.00024 21.75 5.34024 21.75 5.75024C21.75 6.16024 21.41 6.50024 21 6.50024Z"
                        fill="#424750"
                      />
                      <path
                        d="M4 7.50019C3.81 7.50019 3.62 7.43019 3.47 7.28019L2.47 6.28019C2.18 5.99019 2.18 5.51019 2.47 5.22019C2.76 4.93019 3.24 4.93019 3.53 5.22019L4 5.69019L6.47 3.22019C6.76 2.93019 7.24 2.93019 7.53 3.22019C7.82 3.51019 7.82 3.99019 7.53 4.28019L4.53 7.28019C4.38 7.43019 4.19 7.50019 4 7.50019Z"
                        fill="#424750"
                      />
                      <path
                        d="M4 14.5002C3.81 14.5002 3.62 14.4302 3.47 14.2802L2.47 13.2802C2.18 12.9902 2.18 12.5102 2.47 12.2202C2.76 11.9302 3.24 11.9302 3.53 12.2202L4 12.6902L6.47 10.2202C6.76 9.93019 7.24 9.93019 7.53 10.2202C7.82 10.5102 7.82 10.9902 7.53 11.2802L4.53 14.2802C4.38 14.4302 4.19 14.5002 4 14.5002Z"
                        fill="#424750"
                      />
                      <path
                        d="M4 21.5002C3.81 21.5002 3.62 21.4302 3.47 21.2802L2.47 20.2802C2.18 19.9902 2.18 19.5102 2.47 19.2202C2.76 18.9302 3.24 18.9302 3.53 19.2202L4 19.6902L6.47 17.2202C6.76 16.9302 7.24 16.9302 7.53 17.2202C7.82 17.5102 7.82 17.9902 7.53 18.2802L4.53 21.2802C4.38 21.4302 4.19 21.5002 4 21.5002Z"
                        fill="#424750"
                      />
                    </svg>
                  </div>
                  <p className="text-[.7rem] font-bold leading-[2] whitespace-nowrap text-[#3f4064]">
                    مرتب سازی:
                  </p>
                </div>
              </div>
              <div className="contents">
                <span className="text-[.8rem] font-[500] whitespace-nowrap leading-[2] text-[#81858b] cursor-pointer">
                  بیشترین تخفیف
                </span>
                <span className="text-[.8rem] font-[500] whitespace-nowrap leading-[2] text-[#81858b] cursor-pointer">
                  پربازدیدترین
                </span>
                <span className="text-[.8rem] font-[500] whitespace-nowrap leading-[2] text-[#81858b] cursor-pointer">
                  جدیدترین
                </span>
                <span className="text-[.8rem] font-[500] whitespace-nowrap leading-[2] text-[#81858b] cursor-pointer">
                  پرفروش‌ترین‌
                </span>
                <span className="text-[.8rem] font-[500] whitespace-nowrap leading-[2] text-[#81858b] cursor-pointer">
                  ارزان‌ترین
                </span>
                <span className="text-[.8rem] font-[500] whitespace-nowrap leading-[2] text-[#81858b] cursor-pointer">
                  گران‌ترین
                </span>
                <span className="text-[.8rem] font-[500] whitespace-nowrap leading-[2] text-[#81858b] cursor-pointer">
                  سریع‌ترین ارسال
                </span>
                <span className="text-[.8rem] font-[500] whitespace-nowrap leading-[2] text-[#81858b] cursor-pointer">
                  پیشنهاد خریداران
                </span>
                <span className="text-[.8rem] font-bold leading-[2] whitespace-nowrap text-[#ef394e] cursor-pointer">
                  منتخب
                </span>
              </div>
              <div className="ms-auto block">
                <span className="xl:flex items-center whitespace-nowrap text-[.8rem] font-[500] text-[#81858b]">
                  196 کالا
                </span>
              </div>
            </div>
            {/* end dsktop title  */}
            {/* mobile title */}
            <div className="flex items-center ps-[12px] pt-[4px] pb-[8px] gap-[4px] w-full lg:hidden max-w-full ">
              <div className="flex flex-row items-center gap-x-[16px]">
                <div>
                  <div className="flex  items-center w-[78px] py-[4px] px-[12px] min-w-[45px] rounded-[160px] border-[#e0e0e2] border-[1px] text-[#3f4064] text-[.7rem] leading-[2] font-[400]">
                    <div className="me-[4px]">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 20.5002H11C10.59 20.5002 10.25 20.1602 10.25 19.7502C10.25 19.3402 10.59 19.0002 11 19.0002H21C21.41 19.0002 21.75 19.3402 21.75 19.7502C21.75 20.1602 21.41 20.5002 21 20.5002Z"
                          fill="#424750"
                        />
                        <path
                          d="M21 13.5002H11C10.59 13.5002 10.25 13.1602 10.25 12.7502C10.25 12.3402 10.59 12.0002 11 12.0002H21C21.41 12.0002 21.75 12.3402 21.75 12.7502C21.75 13.1602 21.41 13.5002 21 13.5002Z"
                          fill="#424750"
                        />
                        <path
                          d="M21 6.50024H11C10.59 6.50024 10.25 6.16024 10.25 5.75024C10.25 5.34024 10.59 5.00024 11 5.00024H21C21.41 5.00024 21.75 5.34024 21.75 5.75024C21.75 6.16024 21.41 6.50024 21 6.50024Z"
                          fill="#424750"
                        />
                        <path
                          d="M4 7.50019C3.81 7.50019 3.62 7.43019 3.47 7.28019L2.47 6.28019C2.18 5.99019 2.18 5.51019 2.47 5.22019C2.76 4.93019 3.24 4.93019 3.53 5.22019L4 5.69019L6.47 3.22019C6.76 2.93019 7.24 2.93019 7.53 3.22019C7.82 3.51019 7.82 3.99019 7.53 4.28019L4.53 7.28019C4.38 7.43019 4.19 7.50019 4 7.50019Z"
                          fill="#424750"
                        />
                        <path
                          d="M4 14.5002C3.81 14.5002 3.62 14.4302 3.47 14.2802L2.47 13.2802C2.18 12.9902 2.18 12.5102 2.47 12.2202C2.76 11.9302 3.24 11.9302 3.53 12.2202L4 12.6902L6.47 10.2202C6.76 9.93019 7.24 9.93019 7.53 10.2202C7.82 10.5102 7.82 10.9902 7.53 11.2802L4.53 14.2802C4.38 14.4302 4.19 14.5002 4 14.5002Z"
                          fill="#424750"
                        />
                        <path
                          d="M4 21.5002C3.81 21.5002 3.62 21.4302 3.47 21.2802L2.47 20.2802C2.18 19.9902 2.18 19.5102 2.47 19.2202C2.76 18.9302 3.24 18.9302 3.53 19.2202L4 19.6902L6.47 17.2202C6.76 16.9302 7.24 16.9302 7.53 17.2202C7.82 17.5102 7.82 17.9902 7.53 18.2802L4.53 21.2802C4.38 21.4302 4.19 21.5002 4 21.5002Z"
                          fill="#424750"
                        />
                      </svg>
                    </div>
                    <p>منتخب</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex  items-center w-[66px] py-[4px] px-[12px] min-w-[45px] rounded-[160px] border-[#e0e0e2] border-[1px] text-[#3f4064] text-[.7rem] leading-[2] font-[400]">
                  <div className="me-[4px]">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 7.50024H16C15.59 7.50024 15.25 7.16024 15.25 6.75024C15.25 6.34024 15.59 6.00024 16 6.00024H22C22.41 6.00024 22.75 6.34024 22.75 6.75024C22.75 7.16024 22.41 7.50024 22 7.50024Z"
                        fill="#292D32"
                      />
                      <path
                        d="M6 7.50024H2C1.59 7.50024 1.25 7.16024 1.25 6.75024C1.25 6.34024 1.59 6.00024 2 6.00024H6C6.41 6.00024 6.75 6.34024 6.75 6.75024C6.75 7.16024 6.41 7.50024 6 7.50024Z"
                        fill="#292D32"
                      />
                      <path
                        d="M10 11.0002C7.66 11.0002 5.75 9.09024 5.75 6.75024C5.75 4.41024 7.66 2.50024 10 2.50024C12.34 2.50024 14.25 4.41024 14.25 6.75024C14.25 9.09024 12.34 11.0002 10 11.0002ZM10 4.00024C8.48 4.00024 7.25 5.23024 7.25 6.75024C7.25 8.27024 8.48 9.50024 10 9.50024C11.52 9.50024 12.75 8.27024 12.75 6.75024C12.75 5.23024 11.52 4.00024 10 4.00024Z"
                        fill="#292D32"
                      />
                      <path
                        d="M22 18.5002H18C17.59 18.5002 17.25 18.1602 17.25 17.7502C17.25 17.3402 17.59 17.0002 18 17.0002H22C22.41 17.0002 22.75 17.3402 22.75 17.7502C22.75 18.1602 22.41 18.5002 22 18.5002Z"
                        fill="#292D32"
                      />
                      <path
                        d="M8 18.5002H2C1.59 18.5002 1.25 18.1602 1.25 17.7502C1.25 17.3402 1.59 17.0002 2 17.0002H8C8.41 17.0002 8.75 17.3402 8.75 17.7502C8.75 18.1602 8.41 18.5002 8 18.5002Z"
                        fill="#292D32"
                      />
                      <path
                        d="M14 22.0002C11.66 22.0002 9.75 20.0902 9.75 17.7502C9.75 15.4102 11.66 13.5002 14 13.5002C16.34 13.5002 18.25 15.4102 18.25 17.7502C18.25 20.0902 16.34 22.0002 14 22.0002ZM14 15.0002C12.48 15.0002 11.25 16.2302 11.25 17.7502C11.25 19.2702 12.48 20.5002 14 20.5002C15.52 20.5002 16.75 19.2702 16.75 17.7502C16.75 16.2302 15.52 15.0002 14 15.0002Z"
                        fill="#292D32"
                      />
                    </svg>
                  </div>
                  <p>فیلتر</p>
                </div>
              </div>
              <div
                className={`flex w-full  items-center pe-[12px] overflow-x-scroll max-w-full ${style.filters}`}
              >
                <div className="flex items-center gap-[4px]">
                  {data?.map((elem) => {
                    return (
                      <div className="relative flex" key={elem.id}>
                        <div className="py-[4px] px-[12px] flex flex-row text-nowrap items-center rounded-[10rem] border-[1px] border-[#e0e0e2] text-[#3f4064] text-[.7rem] font-[400] leading-[2]">
                          <p>{elem.name}</p>
                          <div className="flex ms-[4px] ">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 17.0503C11.3 17.0503 10.6 16.7803 10.07 16.2503L3.55002 9.73026C3.26002 9.44026 3.26002 8.96026 3.55002 8.67026C3.84002 8.38026 4.32002 8.38026 4.61002 8.67026L11.13 15.1903C11.61 15.6703 12.39 15.6703 12.87 15.1903L19.39 8.67026C19.68 8.38026 20.16 8.38026 20.45 8.67026C20.74 8.96026 20.74 9.44026 20.45 9.73026L13.93 16.2503C13.4 16.7803 12.7 17.0503 12 17.0503Z"
                                fill="#3f4064"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/*end mobile title */}
          </div>
          <div
            className={` ${style.prgrid} lg:overflow-y-scroll max-h-[500px] `}
          >
            {/* grids */}
            {products?.map((item) => {
              return (
                <div
                  className={`border-l-[1px] border-b-[1px] border-[#f0f0f1] ${style.hv} hover:shadow-xl hidden sm:flex `}
                  key={item.id}
                >
                  <Link
                    className={`px-[16px] lg:px-[8px] py-[12px] h-full grow overflow-hidden  block  `}
                  >
                    <div className="h-full">
                      <div className=" flex flex-col items-stretch justify-start ">
                        <div className="flex items-center justify-start mb-[4px]">
                          <div className="me-[4px]">
                            <img
                              src="../../../../../../public/Image/Incredibleoffers/FeaturedDeals/IncredibleOffer.svg"
                              alt=""
                            />
                          </div>
                          <div className="flex grow">
                            <br />
                          </div>
                        </div>
                        <div className="flex flex-col ">
                          <div className="flex items-stretch flex-col mb-[4px]">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="flex flex-col items-stretch justify-start ">
                            <div className="gap-1 mb-[4px]">
                              <br />
                            </div>
                            <div>
                              <h3 className="line-clamp-[2] text-[.8rem] font-bold leading-[2] text-[#3f4064] h-[52px]">
                                {item.title}
                              </h3>
                            </div>
                            <div className="flex justify-between items-center mb-[4px] ">
                              <div className="flex items-center ">
                                <div className="me-[4px] flex ">
                                  <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12 23.0002C6.07 23.0002 1.25 18.1802 1.25 12.2502C1.25 6.32024 6.07 1.50024 12 1.50024C17.93 1.50024 22.75 6.32024 22.75 12.2502C22.75 18.1802 17.93 23.0002 12 23.0002ZM12 3.00024C6.9 3.00024 2.75 7.15024 2.75 12.2502C2.75 17.3502 6.9 21.5002 12 21.5002C17.1 21.5002 21.25 17.3502 21.25 12.2502C21.25 7.15024 17.1 3.00024 12 3.00024Z"
                                      fill="#1028ff"
                                    />
                                    <path
                                      d="M15.71 16.1803C15.58 16.1803 15.45 16.1503 15.33 16.0703L12.23 14.2203C11.46 13.7603 10.89 12.7503 10.89 11.8603V7.76025C10.89 7.35025 11.23 7.01025 11.64 7.01025C12.05 7.01025 12.39 7.35025 12.39 7.76025V11.8603C12.39 12.2203 12.69 12.7503 13 12.9303L16.1 14.7803C16.46 14.9903 16.57 15.4503 16.36 15.8103C16.21 16.0503 15.96 16.1803 15.71 16.1803Z"
                                      fill="#1028ff"
                                    />
                                  </svg>
                                </div>
                                <p
                                  className="text-[.7rem] text-[#62666d] font-[400] leading-[2]"
                                  l
                                >
                                  ارسال امروز
                                </p>
                              </div>
                              <div className="flex items-center">
                                <p className="text-[.7rem] font-bold leading-[2] ">
                                  4.1
                                </p>
                                <div className="ms-[8px] flex items-center">
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5.73998 16.2502C5.84998 15.7602 5.64998 15.0602 5.29998 14.7102L2.86998 12.2802C2.10998 11.5202 1.80998 10.7102 2.02998 10.0102C2.25998 9.31024 2.96998 8.83024 4.02998 8.65024L7.14998 8.13024C7.59998 8.05024 8.14998 7.65024 8.35998 7.24024L10.08 3.79024C10.58 2.80024 11.26 2.25024 12 2.25024C12.74 2.25024 13.42 2.80024 13.92 3.79024L15.64 7.24024C15.77 7.50024 16.04 7.75024 16.33 7.92024L5.55998 18.6902C5.41998 18.8302 5.17998 18.7002 5.21998 18.5002L5.73998 16.2502Z"
                                      fill="#f9bc00"
                                    />
                                    <path
                                      d="M18.7 14.7103C18.34 15.0703 18.14 15.7603 18.26 16.2503L18.95 19.2603C19.24 20.5103 19.06 21.4503 18.44 21.9003C18.19 22.0803 17.89 22.1703 17.54 22.1703C17.03 22.1703 16.43 21.9803 15.77 21.5903L12.84 19.8503C12.38 19.5803 11.62 19.5803 11.16 19.8503L8.23005 21.5903C7.12005 22.2403 6.17005 22.3503 5.56005 21.9003C5.33005 21.7303 5.16005 21.5003 5.05005 21.2003L17.21 9.04026C17.67 8.58026 18.32 8.37026 18.95 8.48026L19.96 8.65026C21.02 8.83026 21.73 9.31026 21.96 10.0103C22.18 10.7103 21.88 11.5203 21.12 12.2803L18.7 14.7103Z"
                                      fill="#f9bc00"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-stretch pt-[4px]">
                              <div className="flex items-center justify-between">
                                <div className="w-[34px] h-[20px] px-[4px] text-white rounded-[16px] flex items-center justify-center bg-[#d32f2f]">
                                  <span className="text-[.7rem] font-bold">
                                    {item.discont}
                                  </span>
                                </div>
                                <div className="flex justify-end items-center gap-1 text-[1.1rem] font-bold text-[#3f4064] leading-[1.7]">
                                  <p>{item.lastPrice}</p>
                                  <div className="flex"></div>
                                </div>
                              </div>
                              <div className="flex items-center justify-between pe-[20px]">
                                <p className="ms-auto line-through text-[.8rem] font-[400] leading-[2] text-[#c0c2c5]">
                                  120,000
                                </p>
                              </div>
                            </div>
                            <div className="mt-auto">
                              {item.sold ? (
                                <div className="relative bg-[#f0f0f1] h-[4px] rounded-[8px]">
                                  <div
                                    className={`absolute bg-[#ef394e] h-full left-0 top-0   rounded-[8px]`}
                                    style={{ width: item.sold + "%" }}
                                  ></div>
                                </div>
                              ) : null}
                              <div className="flex justify-between items-center pt-[4px]">
                                <div>
                                  <span className="me-[4px] text-[#ef394e] text-[.7rem]">
                                    {item.sold ? `${item.sold}%` : null}
                                  </span>
                                  <span className="text-[.7rem] text-[#81858b]">
                                    {item.sold ? " فروش رفته" : null}
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
                    </div>
                  </Link>
                </div>
              );
            })}
            {products?.map((data) => {
              return (
                <Productsmobile data={data} h={hour} m={minutes} s={seconds} />
              );
            })}
            {/* end grids */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
