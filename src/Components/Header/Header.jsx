import { Link } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import style from "./Header.module.css";
import Submenu from "./Submenu/Submenu";

const Header = () => {
  return (
    <>
      {/* HEADER */}
      <div className="w-full max-w-[1528px] sticky top-0 lg:fixed z-[99] bg-[#FFFFFF] mx-auto ">
        
          
            <div className=" h-[68px] px-[16px] ">
              <div className=" py-[12px]  flex items-center lg:justify-between">
                <div className="w-full h-[44px] flex items-center ">
                  <Link to={"/"} className=" hidden lg:flex h-[30px] me-[20px]">
                    <img
                      src="../../../public/Image/Header/full-horizontal.svg"
                      className=" h-[30px]"
                      alt=""
                    />
                  </Link>
                      <div className="w-full lg:max-w-[600px] h-[44px]  bg-[#F0F0F1] rounded-[8px] flex items-center justify-start">
                        <div className="w-full lg:max-w-[600px] relative h-[36px] flex items-center justify-start ">
                          <label htmlFor="search" className="cursor-pointer py-[9px]">
                            <div className="w-[24px] h-[24px] ms-[16px]">
                              <img
                                src="../../../public/Icons/search-normal.svg"
                                alt=""
                              />
                            </div>
                          </label>
                          <input
                            type="text"
                            placeholder="جستجو در"
                            id="search"
                            className="bg-inherit flex border-none outline-none  w-full py-[8px] rounded-[8px] placeholder:ps-[12px] placeholder:text-[.7rem] "
                          />
                          <img src="../../../public/Image/Header/typography.svg" className="lg:hidden absolute flex w-[65px] right-[100px]" alt="" />
                    </div>
                  </div>
                </div>
                <div className=" hidden h-[44px] lg:flex items-center  justify-center  ">
                  <Link className=" h-[40px] flex text-[0.8rem] font-bold">
                    <div className=" h-[40px] py-[8px] px-[16px] border-[0.8px] flex justify-center items-center border-[#e0e0e2] rounded-[8px]">
                      <div className="w-[100.81px] h-[26.04px] flex justify-center items-center">
                        <div className="w-[24px] h-[24px] me-[8px] flex items-center">
                          <img
                            src="../../../public/Icons/login.svg"
                            className="rotate-180"
                            alt=""
                          />
                        </div>
                        <div className="w-[87px] h-[21px] ">
                          <p>ورود | ثبت نام</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <span className="w-[1px] h-[24px] mx-[12px] bg-[#e0e0e2]"></span>
                  <div className=" h-[40px] flex justify-center items-center">
                    <Link className="p-[8px] felx justify-center items-center">
                      <div className=" h-[24px] flex items-center justify-center">
                        <BsCart className=" w-[20px] h-[20px]   " />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Nav */}
            <nav
              className={`hidden relative h-[40px] lg:flex lg:justify-between items-center ${style.shadowbottom} bg-white `}
            >
              <div className="h-[40px] px-[16px] flex grow justify-between items-center ">
                <div className=" h-[40px] flex items-center justify-center  relative ">
                  <div className={` h-[40px] flex items-center ${style.dastebandi} dastebandies`}>
                    <div className={` h-[30.1px] flex items-center cursor-pointer `}>
                      <div className="w-[20px] h-[20px] me-[4px] flex items-center justify-center">
                        <img src="../../../public/Icons/menu.svg" alt="" />
                      </div>
                      <p className=" text-[#3f4064] text-sm">دسته بندی کالاها</p>
                      <span className="mt-[4px] ms-[20px] relative top-[8px]"></span>
                    </div>
                    <Submenu/>
                  </div>

                  <div
                    className={` h-[40px] flex ${style.bfr} items-center justify-center `}
                  >
                    <div className=" h-[40px] px-[12px] flex items-center justify-center ">
                      <Link
                        className="w-[91.9px] h-[26.04px] flex items-center justify-center"
                        to={"/Incredible-offers"}
                      >
                        <div className="w-[18px] h-[18px] me-[4px] flex items-center">
                          <img
                            src="../../../public/Icons/discount-circle.svg"
                            className="w-[15px] h-[15px]"
                            alt=""
                          />
                        </div>
                        <p className="text-[.7rem] text-[#62666d] ">
                          شگفت انگیز ها
                        </p>
                      </Link>
                    </div>
                    <div className=" h-[40px] px-[12px] flex items-center justify-center">
                      <Link className="w-[77.64px] h-[26.04px] flex items-center justify-center">
                        <div className="w-[18px] h-[18px] me-[4px] flex items-center">
                          <img src="../../../public/Icons/bag.svg" alt="" />
                        </div>
                        <p className="text-[.7rem] text-[#62666d]">
                          سوپر مارکت
                        </p>
                      </Link>
                    </div>
                    <div className=" h-[40px] flex px-[12px] items-center justify-center">
                      <Link className="w-[77.04px] h-[26.04px] flex items-center justify-center">
                        <div className="w-[18px] h-[18px] flex items-center me-[4px]">
                          <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22 9.50024H2C1.59 9.50024 1.25 9.16024 1.25 8.75024C1.25 8.34024 1.59 8.00024 2 8.00024H22C22.41 8.00024 22.75 8.34024 22.75 8.75024C22.75 9.16024 22.41 9.50024 22 9.50024Z"
                              fill="#a1a3a8"
                            />
                            <path
                              d="M8 17.5002H6C5.59 17.5002 5.25 17.1602 5.25 16.7502C5.25 16.3402 5.59 16.0002 6 16.0002H8C8.41 16.0002 8.75 16.3402 8.75 16.7502C8.75 17.1602 8.41 17.5002 8 17.5002Z"
                              fill="#a1a3a8"
                            />
                            <path
                              d="M14.5 17.5002H10.5C10.09 17.5002 9.75 17.1602 9.75 16.7502C9.75 16.3402 10.09 16.0002 10.5 16.0002H14.5C14.91 16.0002 15.25 16.3402 15.25 16.7502C15.25 17.1602 14.91 17.5002 14.5 17.5002Z"
                              fill="#a1a3a8"
                            />
                            <path
                              d="M17.56 21.5002H6.44C2.46 21.5002 1.25 20.3002 1.25 16.3602V8.14024C1.25 4.20024 2.46 3.00024 6.44 3.00024H17.55C21.53 3.00024 22.74 4.20024 22.74 8.14024V16.3502C22.75 20.3002 21.54 21.5002 17.56 21.5002ZM6.44 4.50024C3.3 4.50024 2.75 5.04024 2.75 8.14024V16.3502C2.75 19.4502 3.3 19.9902 6.44 19.9902H17.55C20.69 19.9902 21.24 19.4502 21.24 16.3502V8.14024C21.24 5.04024 20.69 4.50024 17.55 4.50024H6.44Z"
                              fill="#a1a3a8"
                            />
                          </svg>
                        </div>
                        <p className="text-[.7rem] text-[#62666d]">کارت هدیه</p>
                      </Link>
                    </div>
                    <div className=" h-[40px] flex px-[12px] items-center justify-center">
                      <Link className="w-[96.88px] h-[26.04px] flex items-center justify-center">
                        <div className="w-[18px] h-[18px] flex items-center me-[4px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.76 22.9703C14.59 22.9703 14.4299 22.9303 14.2999 22.8503C13.8499 22.5603 11.61 21.0103 11.2 18.6503C10.98 17.3403 11.3499 16.0403 12.3099 14.8003C15.0999 11.1903 15.4099 10.1403 15.4199 10.1003C15.4599 9.82029 15.6499 9.62029 15.9199 9.53029C16.1899 9.44029 16.4699 9.53029 16.6799 9.73029C18.9599 11.9403 20 14.2203 19.76 16.5103C19.38 20.1003 15.9 22.4503 15.21 22.8803C15.09 22.9303 14.92 22.9703 14.76 22.9703ZM16.3799 11.5603C15.9199 12.3703 15.0799 13.6703 13.4999 15.7003C12.7899 16.6103 12.5299 17.4903 12.6799 18.3803C12.9199 19.7703 14.14 20.8603 14.77 21.3303C15.76 20.6403 18 18.8203 18.26 16.3103C18.43 14.7703 17.7999 13.1803 16.3799 11.5603Z"
                              fill="#a1a3a8"
                            />
                            <path
                              d="M10.2801 22.9801C10.0201 22.9801 9.76008 22.9101 9.57008 22.8601C7.36008 22.2301 5.36009 20.2101 4.58009 17.8401C3.78009 15.4101 4.27004 12.8701 5.97004 10.6801C9.07004 6.62013 10.1001 3.35013 10.3401 2.45013C10.4501 2.02013 10.7701 1.69013 11.2101 1.56013C11.6601 1.44013 12.1501 1.57013 12.4901 1.91013C12.5201 1.93013 12.5401 1.96013 12.5601 1.99013C13.5001 3.25013 14.5101 5.50013 14.5101 8.04013C14.5101 9.78013 13.2901 11.3601 12.1101 12.8801C10.8601 14.5001 9.5701 16.1701 9.7101 17.9801C9.8401 19.3201 10.4201 20.3401 10.8101 21.0201C11.1401 21.5901 11.4501 22.1301 11.0601 22.6401C10.8501 22.9001 10.5701 22.9801 10.2801 22.9801ZM9.75007 22.2201H9.76008H9.75007ZM11.6501 3.31013C11.1901 4.82013 9.99005 7.88013 7.16005 11.6001C5.39005 13.8901 5.56008 16.0101 6.01008 17.3801C6.54008 18.9901 7.74009 20.3901 9.14009 21.0901C8.76009 20.3501 8.34004 19.3501 8.22004 18.1101C8.04004 15.7101 9.57007 13.7201 10.9301 11.9601C12.0001 10.5701 13.0101 9.26013 13.0101 8.03013C13.0101 6.13013 12.3301 4.39013 11.6501 3.31013ZM11.7901 2.82013C11.7901 2.82013 11.7901 2.83013 11.7901 2.82013C11.7901 2.82013 11.7901 2.83013 11.7901 2.82013Z"
                              fill="#a1a3a8"
                            />
                          </svg>
                        </div>
                        <p className="text-[.6rem] text-[#62666d]">
                          پر فروش ترین ها
                        </p>
                      </Link>
                    </div>
                    <div className="hidden h-[40px] xl:flex px-[12px] items-center justify-center">
                      <Link className="w-[135.88px] h-[26.04px] flex items-center justify-center">
                        <div className="w-[18px] h-[18px] flex items-center me-[4px]">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15 23.0002H9C3.57 23.0002 1.25 20.6802 1.25 15.2502V9.25024C1.25 3.82024 3.57 1.50024 9 1.50024H15C20.43 1.50024 22.75 3.82024 22.75 9.25024V15.2502C22.75 20.6802 20.43 23.0002 15 23.0002ZM9 3.00024C4.39 3.00024 2.75 4.64024 2.75 9.25024V15.2502C2.75 19.8602 4.39 21.5002 9 21.5002H15C19.61 21.5002 21.25 19.8602 21.25 15.2502V9.25024C21.25 4.64024 19.61 3.00024 15 3.00024H9Z"
                              fill="#a1a3a8"
                            />
                            <path
                              d="M8.56976 16.2701C8.37976 16.2701 8.18977 16.2001 8.03977 16.0501C7.74977 15.7601 7.74977 15.2801 8.03977 14.9901L14.5898 8.44016C14.8798 8.15016 15.3598 8.15016 15.6498 8.44016C15.9398 8.73016 15.9398 9.21015 15.6498 9.50015L9.09976 16.0501C8.94976 16.2001 8.75976 16.2701 8.56976 16.2701Z"
                              fill="#a1a3a8"
                            />
                            <path
                              d="M8.98001 11.3604C7.89001 11.3604 7 10.4704 7 9.3804C7 8.2904 7.89001 7.40039 8.98001 7.40039C10.07 7.40039 10.96 8.2904 10.96 9.3804C10.96 10.4704 10.07 11.3604 8.98001 11.3604ZM8.98001 8.9104C8.72001 8.9104 8.5 9.12041 8.5 9.39041C8.5 9.66041 8.71001 9.87039 8.98001 9.87039C9.25001 9.87039 9.45999 9.66041 9.45999 9.39041C9.45999 9.12041 9.24001 8.9104 8.98001 8.9104Z"
                              fill="#a1a3a8"
                            />
                            <path
                              d="M15.52 17.0904C14.43 17.0904 13.54 16.2004 13.54 15.1104C13.54 14.0204 14.43 13.1304 15.52 13.1304C16.61 13.1304 17.5 14.0204 17.5 15.1104C17.5 16.2004 16.61 17.0904 15.52 17.0904ZM15.52 14.6404C15.26 14.6404 15.04 14.8504 15.04 15.1204C15.04 15.3904 15.25 15.6004 15.52 15.6004C15.79 15.6004 16 15.3904 16 15.1204C16 14.8504 15.79 14.6404 15.52 14.6404Z"
                              fill="#a1a3a8"
                            />
                          </svg>
                        </div>
                        <p className="text-[.7rem] text-[#62666d]">
                          تخفیف ها و پشینهادها
                        </p>
                      </Link>
                    </div>
                  </div>
                  <div
                    className={` h-[40px] flex items-center ${style.bfr1} justify-center`}
                  >
                    <div className="w-[89.31px] h-[40px] px-[12px] flex items-center justify-center">
                      <Link className="w-[65.31px] h-[26.04px] text-[.7rem] flex items-center text-[#62666d]">
                        سوالی دارید؟
                      </Link>
                    </div>
                    <div className="w-[131.48px] h-[40px] px-[12px] flex items-center justify-center">
                      <Link className="w-[107.48px] h-[26.04px] flex items-center text-[.7rem] text-[#62666d]">
                        در دیجیکالا بفروشید!
                      </Link>
                    </div>
                  </div>
                </div>
                {/* country */}
                <div className="w-[173.13px] h-[40px] flex items-center justify-end mb-[4px]">
                  <div className="w-[20px] h-[20px] me-[8px] flex items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.9999 14.4202C9.86988 14.4202 8.12988 12.6902 8.12988 10.5502C8.12988 8.41019 9.86988 6.69019 11.9999 6.69019C14.1299 6.69019 15.8699 8.42019 15.8699 10.5602C15.8699 12.7002 14.1299 14.4202 11.9999 14.4202ZM11.9999 8.19019C10.6999 8.19019 9.62988 9.25019 9.62988 10.5602C9.62988 11.8702 10.6899 12.9302 11.9999 12.9302C13.3099 12.9302 14.3699 11.8702 14.3699 10.5602C14.3699 9.25019 13.2999 8.19019 11.9999 8.19019Z"
                        fill="black"
                      />
                      <path
                        d="M11.9999 23.0102C10.5199 23.0102 9.02993 22.4502 7.86993 21.3402C4.91993 18.5002 1.65993 13.9702 2.88993 8.58024C3.99993 3.69024 8.26993 1.50024 11.9999 1.50024C11.9999 1.50024 11.9999 1.50024 12.0099 1.50024C15.7399 1.50024 20.0099 3.69024 21.1199 8.59024C22.3399 13.9802 19.0799 18.5002 16.1299 21.3402C14.9699 22.4502 13.4799 23.0102 11.9999 23.0102ZM11.9999 3.00024C9.08993 3.00024 5.34993 4.55024 4.35993 8.91024C3.27993 13.6202 6.23993 17.6802 8.91993 20.2502C10.6499 21.9202 13.3599 21.9202 15.0899 20.2502C17.7599 17.6802 20.7199 13.6202 19.6599 8.91024C18.6599 4.55024 14.9099 3.00024 11.9999 3.00024Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="w-[145.13px] h-[26.04px] flex items-center">
                      <p className="text-[.75rem] text-[#62666d]">
                        لطفا شهر خود را انتخاب کنید
                      </p>
                    </div>
                  </div>
                </div>
                {/* end country */}
              </div>
            </nav>
            {/* End Nav */}
          </div>
        
      
      {/* END HEADER */}
    </>
  );
};

export default Header;
