// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import style from "./mainslider.module.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard,Autoplay } from 'swiper/modules';
import { useEffect } from 'react';
const Mainslider = ({data,title}) => {
  useEffect(()=>{

  },[data,title])
    return ( <>
    <div className=" w-full max-w-[1528px] flex flex-col items-center justify-center">
      {title?<div className={`w-full h-[64px] hidden lg:flex ${style.bgimage} `}></div>:null}
        <div className="w-full max-w-[1528px] flex items-center justify-center">
            {/* slider */}
            <Swiper
            centeredSlides={true}
        cssMode={true}
        navigation={true}
        pagination={{clickable:true}}
        mousewheel={true}
        keyboard={true}
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            reverseDirection:false
          }}
          breakpoints={{
            0:{
              slidesPerView:1.25
            },
            1024:{
              slidesPerView:1,
            }

          }}
          
          
        modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay]}
        className="mySwiper2 swiper2"
      >
        {data?.map((item)=>{
            return <SwiperSlide key={item.id} className='lg:rounded-none'><img src={item.image} className='lg:rounded-none'   /></SwiperSlide>
        })}
      </Swiper>
            {/* end slider */}
        </div>
    </div>
    </> );
}
 
export default Mainslider;