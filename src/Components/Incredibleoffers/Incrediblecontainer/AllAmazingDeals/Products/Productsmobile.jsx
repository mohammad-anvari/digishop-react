import { Link } from "react-router-dom";

const Productsmobile = ({data , h , m  , s}) => {
  return (
    <>
      <div className="border-b-[1px] border-[#f0f0f1] sm:hidden" key={data.id}>
        <Link className="py-[8px] bg-white overflow-hidden flex flex-col justify-start items-stretch grow relative">
          <div>
            <div className="flex flex-col items-stretch justify-start overflow-hidden ">
              <div className="flex items-center justify-start mb-[4px] ">
                <div className="me-[4px] w-[116px] h-[14px]">
                  <img
                    src="../../../../../../public/Image/Incredibleoffers/FeaturedDeals/IncredibleOffer.svg"
                    className="w-full object-contain inline-block"
                    alt=""
                  />
                </div>
                <div className="grow">
                  <br />
                </div>
              </div>
              <div className="flex grow relative flex-row ">
                <div className="flex flex-col items-center me-[12px] ">
                    <div className="flex items-stretch flex-col relative">
                        <div className="w-[118px] h-[118px] ">
                            <img src={data.image} className="w-full inline-block object-contain " alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-stretch justify-start grow">
                    <div className="flex items-center justify-start flex-wrap mb-[4px]">
                        <br />
                    </div>
                    <div>
                        <h2 className="h-[52px] line-clamp-2 text-[.7rem] font-bold leading-[2] text-[#3f4064]">{data.title}</h2>
                    </div>
                    <div className="mb-[4px] flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex me-[4px] ">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 23.0002C6.07 23.0002 1.25 18.1802 1.25 12.2502C1.25 6.32024 6.07 1.50024 12 1.50024C17.93 1.50024 22.75 6.32024 22.75 12.2502C22.75 18.1802 17.93 23.0002 12 23.0002ZM12 3.00024C6.9 3.00024 2.75 7.15024 2.75 12.2502C2.75 17.3502 6.9 21.5002 12 21.5002C17.1 21.5002 21.25 17.3502 21.25 12.2502C21.25 7.15024 17.1 3.00024 12 3.00024Z" fill="#1028ff"/>
<path d="M15.71 16.1803C15.58 16.1803 15.45 16.1503 15.33 16.0703L12.23 14.2203C11.46 13.7603 10.89 12.7503 10.89 11.8603V7.76025C10.89 7.35025 11.23 7.01025 11.64 7.01025C12.05 7.01025 12.39 7.35025 12.39 7.76025V11.8603C12.39 12.2203 12.69 12.7503 13 12.9303L16.1 14.7803C16.46 14.9903 16.57 15.4503 16.36 15.8103C16.21 16.0503 15.96 16.1803 15.71 16.1803Z" fill="#1028ff"/>
</svg>
                            </div>
                            <p className="text-[.6rem] font-[400] leading-[2] text-[#62666d]">ارسال امروز</p>
                        </div>
                        <div className="flex items-center">
                            <p className="text-[.7rem] font-bold leading-[2] text-[#3f4064]"></p>
                            <div className="flex ms-[8px] ">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.73998 16.2502C5.84998 15.7602 5.64998 15.0602 5.29998 14.7102L2.86998 12.2802C2.10998 11.5202 1.80998 10.7102 2.02998 10.0102C2.25998 9.31024 2.96998 8.83024 4.02998 8.65024L7.14998 8.13024C7.59998 8.05024 8.14998 7.65024 8.35998 7.24024L10.08 3.79024C10.58 2.80024 11.26 2.25024 12 2.25024C12.74 2.25024 13.42 2.80024 13.92 3.79024L15.64 7.24024C15.77 7.50024 16.04 7.75024 16.33 7.92024L5.55998 18.6902C5.41998 18.8302 5.17998 18.7002 5.21998 18.5002L5.73998 16.2502Z" fill="#f9bc00"/>
<path d="M18.7 14.7103C18.34 15.0703 18.14 15.7603 18.26 16.2503L18.95 19.2603C19.24 20.5103 19.06 21.4503 18.44 21.9003C18.19 22.0803 17.89 22.1703 17.54 22.1703C17.03 22.1703 16.43 21.9803 15.77 21.5903L12.84 19.8503C12.38 19.5803 11.62 19.5803 11.16 19.8503L8.23005 21.5903C7.12005 22.2403 6.17005 22.3503 5.56005 21.9003C5.33005 21.7303 5.16005 21.5003 5.05005 21.2003L17.21 9.04026C17.67 8.58026 18.32 8.37026 18.95 8.48026L19.96 8.65026C21.02 8.83026 21.73 9.31026 21.96 10.0103C22.18 10.7103 21.88 11.5203 21.12 12.2803L18.7 14.7103Z" fill="#f9bc00"/>
</svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch pt-[4px]">
                          <div className="flex items-center justify-between">
                          <div className="w-[34px] h-[20px] px-[4px] text-white rounded-[16px] flex items-center justify-center bg-[#d32f2f]">
                                  <span className="text-[.7rem] font-bold">
                                    {data.discont}
                                  </span>
                                </div>
                                <div className="flex justify-end items-center gap-1 text-[1.1rem] font-bold text-[#3f4064] leading-[1.7]">
                                  <p>{data.price}</p>
                                  <div className="flex"></div>
                                </div>
                          </div>
                          <div className="flex items-center justify-between pe-[20px]">
                            <p className="ms-auto line-through text-[.8rem] font-[400] leading-[2] text-[#c0c2c5]">{data.lastPrice}</p>
                          </div>
                        </div>
                        <div className="mt-auto">
                                {data.sold?<div className="relative bg-[#f0f0f1] h-[4px] rounded-[8px]">
                                <div className={`absolute bg-[#ef394e] h-full left-0 top-0   rounded-[8px]`} style={{width:data.sold+"%"}}></div>
                              </div>:null}
                              <div className="flex justify-between items-center pt-[4px]">
                              <div>
                                  <span className="me-[4px] text-[#ef394e] text-[.7rem]">
                                    {data.sold?`${data.sold}%`:null}
                                  </span>
                                  <span className="text-[.7rem] text-[#81858b]">
                                   {data.sold?" فروش رفته":null}
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
        </Link>
      </div>
    </>
  );
};

export default Productsmobile;
