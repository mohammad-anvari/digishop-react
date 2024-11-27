import { Link } from "react-router-dom";

const Customerservis = () => {
    return ( <>
    <div className="w-full max-w-[1488px] h-[103.86px] flex items-center my-[32px]">
        <Link className=" h-full py-[12px] flex flex-col items-center justify-between grow text-center">
        <div className="  ">
            <img src="../../../public/Image/footer/customerservis/img1.svg" alt="" />
        </div>
        <p className="text-[#3f4064] text-[.8rem]">اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</p>
        </Link>
        <Link className=" h-full py-[12px] flex flex-col items-center justify-between grow text-center">
        <div className="  ">
            <img src="../../../public/Image/footer/customerservis/cash-on-delivery.svg  " alt="" />
        </div>
        <p className="text-[#3f4064] text-[.8rem]">امکان پرداخت در محل</p>
        </Link>
        <Link className=" h-full py-[12px] flex flex-col items-center justify-between grow text-center">
        <div className=" ">
            <img src="../../../public/Image/footer/customerservis/support.svg" alt="" />
        </div>
        <p className="text-[#3f4064] text-[.8rem]">۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ</p>
        </Link>
        <Link className=" h-full  py-[12px] flex flex-col items-center justify-between grow text-center">
        <div className="  ">
            <img src="../../../public/Image/footer/customerservis/days-return.svg" alt="" />
        </div>
        <p className="text-[#3f4064] text-[.8rem]">هفت روز ضمانت بازگشت کالا</p>
        </Link>
        <Link className=" h-full py-[12px] flex flex-col items-center justify-between grow text-center">
        <div className=" ">
            <img src="../../../public/Image/footer/customerservis/original-products.svg" alt="" />
        </div>
        <p className="text-[#3f4064] text-[.8rem]">ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ</p>
        </Link>
    </div>
    </> );
}
 
export default Customerservis;