const Contactinfo = () => {
    return ( <>
    <div className="w-full max-w-[1488px] h-[40px] flex items-center justify-between">
        <div className="w-[195px] h-[30px] me-[16px]">
            <img src="../../../public/Image/Header/full-horizontal.svg" alt="" />
        </div>
        <button className=" h-[40px] px-[16px] py-[8px] border-[1px] border-[#e0e0e2] rounded-[8px] relativev flex items-center justify-center">
            <div className=" h-[26.04px] flex items-center justify-center relative grow">
                <span className="me-[8px] text-[#a1a3a8] text-[.8rem] font-bold">بازگشت به بالا</span>
                <div className="flex w-[24px] h-[24px] items-center justify-center">
                <svg  width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.92 16.0502C19.73 16.0502 19.54 15.9802 19.39 15.8302L12.87 9.3102C12.39 8.8302 11.61 8.8302 11.13 9.3102L4.61002 15.8302C4.32002 16.1202 3.84002 16.1202 3.55002 15.8302C3.26002 15.5402 3.26002 15.0602 3.55002 14.7702L10.07 8.2502C11.13 7.1902 12.86 7.1902 13.93 8.2502L20.45 14.7702C20.74 15.0602 20.74 15.5402 20.45 15.8302C20.3 15.9702 20.11 16.0502 19.92 16.0502Z" fill="#a1a3a8"/>
</svg>

                </div>
            </div>
        </button>
    </div>
        <div className=" h-[26.04px] mt-[12px] flex items-center text-[#3f4064] text-[.8rem] font-medium">
            <p className="text-[.8rem]">تلفن پشتیبانی 61930000 - 021</p>
            <div className=" h-[26.04px] px-[20px] text-[1rem] text-[#a1a3a8]">|</div>
            <p>91000100021 - 021</p>
            <div className=" h-[26.04px] px-[20px] text-[1rem] text-[#a1a3a8]">|</div>
            <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
        </div>
    </> );
}
 
export default Contactinfo;