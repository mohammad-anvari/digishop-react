import { Link } from "react-router-dom";
import useFetchs from "../CustomHooks/useFetchs";

const Brndssection = () => {
  const [data] = useFetchs("http://localhost:30018/brands");
  return (
    <>
      <div className="w-full max-w-[1528px]  bg-[#f0f0f1] ">
        <div className="w-full max-w-[1528px]  flex items-center justify-end flex-wrap ">
          {data?.map((elem) => {
            return (
              <Link
                className={`${
                  elem.id > 8 ? "" : ""
                }  px-[20px] flex flex-col grow items-center justify-center w-[12%] h-[80px] ${
                  elem.id === 1 && elem.id === 9
                    ? "border-b-[1px] border-[#e0e0e2] "
                    : "border-b-[1px] border-r-[1px] border-[#e0e0e2] "
                }`}
                key={elem.id}
              >
                <div className=" ">
                  <img src={elem.image} className=" h-[20px]" alt="" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Brndssection;
