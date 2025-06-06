import { useState } from "react";
import { Link } from "react-router-dom";
import style from "../Header/Header.module.css";
const Bottomnav = ({ icones }) => {
  const [home, setHome] = useState(icones ? true : false);
  const [category, setCategory] = useState(false);
  const [shopcard, setShopcard] = useState(false);
  const [magnet, setMagnet] = useState(false);
  const [user, setUser] = useState(false);

  return (
    <>
      <div
        className={`lg:hidden w-full flex items-center justify-center fixed z-50 bottom-0 bg-white ${style.shadowtop}`}
      >
        <div className="w-full flex items-center justify-center flex-row">
          <Link
            className="w-[100%] py-[4px] flex flex-col items-center justify-center"
            onClick={() => {
              setHome(true), setCategory(false);
              setShopcard(false);
              setMagnet(false);
              setUser(false);
            }}
            to={"/"}
          >
            <div className="flex">
              {home ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.14373 21.0324V17.9655C9.14372 17.1883 9.77567 16.557 10.5584 16.5521H13.4326C14.2189 16.5521 14.8563 17.1849 14.8563 17.9655V21.0235C14.8562 21.6975 15.404 22.2453 16.0829 22.2502H18.0438C18.9596 22.2526 19.8388 21.893 20.4872 21.2509C21.1356 20.6089 21.5 19.737 21.5 18.8278V10.1161C21.5 9.38163 21.1721 8.68496 20.6046 8.21374L13.943 2.92451C12.7785 1.99937 11.1154 2.02925 9.98539 2.99563L3.46701 8.21374C2.87274 8.67107 2.51755 9.36981 2.5 10.1161V18.8189C2.5 20.714 4.04738 22.2502 5.95617 22.2502H7.87229C8.19917 22.2526 8.51349 22.1253 8.74547 21.8967C8.97746 21.668 9.10793 21.3569 9.10792 21.0324H9.14373Z"
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
                  <g id="Iconly/Light-outline/Home">
                    <g id="Home">
                      <path
                        id="Home_2"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.3395 7.9096C21.0095 8.4286 21.4205 9.1996 21.4905 10.0386L21.5005 10.2396V18.3486C21.5005 20.4386 19.8495 22.1386 17.7805 22.2486H15.7905C14.8395 22.2296 14.0705 21.4896 14.0005 20.5596L13.9905 20.4186V17.5596C13.9905 17.2486 13.7595 16.9896 13.4505 16.9386L13.3605 16.9286H10.6895C10.3705 16.9386 10.1105 17.1686 10.0705 17.4686L10.0605 17.5596V20.4096C10.0605 20.4686 10.0495 20.5386 10.0405 20.5886L10.0305 20.6096L10.0195 20.6786C9.90049 21.5296 9.20049 22.1786 8.33049 22.2396L8.20049 22.2486H6.41049C4.32049 22.2486 2.61049 20.6096 2.50049 18.5486V10.2396C2.50949 9.3886 2.88049 8.5986 3.50049 8.0486L9.73049 3.0386C11.0005 2.0296 12.7805 1.9896 14.0895 2.9186L14.2505 3.0386L20.3395 7.9096ZM20.0995 18.5086L20.1105 18.3486V10.2486C20.0995 9.8196 19.9205 9.4186 19.6105 9.1196L19.4805 9.0086L13.3805 4.1286C12.6205 3.5186 11.5405 3.4896 10.7405 4.0186L10.5895 4.1286L4.50949 9.0296C4.16049 9.2886 3.95049 9.6786 3.90049 10.0886L3.88949 10.2486V18.3486C3.88949 19.6786 4.92949 20.7686 6.25049 20.8486H8.20049C8.42049 20.8486 8.61049 20.6996 8.63949 20.4896L8.66049 20.3096L8.67049 20.2586V17.5596C8.67049 16.4896 9.49049 15.6196 10.5405 15.5386H13.3605C14.4295 15.5386 15.2995 16.3596 15.3805 17.4096V20.4186C15.3805 20.6286 15.5305 20.8096 15.7305 20.8486H17.5895C18.9295 20.8486 20.0195 19.8196 20.0995 18.5086Z"
                        fill="#a1a3a8"
                      />
                    </g>
                  </g>
                </svg>
              )}
            </div>
            <p
              className={`${
                home ? "text-[#0c0c0c]" : "text-[#81858b]"
              } font-bold text-[.7rem]`}
            >
              خانه
            </p>
          </Link>
          <Link
            className="w-[100%] py-[4px] flex flex-col items-center justify-center"
            onClick={() => {
              setCategory(true);
              setHome(false);
              setShopcard(false);
              setMagnet(false);
              setUser(false);
            }}
          >
            <div className="flex">
              {category ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.24 2.25024H5.34C3.15 2.25024 2 3.40024 2 5.58024V7.48024C2 9.66024 3.15 10.8102 5.33 10.8102H7.23C9.41 10.8102 10.56 9.66024 10.56 7.48024V5.58024C10.57 3.40024 9.42 2.25024 7.24 2.25024Z"
                    fill="#424750"
                  />
                  <path
                    d="M18.67 2.25024H16.77C14.59 2.25024 13.44 3.40024 13.44 5.58024V7.48024C13.44 9.66024 14.59 10.8102 16.77 10.8102H18.67C20.85 10.8102 22 9.66024 22 7.48024V5.58024C22 3.40024 20.85 2.25024 18.67 2.25024Z"
                    fill="#424750"
                  />
                  <path
                    d="M18.67 13.6802H16.77C14.59 13.6802 13.44 14.8302 13.44 17.0102V18.9102C13.44 21.0902 14.59 22.2402 16.77 22.2402H18.67C20.85 22.2402 22 21.0902 22 18.9102V17.0102C22 14.8302 20.85 13.6802 18.67 13.6802Z"
                    fill="#424750"
                  />
                  <path
                    d="M7.24 13.6802H5.34C3.15 13.6802 2 14.8302 2 17.0102V18.9102C2 21.1002 3.15 22.2502 5.33 22.2502H7.23C9.41 22.2502 10.56 21.1002 10.56 18.9202V17.0202C10.57 14.8302 9.42 13.6802 7.24 13.6802Z"
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
                    d="M7 11.0002H5C2.58 11.0002 1.25 9.67024 1.25 7.25024V5.25024C1.25 2.83024 2.58 1.50024 5 1.50024H7C9.42 1.50024 10.75 2.83024 10.75 5.25024V7.25024C10.75 9.67024 9.42 11.0002 7 11.0002ZM5 3.00024C3.42 3.00024 2.75 3.67024 2.75 5.25024V7.25024C2.75 8.83024 3.42 9.50024 5 9.50024H7C8.58 9.50024 9.25 8.83024 9.25 7.25024V5.25024C9.25 3.67024 8.58 3.00024 7 3.00024H5Z"
                    fill="#a1a3a8"
                  />
                  <path
                    d="M19 11.0002H17C14.58 11.0002 13.25 9.67024 13.25 7.25024V5.25024C13.25 2.83024 14.58 1.50024 17 1.50024H19C21.42 1.50024 22.75 2.83024 22.75 5.25024V7.25024C22.75 9.67024 21.42 11.0002 19 11.0002ZM17 3.00024C15.42 3.00024 14.75 3.67024 14.75 5.25024V7.25024C14.75 8.83024 15.42 9.50024 17 9.50024H19C20.58 9.50024 21.25 8.83024 21.25 7.25024V5.25024C21.25 3.67024 20.58 3.00024 19 3.00024H17Z"
                    fill="#a1a3a8"
                  />
                  <path
                    d="M19 23.0002H17C14.58 23.0002 13.25 21.6702 13.25 19.2502V17.2502C13.25 14.8302 14.58 13.5002 17 13.5002H19C21.42 13.5002 22.75 14.8302 22.75 17.2502V19.2502C22.75 21.6702 21.42 23.0002 19 23.0002ZM17 15.0002C15.42 15.0002 14.75 15.6702 14.75 17.2502V19.2502C14.75 20.8302 15.42 21.5002 17 21.5002H19C20.58 21.5002 21.25 20.8302 21.25 19.2502V17.2502C21.25 15.6702 20.58 15.0002 19 15.0002H17Z"
                    fill="#a1a3a8"
                  />
                  <path
                    d="M7 23.0002H5C2.58 23.0002 1.25 21.6702 1.25 19.2502V17.2502C1.25 14.8302 2.58 13.5002 5 13.5002H7C9.42 13.5002 10.75 14.8302 10.75 17.2502V19.2502C10.75 21.6702 9.42 23.0002 7 23.0002ZM5 15.0002C3.42 15.0002 2.75 15.6702 2.75 17.2502V19.2502C2.75 20.8302 3.42 21.5002 5 21.5002H7C8.58 21.5002 9.25 20.8302 9.25 19.2502V17.2502C9.25 15.6702 8.58 15.0002 7 15.0002H5Z"
                    fill="#a1a3a8"
                  />
                </svg>
              )}
            </div>
            <p
              className={`${
                category ? "text-[#0c0c0c]" : "text-[#81858b]"
              } font-bold text-[.7rem]`}
            >
              دسته بندی
            </p>
          </Link>
          <Link
            className="w-[100%] py-[4px] flex flex-col items-center justify-center"
            onClick={() => {
              setShopcard(true);
              setCategory(false);
              setHome(false);
              setMagnet(false);
              setUser(false);
            }}
          >
            <div className="flex">
              {shopcard ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.25 22.7502C17.2165 22.7502 18 21.9667 18 21.0002C18 20.0337 17.2165 19.2502 16.25 19.2502C15.2835 19.2502 14.5 20.0337 14.5 21.0002C14.5 21.9667 15.2835 22.7502 16.25 22.7502Z"
                    fill="#424750"
                  />
                  <path
                    d="M8.25 22.7502C9.2165 22.7502 10 21.9667 10 21.0002C10 20.0337 9.2165 19.2502 8.25 19.2502C7.2835 19.2502 6.5 20.0337 6.5 21.0002C6.5 21.9667 7.2835 22.7502 8.25 22.7502Z"
                    fill="#424750"
                  />
                  <path
                    d="M4.84 4.19024L4.64 6.64024C4.6 7.11024 4.97 7.50024 5.44 7.50024H20.75C21.17 7.50024 21.52 7.18024 21.55 6.76024C21.68 4.99024 20.33 3.55024 18.56 3.55024H6.27C6.17 3.11024 5.97 2.69024 5.66 2.34024C5.16 1.81024 4.46 1.50024 3.74 1.50024H2C1.59 1.50024 1.25 1.84024 1.25 2.25024C1.25 2.66024 1.59 3.00024 2 3.00024H3.74C4.05 3.00024 4.34 3.13024 4.55 3.35024C4.76 3.58024 4.86 3.88024 4.84 4.19024Z"
                    fill="#424750"
                  />
                  <path
                    d="M20.5101 9.00024H5.17005C4.75005 9.00024 4.41005 9.32024 4.37005 9.73024L4.01005 14.0802C3.87005 15.7902 5.21005 17.2502 6.92005 17.2502H18.0401C19.5401 17.2502 20.8601 16.0202 20.9701 14.5202L21.3001 9.85024C21.3401 9.39024 20.9801 9.00024 20.5101 9.00024Z"
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
                    d="M18.19 18.0002H7.53999C6.54999 18.0002 5.59999 17.5802 4.92999 16.8503C4.25999 16.1203 3.92 15.1402 4 14.1502L4.83 4.19025C4.86 3.88025 4.74999 3.58025 4.53999 3.35025C4.32999 3.12025 4.04 3.00024 3.73 3.00024H2C1.59 3.00024 1.25 2.66024 1.25 2.25024C1.25 1.84024 1.59 1.50024 2 1.50024H3.74001C4.47001 1.50024 5.15999 1.81024 5.64999 2.34024C5.91999 2.64024 6.12 2.99025 6.23 3.38025H18.72C19.73 3.38025 20.66 3.78024 21.34 4.50024C22.01 5.23024 22.35 6.18025 22.27 7.19025L21.73 14.6902C21.62 16.5202 20.02 18.0002 18.19 18.0002ZM6.28 4.87024L5.5 14.2702C5.45 14.8502 5.64 15.4002 6.03 15.8302C6.42 16.2602 6.95999 16.4902 7.53999 16.4902H18.19C19.23 16.4902 20.17 15.6103 20.25 14.5703L20.79 7.07025C20.83 6.48025 20.64 5.92025 20.25 5.51025C19.86 5.09025 19.32 4.86023 18.73 4.86023H6.28V4.87024Z"
                    fill="#a1a3a8"
                  />
                  <path
                    d="M16.25 23.0002C15.15 23.0002 14.25 22.1002 14.25 21.0002C14.25 19.9002 15.15 19.0002 16.25 19.0002C17.35 19.0002 18.25 19.9002 18.25 21.0002C18.25 22.1002 17.35 23.0002 16.25 23.0002ZM16.25 20.5002C15.97 20.5002 15.75 20.7202 15.75 21.0002C15.75 21.2802 15.97 21.5002 16.25 21.5002C16.53 21.5002 16.75 21.2802 16.75 21.0002C16.75 20.7202 16.53 20.5002 16.25 20.5002Z"
                    fill="#a1a3a8"
                  />
                  <path
                    d="M8.25 23.0002C7.15 23.0002 6.25 22.1002 6.25 21.0002C6.25 19.9002 7.15 19.0002 8.25 19.0002C9.35 19.0002 10.25 19.9002 10.25 21.0002C10.25 22.1002 9.35 23.0002 8.25 23.0002ZM8.25 20.5002C7.97 20.5002 7.75 20.7202 7.75 21.0002C7.75 21.2802 7.97 21.5002 8.25 21.5002C8.53 21.5002 8.75 21.2802 8.75 21.0002C8.75 20.7202 8.53 20.5002 8.25 20.5002Z"
                    fill="#a1a3a8"
                  />
                  <path
                    d="M21 9.00024H9C8.59 9.00024 8.25 8.66024 8.25 8.25024C8.25 7.84024 8.59 7.50024 9 7.50024H21C21.41 7.50024 21.75 7.84024 21.75 8.25024C21.75 8.66024 21.41 9.00024 21 9.00024Z"
                    fill="#a1a3a8"
                  />
                </svg>
              )}
            </div>
            <p
              className={`${
                shopcard ? "text-[#0c0c0c]" : "text-[#81858b]"
              } font-bold text-[.7rem]`}
            >
              سبد خرید
            </p>
          </Link>
          <Link
            className="w-[100%] py-[4px] flex flex-col items-center justify-center"
            onClick={() => {
              setMagnet(true);
              setShopcard(false);
              setCategory(false);
              setHome(false);
              setUser(false);
            }}
          >
            <div className="flex">
              {magnet ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.4 13.2003L18.62 14.5903C18.43 14.6903 18.2 14.6503 18.04 14.5003L16.17 12.6303C15.97 12.4303 15.97 12.1203 16.17 11.9203L18.07 10.0203C18.22 9.87026 18.46 9.83027 18.65 9.93027L21.4 11.3103C22.19 11.6903 22.19 12.8103 21.4 13.2003Z"
                    fill="#424750"
                  />
                  <path
                    d="M16.3 8.74021C16.61 8.89021 16.67 9.30023 16.43 9.54023L14.76 11.2102L14.05 11.9202C13.85 12.1202 13.54 12.1202 13.34 11.9202L6.19997 4.78022C5.79997 4.38022 6.26997 3.73023 6.77997 3.98023L16.3 8.74021Z"
                    fill="#424750"
                  />
                  <path
                    d="M2 20.4002V3.73027C2 3.29027 2.53 3.06025 2.85 3.37025L11.62 11.8803C11.83 12.0803 11.82 12.4102 11.61 12.6102L2.84 20.7702C2.52 21.0702 2 20.8402 2 20.4002Z"
                    fill="#424750"
                  />
                  <path
                    d="M16.2699 15.7702L6.87995 20.4702C6.36995 20.7202 5.89995 20.0702 6.29995 19.6702L13.3499 12.6202C13.5499 12.4202 13.8599 12.4202 14.0599 12.6202L16.4099 14.9702C16.6399 15.2102 16.5699 15.6202 16.2699 15.7702Z"
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
                    d="M16.89 16.2102C16.7 16.2102 16.5 16.1302 16.36 15.9902L13.17 12.8002C12.88 12.5102 12.88 12.0302 13.17 11.7402L16.39 8.52023C16.62 8.29023 16.97 8.24025 17.26 8.38025L21.75 10.6302C22.37 10.9302 22.76 11.5502 22.76 12.2502C22.76 12.9502 22.37 13.5702 21.75 13.8702L17.24 16.1302C17.12 16.1802 17 16.2102 16.89 16.2102ZM14.76 12.2702L17.03 14.5403L21.06 12.5202C21.06 12.5202 21.06 12.5202 21.07 12.5202C21.22 12.4502 21.24 12.3202 21.24 12.2502C21.24 12.1802 21.22 12.0503 21.07 11.9803L17.06 9.97025L14.76 12.2702Z"
                    fill="#a1a3a8"
                  />
                  <path
                    d="M3.07 23.0003C2.74 23.0003 2.4 22.9103 2.11 22.7203C1.57 22.3903 1.25 21.8103 1.25 21.1703V3.31027C1.25 2.68027 1.57 2.10028 2.11 1.76028C2.65 1.43028 3.31 1.39026 3.88 1.68026L17.25 8.37026C17.47 8.48026 17.62 8.68028 17.65 8.92028C17.68 9.16028 17.61 9.40028 17.44 9.57028L4.64 22.3703C4.58 22.4303 4.52 22.4703 4.44 22.5103L3.86 22.8003C3.62 22.9403 3.34 23.0003 3.07 23.0003ZM3.07 3.00027C3 3.00027 2.94 3.03026 2.9 3.05026C2.84 3.08026 2.75 3.17028 2.75 3.32028V21.1803C2.75 21.3403 2.84 21.4203 2.9 21.4503C2.96 21.4903 3.07 21.5303 3.22 21.4603L3.68 21.2303L15.65 9.26028L3.21 3.04028C3.16 3.01028 3.11 3.00027 3.07 3.00027Z"
                    fill="#a1a3a8"
                  />
                  <path
                    d="M4.11999 22.6003C3.88999 22.6003 3.65999 22.4903 3.50999 22.2903C3.28999 21.9903 3.32999 21.5803 3.58999 21.3203L13.17 11.7403C13.31 11.6003 13.5 11.5203 13.7 11.5203C13.9 11.5203 14.09 11.6003 14.23 11.7403L17.42 14.9303C17.59 15.1003 17.67 15.3403 17.63 15.5803C17.59 15.8203 17.44 16.0203 17.23 16.1303L4.46999 22.5203C4.34999 22.5703 4.23999 22.6003 4.11999 22.6003ZM13.7 13.3303L7.92999 19.1003L15.62 15.2503L13.7 13.3303Z"
                    fill="#a1a3a8"
                  />
                  <path
                    d="M13.7 13.0202C13.51 13.0202 13.32 12.9502 13.17 12.8002L3.56003 3.19022C3.27003 2.90022 3.27003 2.42022 3.56003 2.13022C3.85003 1.84022 4.33003 1.84022 4.62003 2.13022L14.23 11.7402C14.52 12.0302 14.52 12.5102 14.23 12.8002C14.09 12.9502 13.89 13.0202 13.7 13.0202Z"
                    fill="#a1a3a8"
                  />
                  <path
                    d="M16.8999 16.2303C16.7199 16.2303 16.5299 16.1603 16.3899 16.0103L16.3599 15.9803C16.0699 15.6903 16.0699 15.2103 16.3699 14.9203C16.6699 14.6303 17.1399 14.6302 17.4299 14.9302C17.7199 15.2202 17.7299 15.7203 17.4399 16.0103C17.2799 16.1603 17.0899 16.2303 16.8999 16.2303Z"
                    fill="#a1a3a8"
                  />
                </svg>
              )}
            </div>
            <p
              className={`${
                magnet ? "text-[#0c0c0c]" : "text-[#81858b]"
              } font-bold text-[.7rem]`}
            >
              مگنت
            </p>
          </Link>
          <Link
            className="w-[100%] py-[4px] flex flex-col items-center justify-center"
            onClick={() => {
              setUser(true);
              setMagnet(false);
              setShopcard(false);
              setCategory(false);
              setHome(false);
            }}
          >
            <div className="flex">
              {user ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12.2502C14.7614 12.2502 17 10.0117 17 7.25024C17 4.48882 14.7614 2.25024 12 2.25024C9.23858 2.25024 7 4.48882 7 7.25024C7 10.0117 9.23858 12.2502 12 12.2502Z"
                    fill="#424750"
                  />
                  <path
                    d="M11.9999 14.7502C6.98991 14.7502 2.90991 18.1102 2.90991 22.2502C2.90991 22.5302 3.12991 22.7502 3.40991 22.7502H20.5899C20.8699 22.7502 21.0899 22.5302 21.0899 22.2502C21.0899 18.1102 17.0099 14.7502 11.9999 14.7502Z"
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
                    d="M12 13.0002C8.83 13.0002 6.25 10.4202 6.25 7.25024C6.25 4.08024 8.83 1.50024 12 1.50024C15.17 1.50024 17.75 4.08024 17.75 7.25024C17.75 10.4202 15.17 13.0002 12 13.0002ZM12 3.00024C9.66 3.00024 7.75 4.91024 7.75 7.25024C7.75 9.59024 9.66 11.5002 12 11.5002C14.34 11.5002 16.25 9.59024 16.25 7.25024C16.25 4.91024 14.34 3.00024 12 3.00024Z"
                    fill="#a1a3a8"
                  />
                  <path
                    d="M20.5901 23.0002C20.1801 23.0002 19.8401 22.6602 19.8401 22.2502C19.8401 18.8002 16.3202 16.0002 12.0002 16.0002C7.68015 16.0002 4.16016 18.8002 4.16016 22.2502C4.16016 22.6602 3.82016 23.0002 3.41016 23.0002C3.00016 23.0002 2.66016 22.6602 2.66016 22.2502C2.66016 17.9802 6.85015 14.5002 12.0002 14.5002C17.1502 14.5002 21.3401 17.9802 21.3401 22.2502C21.3401 22.6602 21.0001 23.0002 20.5901 23.0002Z"
                    fill="#a1a3a8"
                  />
                </svg>
              )}
            </div>
            <p
              className={`${
                user ? "text-[#0c0c0c]" : "text-[#81858b]"
              } font-bold text-[.7rem]`}
            >
              دیجی&zwnj;کالای من
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Bottomnav;
