import { Link } from "react-router-dom";
import style from "./Amazing.module.css"
const Amazingdeals = ({inc}) => {
    return ( <>
    <div className={`w-full ${inc?"max-w-[1496px]":"max-w-[1336px]"} mx-auto px-[20px] lg:px-[16px] 2xl:px-0`}>
            <Link className="w-full px-[20px] lg:px-[40px] pt-[16px] pb-[12px]  flex flex-col lg:flex-row  justify-between rounded-[16px] bg-[#f0f0f1] relative">
            <div className={`absolute top-0 left-0 bottom-0 right-0 ${style.bgimg} z-[1] `}></div>
            <div className={`absolute ${style.bggradient} top-0 left-0 right-0 bottom-0 rounded-[16px] opacity-[.3]`}></div>
            <div className=" flex-col items-start lg:flex lg:flex-row lg:items-center gap-2 lg:gap-0">
                <div className="  flex items-center">
                    <div className="w-[66px] ">
                        <img src="../../../public/Image/Amazing/fresh.webp" alt="" />
                    </div>
                    <div className="w-[250px] h-[28px] mx-[20px]">
                        <img src="../../../public/Image/Amazing/fresh-incredible-offer.svg" alt="" />
                    </div>
                </div>
                <div className="w-[111.65px] h-[28px] mx-[8px] lg:mx-0 px-[12px] flex items-center justify-center bg-[#029a49] border-[1px] border-[#cb177900] rounded-[10rem]">
                    <p className="text-white text-[.9rem] font-bold">تا ۵۵٪ تخفیف</p>
                </div>
            </div>
            <div className=" flex items-center justify-between lg:justify-start lg:ms-[16px] mt-[16px] lg:[mt-0]">
                <div className="max-h-[74px] flex items-center flex-nowrap lg:flex-wrap lg:justify-end overflow-hidden ">
                    <Link className="relative h-[74px] p-[8px] me-[8px] lg:mb-[16px] flex items-center justify-center rounded-full bg-white z-[1]">
                    <div className="w-[58px] h-[58px] rounded-full overflow-hidden">
                        <img src="../../../public/Image/Amazing/zaferan.webp" alt="" />
                    </div>
                    <div className="w-[34px] h-[20px] flex items-center justify-center px-[4px] text-white rounded-[16px] bg-[#d32f2f] absolute bottom-0 right-0">
                        <span className="text-[.7rem] font-bold">55%</span>
                    </div>
                    </Link>
                    <Link className="relative h-[74px] p-[8px] me-[8px] lg:mb-[16px] flex items-center justify-center rounded-full bg-white z-[1]">
                    <div className="w-[58px] h-[58px] rounded-full overflow-hidden">
                        <img src="../../../public/Image/Amazing/panirpitza.webp" alt="" />
                    </div>
                    <div className="w-[34px] h-[20px] flex items-center justify-center px-[4px] text-white rounded-[16px] bg-[#d32f2f] absolute bottom-0 right-0">
                        <span className="text-[.7rem] font-bold">46%</span>
                    </div>
                    </Link>
                    <Link className="relative h-[74px] p-[8px] me-[8px] lg:mb-[16px] flex items-center justify-center rounded-full bg-white z-[1]">
                    <div className="w-[58px] h-[58px] rounded-full overflow-hidden">
                        <img src="../../../public/Image/Amazing/sosis.webp" alt="" />
                    </div>
                    <div className="w-[34px] h-[20px] flex items-center justify-center px-[4px] text-white rounded-[16px] bg-[#d32f2f] absolute bottom-0 right-0">
                        <span className="text-[.7rem] font-bold">43%</span>
                    </div>
                    </Link>
                    <Link className="relative hidden h-[74px] p-[8px] me-[8px] lg:mb-[16px] lg:flex items-center justify-center rounded-full bg-white z-[1]">
                    <div className="w-[58px] h-[58px] rounded-full overflow-hidden">
                        <img src="../../../public/Image/Amazing/tokhmekdo.webp" alt="" />
                    </div>
                    <div className="w-[34px] h-[20px] flex items-center justify-center px-[4px] text-white rounded-[16px] bg-[#d32f2f] absolute bottom-0 right-0">
                        <span className="text-[.7rem] font-bold">40%</span>
                    </div>
                    </Link>
                    <Link className="relative hidden h-[74px] p-[8px] me-[8px] lg:mb-[16px] lg:flex items-center justify-center rounded-full bg-white z-[1]">
                    <div className="w-[58px] h-[58px] rounded-full overflow-hidden">
                        <img src="../../../public/Image/Amazing/lobiachiti.webp" alt="" />
                    </div>
                    <div className="w-[34px] h-[20px] flex items-center justify-center px-[4px] text-white rounded-[16px] bg-[#d32f2f] absolute bottom-0 right-0">
                        <span className="text-[.7rem] font-bold">40%</span>
                    </div>
                    </Link>
                    <Link className="relative hidden h-[74px] p-[8px] me-[8px] lg:mb-[16px] lg:flex items-center justify-center rounded-full bg-white z-[1]">
                    <div className="w-[58px] h-[58px] rounded-full overflow-hidden">
                        <img src="../../../public/Image/Amazing/kalbas.webp" alt="" />
                    </div>
                    <div className="w-[34px] h-[20px] flex items-center justify-center px-[4px] text-white rounded-[16px] bg-[#d32f2f] absolute bottom-0 right-0">
                        <span className="text-[.7rem] font-bold">40%</span>
                    </div>
                    </Link>
                </div>
                <div className=" p-[12px] lg:px-[20px] lg:py-[12px] flex items-center justify-center rounded-full lg:rounded-[9999px] text-[#029a49] bg-white z-[1]">
                    <span className="cursor-pointer text-[.8rem] font-bold hidden lg:flex">بیش از ۷۰ کالا</span>
                    <div className="flex ms-0 lg:ms-[8px] font-bold items-center  ">
                    <svg  width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.56994 19.0702C9.37994 19.0702 9.18994 19.0002 9.03994 18.8502L2.96994 12.7802C2.67994 12.4902 2.67994 12.0102 2.96994 11.7202L9.03994 5.65024C9.32994 5.36024 9.80994 5.36024 10.0999 5.65024C10.3899 5.94024 10.3899 6.42024 10.0999 6.71024L4.55994 12.2502L10.0999 17.7902C10.3899 18.0802 10.3899 18.5602 10.0999 18.8502C9.95994 19.0002 9.75994 19.0702 9.56994 19.0702Z" fill="#029a49"/>
<path d="M20.4999 13.0002H3.66992C3.25992 13.0002 2.91992 12.6602 2.91992 12.2502C2.91992 11.8402 3.25992 11.5002 3.66992 11.5002H20.4999C20.9099 11.5002 21.2499 11.8402 21.2499 12.2502C21.2499 12.6602 20.9099 13.0002 20.4999 13.0002Z" fill="#029a49"/>
</svg>
                    </div>
                </div>
             </div>
            </Link>
        </div>
    
    </> );
}
 
export default Amazingdeals;