import { Link } from "react-router-dom";
import style from "../Header.module.css"
import useFetchs from "../../CustomHooks/useFetchs";
const Submenu = () => {
    const [data]=useFetchs("http://localhost:30018/submenu");
    return ( <>
    <div className={`w-auto h-[240px] bg-white z-[4] absolute top-[41.5px] shadow-2xl rounded-bl-[8px] ${style.subhover}`}>
        <div className={`flex h-full w-full flex-row-reverse  `}>
            <div className={ `flex flex-col overflow-y-auto w-[200px] border-l-[1px] border-[#f0f0f1] bg-[#f5f5f5] direction  `} >
                {data?.map((item)=>{
                    return (
                        <Link className={`w-full py-[12px] px-[8px] flex items-center border-y-[1px] border-transparent hover:bg-[#fff] ${style.direction}  `} key={item.id} >
                        <div className="w-full h-full flex items-center hover:text-[#F0394E]">
                            <div className="flex me-[8px] ">
                                <img src={item.icon} alt="" />
                            </div>
                            <p className="text-[.8rem] font-bold leading-[2] text-[#3f4064] ">{item.title}</p>
                        </div>
                        </Link>
                    )
                })}
            </div>
            <div className={` pt-[20px] px-[20px] overflow-auto h-full ${style.scrll}`} dir="ltr">
                <div className="w-full h-full flex " dir="rtl">
                    <div className="flex flex-col h-full">
                        <Link className=" flex text-[.8rem] font-bold leading-[2] text-[#008eb2] items-center mb-[20px] min-w-[220px]">همه محصولات موبایل</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </> );
}
 
export default Submenu;