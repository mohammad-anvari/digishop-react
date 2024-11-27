import { Link } from "react-router-dom";
import useFetchs from "../CustomHooks/useFetchs";
import digisrv from "./digikalaservise.module.css"

const Digikalaservises = () => {
  const [servis] = useFetchs("http://localhost:30018/digikalaservises");
  return (
    <>
      <div className={`w-full lg:max-w-[1336px] lg:mx-auto mt-5 flex items-center justify-start ${digisrv.scrll} `}>
        <div className={`w-full lg:max-w-[1336px] flex items-center justify-start lg:justify-around overflow-x-scroll lg:overflow-hidden py-[8px] ${digisrv.scrll} `}>
          {servis?.map((item) => {
            return (
              <Link className="flex flex-col items-center " key={item.id}>
                <div className="w-[52px] h-[52px] ">
                  <img
                    src={item.image}
                    alt=""
                  />
                </div>
                <span className="w-[82px] h-[47.73px] px-[16px] mt-[4px] text-center text-[.7rem] mx-auto ">
                  {item.text}
                </span>
              </Link>
            );
          })}
            <div className="w-[82px] h-[79.86px] flex flex-col items-center px-[16px]">
            <div className="w-[52px] h-[52px] flex items-center justify-center rounded-full bg-[#f0f0f1] cursor-pointer ">
                <div className="w-[32px] h-[32px] flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 15.0002C3.48 15.0002 2.25 13.7702 2.25 12.2502C2.25 10.7302 3.48 9.50024 5 9.50024C6.52 9.50024 7.75 10.7302 7.75 12.2502C7.75 13.7702 6.52 15.0002 5 15.0002ZM5 11.0002C4.31 11.0002 3.75 11.5602 3.75 12.2502C3.75 12.9402 4.31 13.5002 5 13.5002C5.69 13.5002 6.25 12.9402 6.25 12.2502C6.25 11.5602 5.69 11.0002 5 11.0002Z" fill="#a1a3a8"/>
<path d="M19 15.0002C17.48 15.0002 16.25 13.7702 16.25 12.2502C16.25 10.7302 17.48 9.50024 19 9.50024C20.52 9.50024 21.75 10.7302 21.75 12.2502C21.75 13.7702 20.52 15.0002 19 15.0002ZM19 11.0002C18.31 11.0002 17.75 11.5602 17.75 12.2502C17.75 12.9402 18.31 13.5002 19 13.5002C19.69 13.5002 20.25 12.9402 20.25 12.2502C20.25 11.5602 19.69 11.0002 19 11.0002Z" fill="#a1a3a8"/>
<path d="M12 15.0002C10.48 15.0002 9.25 13.7702 9.25 12.2502C9.25 10.7302 10.48 9.50024 12 9.50024C13.52 9.50024 14.75 10.7302 14.75 12.2502C14.75 13.7702 13.52 15.0002 12 15.0002ZM12 11.0002C11.31 11.0002 10.75 11.5602 10.75 12.2502C10.75 12.9402 11.31 13.5002 12 13.5002C12.69 13.5002 13.25 12.9402 13.25 12.2502C13.25 11.5602 12.69 11.0002 12 11.0002Z" fill="#a1a3a8"/>
</svg>

                </div>
            </div>
              <span className="w-[27.45px] h-[23.86px]  mt-[4px]  text-[.7rem]  ">بیشتر</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Digikalaservises;
