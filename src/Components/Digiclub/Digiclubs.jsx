import { Link } from "react-router-dom";
import style from "./Digiclub.module.css"
import Digiclub from "./Digiclub";
const Digiclubs = () => {
    return ( <>
    <div className="w-full max-w-[1336px] mx-auto lg:px-[12px] 2xl:px-0 ">
        <div className={`w-full flex flex-col lg:flex-row items-center justify-between lg:rounded-[16px] py-[16px] lg:py-[12px] px-[16px] mt-[8px] ${style.bggradient}`}>
            <div className={` lg:ms-[24px] flex items-center justify-between w-full`}>
                <Link className="">
                <div className="">
                    <img src="../../../public/Image/digiclub/digiclub-logo-white.svg" alt="" />
                </div>
                </Link>
            </div>
            <div className=" flex items-center mt-[12px] lg:mt-0">
                <div className=" flex gap-1 rounded-lg overflow-hidden">
              <Digiclub/>
                </div>
            </div>
        </div>
    </div>
    </> );
}
 
export default Digiclubs;