import { useEffect, useState } from "react";
import Amazingdeals from "../Amazingdeals/Amazingdeals";
import BestSellersSection from "../BestSellersSection/BestSellersSection";
import Brand from "../Brand/Brand";
import CategoriwsSection from "../CategoriesSections/CategoriesSection";
import useFetchs from "../CustomHooks/useFetchs";
import Digiclub from "../Digiclub/Digiclubs";
import Digikalaservises from "../Digikalaservises/Digikalaservises";
import Discount from "../Discount/Discount";
import Featuredproducts from "../Featuredproducts/Featuredproducts";
import Footer from "../Footer/Footer";
import Mainslider from "../mainslider/Mainslider";
import Offerzone from "../Offerzone/Offerzone";
import Productlist from "../Productlist/Productlist";
import Promotions from "../Promotions/Promotions";
import Readingsection from "../Readingsection/Readingsection";
import Story from "../Story/Stories";
import Footermobile from "../Footer/Footermobile/Footermobile";
const Container = () => {
  const [feature] = useFetchs("http://localhost:30018/featuredproducts");
  const [bestsellers] = useFetchs("http://localhost:30018/bestsellers");
  8;
  const [feture2] = useFetchs("http://localhost:30018/featuredproducts2");
  const [mainslider] = useFetchs("http://localhost:30018/hero");
  return (
    <>
      <div className="w-full lg:max-w-[1528px] grow lg:pt-[108px] gap-y-4 flex flex-col items-center justify-around mx-auto trsp">
        <Story />
        {mainslider ? <Mainslider data={mainslider} /> : null}
        <Digikalaservises />
        <Promotions />
        <Amazingdeals />
        <Productlist />
        <CategoriwsSection />
        <Brand />
        {feature ? (
          <Featuredproducts data={feature} title1={"کیف و کاور گوشی"} />
        ) : null}
        <Digiclub />
        {bestsellers ? (
          <BestSellersSection
            data={bestsellers}
            title={" پرفروش‌ترین کالاها"}
          />
        ) : null}
        {feture2 ? (
          <Featuredproducts data={feture2} title1={"کیف و کاور گوشی"} />
        ) : null}
        <Discount />
        <Offerzone />
        {bestsellers ? (
          <BestSellersSection
            data={bestsellers}
            title={"داغ ترین چند ساعت گذشته"}
          />
        ) : null}
        <Readingsection />
        <Footer />
        <Footermobile />
      </div>
    </>
  );
};

export default Container;
