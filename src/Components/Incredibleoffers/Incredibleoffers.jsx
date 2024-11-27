import Header from "../Header/Header"; 
import Bottomnav from "../Bottomnav/Bottomnav";
import Incrediblecontainer from "./Incrediblecontainer/Incrediblecontainer";
const Incredibleoffers = () => {
  return (
    <>
      <div className="w-full lg:max-w-[1528px] mx-auto ">
        <Header />
        <Bottomnav icones={false}/>
        <Incrediblecontainer/>
      </div>
    </>
  );
};

export default Incredibleoffers;
