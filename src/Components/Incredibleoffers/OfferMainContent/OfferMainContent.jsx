import useFetchs from "../../CustomHooks/useFetchs";
import Mainslider from "../../mainslider/Mainslider";

const OfferMainContent = () => {
    const [incredible]=useFetchs("http://localhost:30018/incredibleoffers")
    return ( <>
    <div className="w-full max-w-[1528px]  ">
        {incredible?<Mainslider data={incredible} title={true}/>:null}
    </div>
    </> );
}
 
export default OfferMainContent;