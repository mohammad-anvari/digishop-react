import { Link } from "react-router-dom";
import useFetchs from "../CustomHooks/useFetchs";
const Offerzone = () => {
  const [data] = useFetchs("http://localhost:30018/offerzone");
  return (
    <>
    <div className="w-full">
      <div className="w-full max-w-[1336px] mx-auto lg:px-[16px] 2xl:px-0">
        <div className=" border-[1px] lg:border-[#e0e0e2] px-[20px] lg:px-[12px] lg:rounded-[16px]">
          <div className=" flex items-center justify-center py-[12px] lg:py-[16px] mb-[8px]">
            <div className=" flex">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 21.0002H7C2.59 21.0002 1.25 19.6602 1.25 15.2502V14.7502C1.25 14.3402 1.59 14.0002 2 14.0002C2.96 14.0002 3.75 13.2102 3.75 12.2502C3.75 11.2902 2.96 10.5002 2 10.5002C1.59 10.5002 1.25 10.1602 1.25 9.75024V9.25024C1.25 4.84024 2.59 3.50024 7 3.50024H17C21.41 3.50024 22.75 4.84024 22.75 9.25024V10.2502C22.75 10.6602 22.41 11.0002 22 11.0002C21.04 11.0002 20.25 11.7902 20.25 12.7502C20.25 13.7102 21.04 14.5002 22 14.5002C22.41 14.5002 22.75 14.8402 22.75 15.2502C22.75 19.6602 21.41 21.0002 17 21.0002ZM2.75 15.4102C2.77 18.8502 3.48 19.5002 7 19.5002H17C20.34 19.5002 21.15 18.9102 21.24 15.9102C19.81 15.5702 18.75 14.2802 18.75 12.7502C18.75 11.2202 19.82 9.93024 21.25 9.59024V9.25024C21.25 5.68024 20.57 5.00024 17 5.00024H7C3.48 5.00024 2.77 5.65024 2.75 9.09024C4.18 9.43024 5.25 10.7202 5.25 12.2502C5.25 13.7802 4.18 15.0702 2.75 15.4102Z"
                  fill="#ef4056"
                />
                <path
                  d="M15.0002 16.1302C14.4402 16.1302 13.9902 15.6802 13.9902 15.1302C13.9902 14.5802 14.4402 14.1302 14.9902 14.1302C15.5402 14.1302 15.9902 14.5802 15.9902 15.1302C15.9902 15.6802 15.5602 16.1302 15.0002 16.1302Z"
                  fill="#292D32"
                />
                <path
                  d="M9.00023 11.1302C8.44023 11.1302 7.99023 10.6802 7.99023 10.1302C7.99023 9.58025 8.44023 9.13025 8.99023 9.13025C9.54023 9.13025 9.99023 9.58025 9.99023 10.1302C9.99023 10.6802 9.56023 11.1302 9.00023 11.1302Z"
                  fill="#ef4056"
                />
                <path
                  d="M8.62982 16.6803C8.43982 16.6803 8.24982 16.6103 8.09982 16.4603C7.80982 16.1703 7.80982 15.6903 8.09982 15.4003L14.8298 8.67026C15.1198 8.38026 15.5998 8.38026 15.8898 8.67026C16.1798 8.96026 16.1798 9.44026 15.8898 9.73026L9.15982 16.4603C9.01982 16.6103 8.81982 16.6803 8.62982 16.6803Z"
                  fill="#ef4056"
                />
              </svg>
            </div>
            <h3 className="ms-[8px] text-[1.5rem] font-medium">
              منتخب محصولات تخفیف و حراج
            </h3>
          </div>
          <div className=" grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-6">
            {data?.map((item) => {
              return (
                <Link className=" block cursor-pointer grow py-[12px] px-[16px] lg:px-[8px] h-full overflow-hidden border-b-[1px] border-l-[1px] border-[#f0f0f1] relative" key={item.id}>
                  <div className="flex flex-col items-stretch justify-start h-full overflow-hidden">
                    <div className="flex grow relative flex-col">
                        <div className="flex flex-col items-stretch  mb-[4px] relative ">
                          <div className=" flex items-start mx-auto">
                            <img
                              src={item.image}
                              className="rounded-[8px] w-full object-contain"
                              alt=""
                            />
                          </div>
                        </div>
                      <div className=" flex flex-col grow justify-start items-stretch">
                        <div className=" pt-[4px] flex flex-col justify-between items-stretch ">
                          <div className=" flex items-center justify-between">
                            {item.discount? <div className=" text-center text-white px-[4px] bg-[#d32f2f] rounded-[16px] flex items-center justify-center font-semibold">
                              <span className="text-[.8rem]">{item.discount}</span>
                            </div>:null}
                            <div className=" flex items-center grow justify-end text-[#3f4064] gap-1 ">
                              <span className="w-[61.16px] h-[33.6px] ">
                                {item.price}
                              </span>
                              <div className="w-[16px] h-[16px]"></div>
                            </div>
                          </div>
                          <div className="pe-[20px] flex items-center justify-between">
                            <div className=" ms-auto">
                              <span className="line-through text-[#c0c2c5] text-[.9rem] flex justify-end">
                                {item.lastprice}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Offerzone;
