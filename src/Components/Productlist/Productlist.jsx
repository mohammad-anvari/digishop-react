import { Link } from "react-router-dom";

const Productlist = () => {
    return ( <>
    <div className="w-[100%] max-w-[1336px] mx-auto px-[20px] lg:px-[16px] 2xl:px-0 ">
        <div className=" flex flex-wrap ">
            <Link className="w-[calc(50%-8px)] lg:w-[calc(25%-12px)] block relative ">
            
                <div className=" rounded-[16px]">
                    <img className="rounded-[16px] w-full h-full" src="../../../public/Image/productlist/lavazemarayesh.webp" alt="" />
            </div>
            </Link>
            <Link className=" w-[calc(50%-8px)] lg:w-[calc(25%-12px)] block relative  ms-[16px] ">
            <div className=" ">
                <div className=" rounded-[16px]">
                    <img className="rounded-[16px] w-full h-full" src="../../../public/Image/productlist/percil.webp" alt="" />
                </div>
            </div>
            </Link>
            <Link className=" w-[calc(50%-8px)] lg:w-[calc(25%-12px)] block relative mt-[16px] lg:mt-0 lg:ms-[16px] ">
            <div className=" ">
                <div className="  rounded-[16px]">
                    <img className="rounded-[16px] w-full h-full" src="../../../public/Image/productlist/gold.webp" alt="" />
                </div>
            </div>
            </Link>
            <Link className="w-[calc(50%-8px)] lg:w-[calc(25%-12px)] block relative  mt-[16px] lg:mt-0 ms-[16px] ">
            <div className=" ">
                <div className="  rounded-[16px]">
                    <img className="rounded-[16px] w-full h-full" src="../../../public/Image/productlist/varzesh.webp" alt="" />
                </div>
            </div>
            </Link>
        </div>
    </div>
    </> );
}
 
export default Productlist;