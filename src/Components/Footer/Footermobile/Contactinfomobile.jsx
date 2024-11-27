import { Link } from "react-router-dom";

const Contactinfomobile = () => {
    return ( <>
    <div className="w-full">
        <div className="w-full flex justify-between items-center py-[12px] border-b-[1px] border-[#f0f0f1]">
            <div className="flex items-center justify-center gap-2">
                <div className="flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.57001 22.9502C3.23001 22.9502 1.25001 20.9702 1.25001 18.6302V12.4702C1.20001 9.55023 2.28001 6.80023 4.30001 4.74023C6.32001 2.69023 9.03001 1.55023 11.95 1.55023C17.91 1.55023 22.75 6.40023 22.75 12.3502V18.5102C22.75 20.8902 20.81 22.8302 18.43 22.8302C16.09 22.8302 14.11 20.8502 14.11 18.5102V15.7002C14.11 14.2502 15.25 13.1102 16.7 13.1102C18.15 13.1102 19.29 14.2502 19.29 15.7002V18.7302C19.29 19.1402 18.95 19.4802 18.54 19.4802C18.13 19.4802 17.79 19.1402 17.79 18.7302V15.7002C17.79 15.0202 17.24 14.6102 16.7 14.6102C16.02 14.6102 15.61 15.1602 15.61 15.7002V18.5102C15.61 20.0402 16.9 21.3302 18.43 21.3302C19.96 21.3302 21.25 20.0402 21.25 18.5102V12.3502C21.25 7.22023 17.08 3.05023 11.95 3.05023C9.44001 3.05023 7.11001 4.02023 5.37001 5.79023C3.63001 7.56023 2.70001 9.93023 2.75001 12.4502V18.6302C2.75001 20.1602 4.04001 21.4502 5.57001 21.4502C7.10001 21.4502 8.39001 20.1602 8.39001 18.6302V15.8202C8.39001 15.1402 7.84001 14.7302 7.30001 14.7302C6.62001 14.7302 6.21001 15.2802 6.21001 15.8202V18.7402C6.21001 19.1502 5.87001 19.4902 5.46001 19.4902C5.05001 19.4902 4.71001 19.1502 4.71001 18.7402V15.8202C4.71001 14.3702 5.85001 13.2302 7.30001 13.2302C8.75001 13.2302 9.89001 14.3702 9.89001 15.8202V18.6302C9.89001 20.9702 7.91001 22.9502 5.57001 22.9502Z" fill="#424750"/>
</svg>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-[.6rem] font-[400] leading-[2]">۷ روز هفته، ۲۴ ساعت</span>
                    <span className="text-[.9rem] font-bold leading-[2]">تماس با پشتیبانی</span>
                </div>
            </div>
            <Link className="flex items-center justify-center border-[1px] border-[#0c0c0c] text-[#0c0c0c] bg-transparent py-[8px] px-[16px] text-[.8rem] font-bold leading-[2] rounded-[8px]">تماس</Link>
        </div>
        <div className="w-full flex justify-between items-center py-[12px] border-b-[1px] border-[#f0f0f1] ">
            <div className="flex items-center justify-center gap-2 ">
                <div className="flex items-center justify-center">
                    <div className="w-[44px] h-[44px]">
                        <img src="../../../../public/Image/footer/footermobile/footerlogo2.webp" className="w-full block object-cover" alt="" />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-[.6rem] font-[400] leading-[2]">تجربه خرید بهتر در</span>
                    <span className="text-[.9rem] font-bold leading-[2]">اپلیکیشن دیجی‌کالا</span>
                </div>
            </div>
            <button className="flex items-center justify-center bg-[#0c0c0c] text-white border-[1px] border-[#0c0c0c] py-[8px] px-[16px] text-[.8rem] font-bold leading-[2] rounded-[8px]">دانلود</button>
        </div>
    </div>
    </> );
}
 
export default Contactinfomobile;