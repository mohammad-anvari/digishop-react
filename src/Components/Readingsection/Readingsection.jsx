import { Link } from "react-router-dom";

const Readingsection = () => {
    return ( <>
    <div className="w-full max-w-[1336px] mx-auto lg:px-[16px] 2xl:px-0">
        <div className="w-full lg:rounded-[16px]">
            <div className="py-[16px] px-[20px] flex justify-between items-center">
                <p className=" text-[1rem] font-bold">خواندنی&zwnj;ها</p>
                <Link className="flex items-center font-bold text-[#19bfd3] text-[.8rem]">
                <span>مطالب بیشتر در دیجی‌کالا مگ</span>
                <div className=" flex ">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 20.9203C14.81 20.9203 14.62 20.8503 14.47 20.7003L7.95003 14.1803C6.89003 13.1203 6.89003 11.3803 7.95003 10.3203L14.47 3.80026C14.76 3.51026 15.24 3.51026 15.53 3.80026C15.82 4.09026 15.82 4.57026 15.53 4.86026L9.01003 11.3803C8.53003 11.8603 8.53003 12.6403 9.01003 13.1203L15.53 19.6403C15.82 19.9303 15.82 20.4103 15.53 20.7003C15.38 20.8403 15.19 20.9203 15 20.9203Z" fill="#19bfd3"/>
</svg>

                </div>
                </Link>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-4 lg:justify-around gap-3 items-stretch px-[20px] lg:px-0">
                {/* grid1 */}
                <Link className="mb-[4px] border-[1px] border-[#e0e0e2] rounded-[8px] overflow-hidden flex flex-col h-full">
                <div className="flex ">
                    <img src="../../../public/Image/Reading/img1.jpg" alt="" className="w-full object-cover"/>
                </div>
                <div className=" mb-[12px] mt-[8px] px-[16px] text-right overflow-hidden text-[0.8rem] font-medium leading-[2.5] w-full">
                    <p>بهترین تلویزیون دوو؛ گزینه‌های مطمئن برای خانه‌ی شما</p>
                </div>
                </Link>
                {/* end grid1 */}
                {/* grid2 */}
                <Link className="mb-[4px] border-[1px] border-[#e0e0e2] rounded-[8px] overflow-hidden flex flex-col h-full">
                <div className="flex">
                    <img src="../../../public/Image/Reading/img2.jpg" alt="" className="w-full object-cover" />
                </div>
                <div className=" mb-[12px] mt-[8px] px-[16px] text-right overflow-hidden text-[0.8rem] font-medium leading-[2.5] w-full">
                    <p>فاینال فانتزی ۱۱ دلیل ساخت پلتفرم دیسکورد بوده است</p>
                </div>
                </Link>
                {/* end grid2 */}
                {/* grid3 */}
                <Link className="mb-[4px] border-[1px] border-[#e0e0e2] rounded-[8px] overflow-hidden flex flex-col h-full">
                <div className="flex ">
                    <img src="../../../public/Image/Reading/img3.jpg" alt="" className="w-full object-cover" />
                </div>
                <div className=" mb-[12px] mt-[8px] px-[16px] text-right overflow-hidden text-[0.8rem] font-medium leading-[2.5] w-full">
                    <p>هرآنچه درباره گوشی گلکسی A36 سامسونگ می‌دانیم</p>
                </div>
                </Link>
                {/* end grid3 */}
                {/* grid4 */}
                <Link className="mb-[4px] border-[1px] border-[#e0e0e2] rounded-[8px] overflow-hidden flex flex-col h-full">
                <div className="flex">
                    <img src="../../../public/Image/Reading/img4.jpg" alt="" className="w-full object-cover" />
                </div>
                <div className=" mb-[12px] mt-[8px] px-[16px] text-right overflow-hidden text-[0.8rem] font-medium leading-[2.5] w-full">
                    <p>دیالیز چیست؟ (راهنمای کامل برای بیماران کلیوی)</p>
                </div>
                </Link>
                {/* end grid4 */}
            </div>
        </div>
    </div>
    </> );
}
 
export default Readingsection;