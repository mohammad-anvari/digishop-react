import OfferMainContent from "../OfferMainContent/OfferMainContent";
import TodaySpecial from "../TodaySpecial/TodaySpecial";
import Categoriesoffer from "../Categoriesoffer/Categoriesoffer"
import FeaturedDeals from "./FeaturedDeals/FeaturedDeals";
import ExpiringDeals from "../ExpiringDeals/ExpiringDeals";
import useFetchs from "../../CustomHooks/useFetchs";
import { useEffect, useState } from "react";
import Amazingdeals from "../../Amazingdeals/Amazingdeals";
import AllAmazingDeals from "./AllAmazingDeals/AllAmazingDeals";
import Footer from "../../Footer/Footer"
const Incrediblecontainer = () => {
    const [seconds, setSeconds] = useState(59);
    const [minutes, setMinutes] = useState(59);
    const [hour, setHour] = useState(7);
    let timer;
    useEffect(() => {
      timer = setInterval(() => {
        setSeconds(seconds - 1);
        if (seconds === 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else if (minutes === 0) {
          setHour(hour - 1);
          setMinutes(59);
        } else if (hour < 0) {
          setSeconds(0);
          setMinutes(0);
          setHour(0);
        }
      }, 1000);
      return () => clearInterval(timer);
    });
    const [expiring]=useFetchs("http://localhost:30018/FeaturedDeals");
    
    return ( <>
    <div className="w-full max-w-[1676px] flex flex-col items-center lg:pt-[108px] mx-auto justify-between gap-y-4">
    <OfferMainContent />
    <TodaySpecial />
    <Categoriesoffer/>  
    <FeaturedDeals/>
    <ExpiringDeals data={expiring} h={hour} m={minutes} s={seconds} title={"شگفت‌انگیزهای رو به اتمام"} clock={true}/>
    <Amazingdeals inc={true} />
    <ExpiringDeals data={expiring} h={hour} m={minutes} s={seconds} title={"شگفت‌انگیز سفارشی"}/>
    <Amazingdeals inc={true} />
    <AllAmazingDeals/>
    <Footer/>
    </div>
    </> );
}
 
export default Incrediblecontainer;