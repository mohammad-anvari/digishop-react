import { Link } from "react-router-dom";

const Featuredproducts = ({ data }) => {

  return (
    <>
      <div className="w-full max-w-[1336px] mx-auto lg:px-[16px] 2xl:px-0">
          
            <div className="grid grid-cols-1 lg:grid-cols-4 overflow-hidden lg:border-[1px] gap-[1px]  lg:border-[#e0e0e2] lg:rounded-[16px] bg-[#f0f0f1]">
              {/* grid */}
              {data?.map((elem) => {
                return (
                  <div className="w-full h-full px-[20px] py-[8px] flex flex-col bg-white" key={elem.id}>
                    <div className="flex items-center">
                  <div className=" w-full flex flex-col mb-[8px]">
                    <div className="w-full flex items-center justify-between">
                      <div className=" flex items-center">
                        <h4 className="font-bold text-[#23254e] leading-[2.17]">
                         {elem.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-[#81858b] font-normal text-[.7rem]">
                      بر اساس سلیقه شما
                    </p>
                  </div>
                </div>
                    <div className="grid grid-cols-2 bg-[#f0f0f1] gap-[1px] ">
                      <Link className="w-full flex items-center justify-center p-[8px] relative bg-white">
                        <div className="h-full flex items-center">
                          <img
                            src={elem.image1}
                            alt=""
                            className="w-full h-full object-contain" 
                          />
                        </div>
                      </Link>
                      <Link className="w-full flex items-center justify-center p-[8px] relative bg-white">
                        <div className="h-full flex items-center">
                          <img
                            src={elem.image2}
                            alt=""
                            className="w-full h-full object-contain" 
                          />
                        </div>
                      </Link>
                      <Link className="w-full flex items-center justify-center p-[8px] relative bg-white">
                        <div className="h-full flex items-center">
                          <img
                            src={elem.image3}
                            alt=""
                            className="w-full h-full object-contain" 
                          />
                        </div>
                      </Link>
                      <Link className="w-full flex items-center justify-center p-[8px] relative bg-white">
                        <div className="h-full flex items-center">
                          <img
                            src={elem.image4}
                            alt=""
                            className="w-full h-full object-contain" 
                          />
                        </div>
                      </Link>
                    </div>
                    <div className=" flex  items-center justify-center mt-[4px] mb-[12px]">
                      <Link className=" text-center flex items-center  text-[.8rem] font-bold text-[#19bfd3]">
                        <span>مشاهده</span>   
                        <div className="flex items-center justify-center text-center font-bold">
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M15 20.9203C14.81 20.9203 14.62 20.8503 14.47 20.7003L7.95003 14.1803C6.89003 13.1203 6.89003 11.3803 7.95003 10.3203L14.47 3.80026C14.76 3.51026 15.24 3.51026 15.53 3.80026C15.82 4.09026 15.82 4.57026 15.53 4.86026L9.01003 11.3803C8.53003 11.8603 8.53003 12.6403 9.01003 13.1203L15.53 19.6403C15.82 19.9303 15.82 20.4103 15.53 20.7003C15.38 20.8403 15.19 20.9203 15 20.9203Z"
                              fill="#19bfd3"
                            />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
              {/* end grid */}
            </div>
          </div>
        
      
    </>
  );
};

export default Featuredproducts;

