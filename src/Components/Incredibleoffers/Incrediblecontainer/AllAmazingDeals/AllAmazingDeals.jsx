import Filters from "./Filters/Filters";
import Products from "./Products/Products";

const AllAmazingDeals = () => {
  return (
    <>
      <div className="w-full max-w-[1676px] px-[16px] mt-[20px] mx-auto ">
        <div className="py-[12px]">
          <div className="flex items-center">
            <h3 className="font-bold text-[1.1rem] ">همه شگفت‌انگیز‌ها</h3>
          </div>
        </div>
        <div className="w-full gap-10 max-w-[1676px] flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-between max-h-[500px] ">
          <Products />
          <Filters />
        </div>
      </div>
    </>
  );
};

export default AllAmazingDeals;
