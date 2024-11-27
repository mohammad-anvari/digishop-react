import AboutUs from "./AboutUs";
import Contactinfo from "./Contactinfo";
import Customerservis from "./Customerservis";
import Importantlink from "./Importantlink";
import Mobileapp from "./Mobileapp";
import Brandssection from "./Brandssection";

const Footer = () => {
  return (
    <>
      <div className="w-full max-w-[1528px] mt-[48px] pt-[32px] border-t-[1px] border-[#f0f0f1] hidden lg:flex ">
        <div className="w-full max-w-[1528px] mx-auto">
          <div className=" w-full max-w-[1528px]  px-[20px] ">
            <Contactinfo />
            <Customerservis />
            <Importantlink />
            <Mobileapp />
            <AboutUs />
          </div>
            <Brandssection />
        </div>
      </div>
    </>
  );
};

export default Footer;
