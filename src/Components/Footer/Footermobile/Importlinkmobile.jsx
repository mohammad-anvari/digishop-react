import { useState } from "react";
import { Link } from "react-router-dom";
import useFetchs from "../../CustomHooks/useFetchs";

const Importlinkmobile = () => {
  const [drop1, SetDrop1] = useState(false);
  const [drop2, SetDrop2] = useState(false);
  const [drop3, SetDrop3] = useState(false);
  const [drop4, SetDrop4] = useState(false);
  const [data] = useFetchs("http://localhost:30018/brands");
  return (
    <>
      <div>
        <div
          className="border-b-[1px] border-[#e0e0e2] text-[.8rem] font-bold leading-[2]"
          onClick={() => SetDrop1(!drop1)}
        >
          <div className="py-[12px] ">
            <div className="flex items-center grow">
              <p className="grow">با دیجی‌کالا</p>
              <div className="flex ms-[8px] ">
                {drop1 ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.92 16.0502C19.73 16.0502 19.54 15.9802 19.39 15.8302L12.87 9.3102C12.39 8.8302 11.61 8.8302 11.13 9.3102L4.61002 15.8302C4.32002 16.1202 3.84002 16.1202 3.55002 15.8302C3.26002 15.5402 3.26002 15.0602 3.55002 14.7702L10.07 8.2502C11.13 7.1902 12.86 7.1902 13.93 8.2502L20.45 14.7702C20.74 15.0602 20.74 15.5402 20.45 15.8302C20.3 15.9702 20.11 16.0502 19.92 16.0502Z"
                      fill="#424750"
                    />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 17.0503C11.3 17.0503 10.6 16.7803 10.07 16.2503L3.55002 9.73026C3.26002 9.44026 3.26002 8.96026 3.55002 8.67026C3.84002 8.38026 4.32002 8.38026 4.61002 8.67026L11.13 15.1903C11.61 15.6703 12.39 15.6703 12.87 15.1903L19.39 8.67026C19.68 8.38026 20.16 8.38026 20.45 8.67026C20.74 8.96026 20.74 9.44026 20.45 9.73026L13.93 16.2503C13.4 16.7803 12.7 17.0503 12 17.0503Z"
                      fill="#424750"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
          <div className={`${drop1 ? "flex" : "hidden"} flex-col`}>
            <Link className="mb-[12px] block text-[#424750] text-[.8rem] font-bold leading-[2]">
              اتاق خبر دیجی‌کالا
            </Link>
            <Link className="mb-[12px] block text-[#424750] text-[.8rem] font-bold leading-[2]">
              فروش در دیجی‌کالا
            </Link>
            <Link className="mb-[12px] block text-[#424750] text-[.8rem] font-bold leading-[2]">
              فرصت‌های شغلی
            </Link>
            <Link className="mb-[12px] block text-[#424750] text-[.8rem] font-bold leading-[2]">
              گزارش تخلف در دیجی‌کالا
            </Link>
            <Link className="mb-[12px] block text-[#424750] text-[.8rem] font-bold leading-[2]">
              تماس با دیجی‌کالا
            </Link>
            <Link className="mb-[12px] block text-[#424750] text-[.8rem] font-bold leading-[2]">
              درباره دیجی‌کالا
            </Link>
          </div>
        </div>
        <div
          className="border-b-[1px] border-[#e0e0e2] text-[.8rem] font-bold leading-[2]"
          onClick={() => SetDrop2(!drop2)}
        >
          <div className="py-[12px] ">
            <div className="flex items-center grow">
              <p className="grow">خدمات مشتریان</p>
              <div className="flex ms-[8px] ">
                {drop2 ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.92 16.0502C19.73 16.0502 19.54 15.9802 19.39 15.8302L12.87 9.3102C12.39 8.8302 11.61 8.8302 11.13 9.3102L4.61002 15.8302C4.32002 16.1202 3.84002 16.1202 3.55002 15.8302C3.26002 15.5402 3.26002 15.0602 3.55002 14.7702L10.07 8.2502C11.13 7.1902 12.86 7.1902 13.93 8.2502L20.45 14.7702C20.74 15.0602 20.74 15.5402 20.45 15.8302C20.3 15.9702 20.11 16.0502 19.92 16.0502Z"
                      fill="#424750"
                    />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 17.0503C11.3 17.0503 10.6 16.7803 10.07 16.2503L3.55002 9.73026C3.26002 9.44026 3.26002 8.96026 3.55002 8.67026C3.84002 8.38026 4.32002 8.38026 4.61002 8.67026L11.13 15.1903C11.61 15.6703 12.39 15.6703 12.87 15.1903L19.39 8.67026C19.68 8.38026 20.16 8.38026 20.45 8.67026C20.74 8.96026 20.74 9.44026 20.45 9.73026L13.93 16.2503C13.4 16.7803 12.7 17.0503 12 17.0503Z"
                      fill="#424750"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
          <div className={`${drop2 ? "flex" : "hidden"} flex-col`}>
            <Link className="mb-[12px] block text-[#424750] text-[.8rem] font-bold leading-[2]">
              پاسخ به پرسش‌های متداول
            </Link>
            <Link className="mb-[12px] block text-[#424750] text-[.8rem] font-bold leading-[2]">
              رویه‌های بازگرداندن کالا
            </Link>
            <Link className="mb-[12px] block text-[#424750] text-[.8rem] font-bold leading-[2]">
              شرایط استفاده
            </Link>
            <Link className="mb-[12px] block text-[#424750] text-[.8rem] font-bold leading-[2]">
              حریم خصوصی
            </Link>
            <Link className="mb-[12px] block text-[#424750] text-[.8rem] font-bold leading-[2]">
              گزارش باگ
            </Link>
          </div>
        </div>
        <div
          className="border-b-[1px] border-[#e0e0e2] text-[.8rem] font-bold leading-[2]"
          onClick={() => SetDrop3(!drop3)}
        >
          <div className="py-[12px] ">
            <div className="flex items-center grow">
              <p className="grow">راهنمای خرید از دیجی‌کالا</p>
              <div className="flex ms-[8px] ">
                {drop3 ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.92 16.0502C19.73 16.0502 19.54 15.9802 19.39 15.8302L12.87 9.3102C12.39 8.8302 11.61 8.8302 11.13 9.3102L4.61002 15.8302C4.32002 16.1202 3.84002 16.1202 3.55002 15.8302C3.26002 15.5402 3.26002 15.0602 3.55002 14.7702L10.07 8.2502C11.13 7.1902 12.86 7.1902 13.93 8.2502L20.45 14.7702C20.74 15.0602 20.74 15.5402 20.45 15.8302C20.3 15.9702 20.11 16.0502 19.92 16.0502Z"
                      fill="#424750"
                    />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 17.0503C11.3 17.0503 10.6 16.7803 10.07 16.2503L3.55002 9.73026C3.26002 9.44026 3.26002 8.96026 3.55002 8.67026C3.84002 8.38026 4.32002 8.38026 4.61002 8.67026L11.13 15.1903C11.61 15.6703 12.39 15.6703 12.87 15.1903L19.39 8.67026C19.68 8.38026 20.16 8.38026 20.45 8.67026C20.74 8.96026 20.74 9.44026 20.45 9.73026L13.93 16.2503C13.4 16.7803 12.7 17.0503 12 17.0503Z"
                      fill="#424750"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
          <div className={`${drop3 ? "flex" : "hidden"} flex-col`}>
            <Link className="mb-[12px] block text-[#424750] text-[.8rem] font-bold leading-[2]">
              نحوه ثبت سفارش
            </Link>
            <Link className="mb-[12px] block text-[#424750] text-[.8rem] font-bold leading-[2]">
              رویه ارسال سفارش
            </Link>
            <Link className="mb-[12px] block text-[#424750] text-[.8rem] font-bold leading-[2]">
              شیوه‌های پرداخت
            </Link>
          </div>
        </div>
        <div
          className="border-b-[1px] border-[#e0e0e2] text-[.8rem] font-bold leading-[2]"
          onClick={() => SetDrop4(!drop4)}
        >
          <div className="py-[12px] ">
            <div className="flex items-center grow">
              <p className="grow">شرکای تجاری</p>
              <div className="flex ms-[8px] ">
                {drop4 ? (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.92 16.0502C19.73 16.0502 19.54 15.9802 19.39 15.8302L12.87 9.3102C12.39 8.8302 11.61 8.8302 11.13 9.3102L4.61002 15.8302C4.32002 16.1202 3.84002 16.1202 3.55002 15.8302C3.26002 15.5402 3.26002 15.0602 3.55002 14.7702L10.07 8.2502C11.13 7.1902 12.86 7.1902 13.93 8.2502L20.45 14.7702C20.74 15.0602 20.74 15.5402 20.45 15.8302C20.3 15.9702 20.11 16.0502 19.92 16.0502Z"
                      fill="#424750"
                    />
                  </svg>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 17.0503C11.3 17.0503 10.6 16.7803 10.07 16.2503L3.55002 9.73026C3.26002 9.44026 3.26002 8.96026 3.55002 8.67026C3.84002 8.38026 4.32002 8.38026 4.61002 8.67026L11.13 15.1903C11.61 15.6703 12.39 15.6703 12.87 15.1903L19.39 8.67026C19.68 8.38026 20.16 8.38026 20.45 8.67026C20.74 8.96026 20.74 9.44026 20.45 9.73026L13.93 16.2503C13.4 16.7803 12.7 17.0503 12 17.0503Z"
                      fill="#424750"
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
          <div className={`w-full ${drop4 ? "block" : "hidden"}`}>
            <div className="flex items-start justify-end flex-wrap gap-[1px] bg-[#f0f0f1] ">
              {data?.map((item) => {
                return (
                  <Link className="px-[20px] flex justify-center items-center flex-col grow w-[33%] h-[80px] bg-white " key={item.id}>
                    <div className="h-[20px]">
                      <img
                        src={item.image}
                        className="w-full inline-block object-contain h-[20px]"
                        alt=""
                      />
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

export default Importlinkmobile;
