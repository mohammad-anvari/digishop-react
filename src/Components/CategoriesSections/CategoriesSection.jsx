import { Link } from "react-router-dom";
import style from "./Categories.module.css"
const CategoriwsSection = () => {
    return ( <>
    <div className="w-full max-w-[1336px] h-[456.1px] mx-auto">
    <div className={`flex flex-col items-center pt-[16px] pb-[40px]  `}>
        <div className="text-center mb-[36px]">
            <h3 className="text-[1.3rem] font-semibold">خرید بر اساس دسته&zwnj;بندی</h3>
        </div>
        <div className=  {`flex flex-col justify-center items-center overflow-x-scroll 2xl:overflow-auto max-w-[1336px] w-full ${style.scrll}`}>
        <div className=" flex flex-row justify-center items-center gap-[8px]  max-w-[1336px] w-full">
            <span className=" h-[160px] px-[16px] ">
                <Link className="w-[107.83px] h-[134.04px] flex flex-col items-center">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                    <img src="../../../public/Image/categories/mobile.png" alt="" />
                </div>
                <p className={`mt-[8px] text-center overflow-hidden text-[.8rem] font-bold text-[#0c0c0c] ${style.txtdisplay} `}>موبایل</p>
                </Link>
            </span>
            <span className=" h-[160px] px-[16px] ">
                <Link className="w-[107.83px] h-[134.04px] flex flex-col items-center">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                    <img src="../../../public/Image/categories/digital.png" alt="" />
                </div>
                <p className={`mt-[8px] text-center overflow-hidden text-[.8rem] font-bold text-[#0c0c0c] ${style.txtdisplay} `}>کالای دیجیتال</p>
                </Link>
            </span>
            <span className=" h-[160px] px-[16px] ">
                <Link className="w-[107.83px] h-[160.07px] flex flex-col items-center">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                    <img src="../../../public/Image/categories/lavazemtahrir.png" alt="" />
                </div>
                <p className={`mt-[8px] text-center overflow-hidden text-[.8rem] font-bold text-[#0c0c0c] ${style.txtdisplay} `}>کتاب، لوازم تحریر و هنر</p>
                </Link>
            </span>
            <span className=" h-[160px] px-[16px] ">
                <Link className="w-[107.83px] h-[134.04px] flex flex-col items-center">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                    <img src="../../../public/Image/categories/home.png" alt="" />
                </div>
                <p className={`mt-[8px] text-center overflow-hidden text-[.8rem] font-bold text-[#0c0c0c] ${style.txtdisplay} `}>خانه و آشپزخانه</p>
                </Link>
            </span>
            <span className=" h-[160px] px-[16px] ">
                <Link className="w-[107.83px] h-[134.04px] flex flex-col items-center">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                    <img src="../../../public/Image/categories/lavazemkhanegi.png" alt="" />
                </div>
                <p className={`mt-[8px] text-center overflow-hidden text-[.8rem] font-bold text-[#0c0c0c] ${style.txtdisplay} `}>لوازم خانگی برقی</p>
                </Link>
            </span>
            <span className=" h-[160px] px-[16px] ">
                <Link className="w-[107.83px] h-[134.04px] flex flex-col items-center">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                    <img src="../../../public/Image/categories/mood-poshak.png" alt="" />
                </div>
                <p className={`mt-[8px] text-center overflow-hidden text-[.8rem] font-bold text-[#0c0c0c] ${style.txtdisplay} `}>مد و پوشاک</p>
                </Link>
            </span>
            <span className="w-[139.82px] h-[160px] px-[16px] ">
                <Link className="w-[107.83px] h-[134.04px] flex flex-col items-center">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                    <img src="../../../public/Image/categories/tala-noghre.png
                    " alt="" />
                </div>
                <p className={`mt-[8px] text-center overflow-hidden text-[.8rem] font-bold text-[#0c0c0c] ${style.txtdisplay} `}>طلا و نقره</p>
                </Link>
            </span>
            <span className=" h-[160px] px-[16px] ">
                <Link className="w-[107.83px] h-[134.04px] flex flex-col items-center">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                    <img src="../../../public/Image/categories/arayeshi.png" alt="" />
                </div>
                <p className={`mt-[8px] text-center overflow-hidden text-[.8rem] font-bold text-[#0c0c0c] ${style.txtdisplay} `}>آرایشی بهداشتی</p>
                </Link>
            </span>
        </div>
        <div className="flex flex-row justify-center items-center gap-[8px] max-w-[1336px] w-full">
            <span className=" h-[160px] px-[16px] ">
                <Link className="w-[107.83px] h-[160px] flex flex-col items-center">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                    <img src="../../../public/Image/categories/pezeshki.jpg" alt="" />
                </div>
                <p className={`mt-[8px] text-center overflow-hidden text-[.8rem] font-bold text-[#0c0c0c] ${style.txtdisplay} `}>تجهیزات پزشکی و سلامت</p>
                </Link>
            </span>
            <span className=" h-[160px] px-[16px] ">
                <Link className="w-[107.83px] h-[134.04px] flex flex-col items-center">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                    <img src="../../../public/Image/categories/varzesh.png" alt="" />
                </div>
                <p className={`mt-[8px] text-center overflow-hidden text-[.8rem] font-bold text-[#0c0c0c] ${style.txtdisplay} `}>ورزش و سفر</p>
                </Link>
            </span>
            <span className=" h-[160px] px-[16px] ">
                <Link className="w-[107.83px] h-[134.04px] flex flex-col items-center">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                    <img src="../../../public/Image/categories/car.png" alt="" />
                </div>
                <p className={`mt-[8px] text-center overflow-hidden text-[.8rem] font-bold text-[#0c0c0c] ${style.txtdisplay} `}>خودرو و موتورسیکلت</p>
                </Link>
            </span>
            <span className=" h-[160px] px-[16px] ">
                <Link className="w-[107.83px] h-[134.04px] flex flex-col items-center">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                    <img src="../../../public/Image/categories/abzar.png" alt="" />
                </div>
                <p className={`mt-[8px] text-center overflow-hidden text-[.8rem] font-bold text-[#0c0c0c] ${style.txtdisplay} `}>ابزار آلات و تجهیزات</p>
                </Link>
            </span>
            <span className=" h-[160px] px-[16px] ">
                <Link className="w-[107.83px] h-[160px] flex flex-col items-center">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                    <img src="../../../public/Image/categories/cardhedieh.png" alt="" />
                </div>
                <p className={`mt-[8px] text-center overflow-hidden text-[.8rem] font-bold text-[#0c0c0c] ${style.txtdisplay} `}>کارت هدیه و گیفت کارت</p>
                </Link>
            </span>
            <span className=" h-[160px] px-[16px] ">
                <Link className="w-[107.83px] h-[160px] flex flex-col items-center">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                    <img src="../../../public/Image/categories/khoraki.png" alt="" />
                </div>
                <p className={`mt-[8px] text-center overflow-hidden text-[.8rem] font-bold text-[#0c0c0c] ${style.txtdisplay} `}>کالای خوراکی و اساسی</p>
                </Link>
            </span>
            <span className=" h-[160px] px-[16px] ">
                <Link className="w-[107.83px] h-[160px] flex flex-col items-center">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                    <img src="../../../public/Image/categories/asbabbazi.png" alt="" />
                </div>
                <p className={`mt-[8px] text-center overflow-hidden text-[.8rem] font-bold text-[#0c0c0c] ${style.txtdisplay} `}>اسباب بازی، کودک و نوزاد</p>
                </Link>
            </span>
            <span className="h-[160px] px-[16px] ">
                <Link className="w-[107.83px] h-[160px] flex flex-col items-center">
                <div className="w-[100px] h-[100px] flex items-center justify-center">
                    <img src="../../../public/Image/categories/mahsolatmahali.png" alt="" />
                </div>
                <p className={`mt-[8px] text-center overflow-hidden text-[.8rem] font-bold text-[#0c0c0c] ${style.txtdisplay} `}>محصولات بومی و محلی</p>
                </Link>
            </span>
        </div>
            
        </div>
    </div>

    </div>
    </> );
}
 
export default CategoriwsSection;