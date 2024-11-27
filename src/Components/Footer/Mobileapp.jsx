import { Link } from "react-router-dom";

const Mobileapp = () => {
    return ( <>
    <div className="w-full max-w-[1488px] h-[76px] px-[20px] py-[8px] mb-[28px] flex items-center justify-between rounded-[8px] bg-[#3c4b6d]">
        <div className="  flex items-center justify-center">
            <div className="w-[44px] h-[44px]">
                <img src="../../../public/Image/footer/mobileapp/footerlogo2.webp" alt="" />
            </div>
            <h1 className=" ms-[16px] leading-[2] text-[1.4rem] text-white font-bold "> دانلود اپلیکیشن دیجی‌کالا</h1>
        </div>
        <div className=" flex flex-row items-center justify-end grow">
            <div className=" flex items-center justify-end grow">
                <Link className=" m-[8px] flex " >
                <div className=" rounded-[4px] flex">
                    <img src="../../../public/Image/footer/mobileapp/coffe-bazzar.svg" className="rounded-[4px] w-full h-full" alt="" />
                </div>
                </Link>
                <Link className=" m-[8px] " >
                <div className="rounded-[4px]">
                    <img src="../../../public/Image/footer/mobileapp/myket.svg" className="rounded-[4px]" alt="" />
                </div>
                </Link>
                <Link className=" m-[8px] " >
                <div className=" rounded-[4px]">
                    <img src="../../../public/Image/footer/mobileapp//sib-app.svg" className="rounded-[4px]" alt="" />
                </div>
                </Link>
            </div>
            <Link className=" ms-[16px] bg-white rounded-[4px]">
            <img src="../../../public/Image/footer/mobileapp/More.svg" className="rounded-[4px] w-[44px] h-[44px]" alt="" /></Link>
        </div>
    </div>
    </> );
}
 
export default Mobileapp;