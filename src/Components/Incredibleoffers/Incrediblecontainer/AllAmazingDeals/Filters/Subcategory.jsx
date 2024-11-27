import { useState } from "react";
import useFetchs from "../../../../CustomHooks/useFetchs";

const Subcategory = ({ border, data , form ,seller }) => {
  const [inputbrnd, setInputbrnd] = useState(null);
  const [values, setValues] = useState(null);
  return (
    <>
      <div
        className={`overflow-y-auto pt-[4px] max-h-[360px] px-[20px] `}
      >
        {form? <form className="mb-[20px] rounded-[8px] w-full ">
          <div className="w-full flex items-center h-[3rem] justify-around px-[8px] border-[1px] border-[#e0e0e2] rounded-[8px]">
            <label
              htmlFor="searchbrand"
              className={inputbrnd >= 1 ? "hidden" : "flex"}
            >
              <div className="flex me-[8px]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 22.0002C5.85 22.0002 1.25 17.4002 1.25 11.7502C1.25 6.10024 5.85 1.50024 11.5 1.50024C17.15 1.50024 21.75 6.10024 21.75 11.7502C21.75 17.4002 17.15 22.0002 11.5 22.0002ZM11.5 3.00024C6.67 3.00024 2.75 6.93024 2.75 11.7502C2.75 16.5702 6.67 20.5002 11.5 20.5002C16.33 20.5002 20.25 16.5702 20.25 11.7502C20.25 6.93024 16.33 3.00024 11.5 3.00024Z"
                    fill="#424750"
                  />
                  <path
                    d="M21.9999 23.0002C21.8099 23.0002 21.6199 22.9302 21.4699 22.7802L19.4699 20.7802C19.1799 20.4902 19.1799 20.0102 19.4699 19.7202C19.7599 19.4302 20.2399 19.4302 20.5299 19.7202L22.5299 21.7202C22.8199 22.0102 22.8199 22.4902 22.5299 22.7802C22.3799 22.9302 22.1899 23.0002 21.9999 23.0002Z"
                    fill="#424750"
                  />
                </svg>
              </div>
            </label>
            <input
              type="text"
              id="searchbrand"
              className="w-full outline-none px-[8px] text-[1rem] text-[#3f4064]"
              placeholder="جستجو برند..."
              onChange={(e) => setInputbrnd(e.target.value.length)}
            />
            <label
              htmlFor="searchbrand"
              className={inputbrnd >= 1 ? "flex" : "hidden"}
              onClick={() => setInputbrnd(0)}
            >
              <div className="flex me-[8px]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 21.2502H10.28C8.65999 21.2502 7.10999 20.5602 6.02999 19.3702L2.49999 15.4902C0.81999 13.6502 0.81999 10.8702 2.49999 9.02024L6.02999 5.14024C7.10999 3.94024 8.65999 3.25024 10.28 3.25024H17C20.17 3.25024 22.75 5.83024 22.75 9.00024V15.5002C22.75 18.6702 20.17 21.2502 17 21.2502ZM10.28 4.75024C9.08999 4.75024 7.93999 5.26024 7.13999 6.14024L3.59999 10.0302C2.44999 11.3002 2.44999 13.2102 3.59999 14.4802L7.12999 18.3602C7.92999 19.2402 9.07999 19.7502 10.27 19.7502H17C19.34 19.7502 21.25 17.8402 21.25 15.5002V9.00024C21.25 6.66024 19.34 4.75024 17 4.75024H10.28Z"
                    fill="#292D32"
                  />
                  <path
                    d="M16 15.4702C15.81 15.4702 15.62 15.4002 15.47 15.2502L10.53 10.3002C10.24 10.0102 10.24 9.53021 10.53 9.24021C10.82 8.95021 11.3 8.95021 11.59 9.24021L16.53 14.1902C16.82 14.4802 16.82 14.9602 16.53 15.2502C16.38 15.4002 16.19 15.4702 16 15.4702Z"
                    fill="#292D32"
                  />
                  <path
                    d="M11.06 15.4702C10.87 15.4702 10.68 15.4002 10.53 15.2502C10.24 14.9602 10.24 14.4802 10.53 14.1902L15.47 9.25021C15.76 8.96021 16.24 8.96021 16.53 9.25021C16.82 9.54021 16.82 10.0202 16.53 10.3102L11.59 15.2502C11.44 15.4002 11.25 15.4702 11.06 15.4702Z"
                    fill="#292D32"
                  />
                </svg>
              </div>
            </label>
          </div>
        </form>:null}
        {data?.map((item) => {
          return (
            <div className="w-full " key={item.id}>
              <div className="flex w-full items-center justify-start ">
                <input
                  type="checkbox"
                  className="py-[4px] me-[16px] flex items-center border-black"
                  id={item.htmlfor}
                />
                <label
                  htmlFor={item.htmlfor}
                  className="flex w-full items-center justify-between py-[12px] pe-[12px]  border-b-[1px] border-[#f0f0f1]"
                >
                  <h4 className="font-bold leading-[2] text-[#3f4064] text-[1rem]">
                    {item.name}
                  </h4>
                  {item.nameEn?<h4 className="font-[400] leading-[2] text-[#81858b] text-[.8rem]">
                    {item.nameEn}
                  </h4>:null}
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Subcategory;
