import { useState } from "react";
import Subcategory from "./Subcategory";
import useFetchs from "../../../../CustomHooks/useFetchs";
import style from "./Filters.module.css";
const Filters = () => {
  const [border, setBorder] = useState(false);
  const [seller, setSeller] = useState(false);
  const [data] = useFetchs("http://localhost:30018/filters");

  return (
    <>
      <section  className="lg:flex flex-col order-[-1] max-w-[300px] min-w-[270px] hidden relative h-full  ">
        <div className="z-[10] relative">
          <div className="lg:w-full lg:border-[1px] border-[#e0e0e2] h-auto rounded-[8px] bg-white relative">
            <div className="w-full hidden lg:block px-[20px] py-[12px]">
              <div className="w-full flex items-center justify-start ">
                <h1 className="text-[#3f4064] text-[1.3rem] font-bold leading-[1.8]">
                  فیلترها
                </h1>
              </div>
            </div>
            {/* item filter */}
            {data?.map((item) => {
              return (
                <div
                  className={`w-full ${item.brands && border?"border-b-[1px] border-[#f0f0f1]":"px-[20px]"} `}
                  key={item.id}
                >
                  {item.brands ? (
                    <div
                      className="w-full flex flex-col items-center justify-start cursor-pointer "
                      
                    >
                      <div
                        className={`w-full flex flex-col items-start py-[12px] ${
                          border ? "" : "border-b-[1px] border-[#f0f0f1]"
                        } `} 
                        onClick={() => setBorder(!border)}
                        
                      >
                        <div className={`flex justify-between items-center w-full ${item.brands && border?'px-[20px]':""} `} >
                          <h3 className="flex items-center text-[1rem] font-bold leading-[2]">
                            {item.name}
                          </h3>
                          <div className="flex">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 17.0503C11.3 17.0503 10.6 16.7803 10.07 16.2503L3.55002 9.73026C3.26002 9.44026 3.26002 8.96026 3.55002 8.67026C3.84002 8.38026 4.32002 8.38026 4.61002 8.67026L11.13 15.1903C11.61 15.6703 12.39 15.6703 12.87 15.1903L19.39 8.67026C19.68 8.38026 20.16 8.38026 20.45 8.67026C20.74 8.96026 20.74 9.44026 20.45 9.73026L13.93 16.2503C13.4 16.7803 12.7 17.0503 12 17.0503Z"
                                fill="#a1a3a8"
                              />
                            </svg>
                          </div>
                        </div>
                        </div>
                      {border ? (
                        <Subcategory
                          border={border}
                          data={item.brands}
                          form={true}
                        />
                      ) : null}
                    </div>
                   
                  ) : item.sellers ? (
                    <div
                      className="w-full flex items-center justify-start cursor-pointer"
                      
                    >
                      <div
                        className={`w-full flex flex-col items-start py-[12px]      `}
                      >
                        <div className="flex justify-between items-center w-full  " onClick={() => setSeller(!seller)}>
                          <h3 className="flex items-center text-[1rem] font-bold leading-[2]">
                            {item.name}
                          </h3>
                          <div className="flex">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 17.0503C11.3 17.0503 10.6 16.7803 10.07 16.2503L3.55002 9.73026C3.26002 9.44026 3.26002 8.96026 3.55002 8.67026C3.84002 8.38026 4.32002 8.38026 4.61002 8.67026L11.13 15.1903C11.61 15.6703 12.39 15.6703 12.87 15.1903L19.39 8.67026C19.68 8.38026 20.16 8.38026 20.45 8.67026C20.74 8.96026 20.74 9.44026 20.45 9.73026L13.93 16.2503C13.4 16.7803 12.7 17.0503 12 17.0503Z"
                                fill="#a1a3a8"
                              />
                            </svg>
                          </div>
                        </div>
                        {seller ? (
                          <Subcategory
                            border={border}
                            data={item.sellers}
                            form={false}
                            seller={seller}
                          />
                        ) : null}
                      </div>
                    </div>
                  ) : (
                    <div className={`w-full `}>
                      <div className="py-[12px] w-full border-b-[1px] border-[#f0f0f1]">
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor={item.name}
                            className="flex w-full items-center justify-between"
                          >
                            <div className="flex items-center">
                              <h4 className="flex items-center justify-start text-[.9rem] font-bold leading-[2]">
                                {item.name}
                              </h4>
                              {item.icon ? (
                                <span className="ms-[8px]">
                                  <div className="w-[18px] h-[18px]">
                                    <img
                                      src="../../../../../../public/Image/Incredibleoffers/filters/262c38c0e4990522af759e0016a287508bbc84f6_1684761217.png"
                                      alt=""
                                    />
                                  </div>
                                </span>
                              ) : null}
                            </div>
                            <input
                              type="checkbox"
                              id={item.name}
                              className={`${style.button}`}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {/* end item filter */}
        </div>
      </section>
    </>
  );
};

export default Filters;
