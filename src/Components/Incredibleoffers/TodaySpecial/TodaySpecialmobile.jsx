import { Link } from "react-router-dom";

import style from "./Todayspecial.module.css";
import { useEffect } from "react";
const TodaySpecialmobile = ({ data, h, m, s }) => {
    useEffect(()=>{

    },[data,h,m,s])
  return (
    <>
      <div className={`flex overflow-x-auto ps-[8px] overflow-y-hidden  lg:hidden`}>
        {data?.map((item) => {
          return (
            <div className="block me-[8px] relative" key={item.id}>
              <Link className="py-[12px] px-[16px] bg-white rounded-[8px] h-full block relative">
                <div className="flex flex-col items-stretch justify-start h-full">
                  <div className="flex items-center justify-start mb-[4px]">
                    <div className="me-[4px]">
                      <img
                        src="../../../public/Image/Incredibleoffers/Todayspecial/IncredibleOffer.svg"
                        className="w-full object-contain inline-block"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col relative">
                    <div className="flex flex-col mb-[4px]items-stretch ">
                      <div className="flex mx-auto">
                        <img
                          src={item.image}
                          className="w-full rounded-[8px] inline-block "
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch justify-start">
                    <div className="flex mb-[4px]">
                      <br />
                    </div>
                    <div>
                      <h3 className="h-[52px] cursor-vertical-text line-clamp-[2] font-bold text-[1rem] text-[#3f4064]">
                      {item.title}
                      </h3>
                    </div>
                    {item.score?<div className="mb-[4px] flex items-center justify-between ">
                      <div className="flex items-center">{item.color}</div>
                      <div className="flex items-center">
                        <p className="text-[.8rem] font-bold">{item.score}</p>
                        <div className="flex ms-[8px] ">
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
                    </div>:null}
                    <div className="flex flex-col items-stretch justify-between pt-[4px]">
                      <div className="flex items-center justify-between">
                        <div className="px-[4px] text-white bg-[#d32f2f] rounded-[16px] flex justify-center items-center">
                          <span className="font-bold text-[.8rem]">{item.discount}</span>
                        </div>
                        <div className="flex items-center justify-end gap-1 text-[#3f4064] text-[1rem] font-bold">
                          <span>{item.price}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-end pe-[20px]">
                      <p className="ms-auto line-through text-[#c0c2c5] text-[.7rem]">
                        {item.lastprice}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="relative"></div>
                      <div className="flex items-center justify-between pt-[4px]">
                        <div></div>
                        <p className="text-[#ef394e] text-left text-[.7rem] font-bold">
                          {s < 10 ? "0" + s : s} : {m < 10 ? "0" + m : m} :{" "}
                          {h < 10 ? "0" + h : h}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodaySpecialmobile;
