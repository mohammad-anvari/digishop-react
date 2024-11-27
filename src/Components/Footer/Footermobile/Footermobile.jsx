import Aboutusmobile from "./Aboutusmobile";
import Contactinfomobile from "./Contactinfomobile";
import Importlinkmobile from "./Importlinkmobile";

const Footermobile = () => {
    return ( <>
    <div className="w-full flex flex-col justify-center py-[16px] px-[20px] lg:hidden mb-[50px]">
        <button className="px-[16px] py-[4px] flex items-center justify-center text-[#19bfd3] text-[.9rem] font-bold leading-[2]">
            <div className="flex items-center justify-center ">
                <p>بازگشت به بالا</p>
                 <div className="flex ms-[8px]">
                 <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.92 16.0502C19.73 16.0502 19.54 15.9802 19.39 15.8302L12.87 9.3102C12.39 8.8302 11.61 8.8302 11.13 9.3102L4.61002 15.8302C4.32002 16.1202 3.84002 16.1202 3.55002 15.8302C3.26002 15.5402 3.26002 15.0602 3.55002 14.7702L10.07 8.2502C11.13 7.1902 12.86 7.1902 13.93 8.2502L20.45 14.7702C20.74 15.0602 20.74 15.5402 20.45 15.8302C20.3 15.9702 20.11 16.0502 19.92 16.0502Z" fill="#19bfd3"/>
</svg>
                 </div>
            </div>
        </button>
        <Contactinfomobile/>
        <Importlinkmobile/>
        <Aboutusmobile/>
    </div>
    </> );
}
 
export default Footermobile;