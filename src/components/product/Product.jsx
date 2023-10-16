import { AiOutlineSearch } from "react-icons/ai";
import { product } from "../../Data";

const Product = () => {
  return (
    <section className="box-border h-full w-full mt-14 p-4 border shadow rounded-lg bg-white">
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="mb-4 sm:mb-0">
          <h4 className="text-xl font-semibold">Product Sell</h4>
        </div>
        <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto">
          <div className="flex items-center mb-2 sm:mb-0 bg-gray-100 p-1 rounded">
            <AiOutlineSearch className="mr-2 text-gray-500 font-semibold" />
            <input
              type="text"
              placeholder="Search"
              className="outline-none w-full sm:w-40 bg-gray-100"
            />
          </div>
          <div className="flex items-center">
            <select className="border rounded text-gray-400 bg-gray-100 border-none p-1 ml-0 sm:ml-2">
              <option value="">Last 30 days</option>
              <option value="">Last 60 days</option>
              <option value="">Last 90 days</option>
            </select>
          </div>
        </div>
      </div>

      {/* header section */}
      <div className="flex flex-col sm:flex-row justify-between mt-5 mb-2">
        <div>
          <p className="text-gray-400 font-semibold text-xm">Product Name</p>
        </div>
        <div className="flex lg:justify-between md:justify-end w-full lg:w-80">
          <p className="text-gray-400 font-semibold text-xm">Stocks</p>
          <p className="text-gray-400 font-semibold text-xm">Price</p>
          <p className="text-gray-400 font-semibold text-xm">Total Sales</p>
        </div>
      </div>
      <hr />
      {product.map((pro, index) => (
        <div key={index} className="flex flex-col sm:flex-row justify-between items-center mt-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <img src={pro.img} alt="" className="w-24 h-14 rounded" />
            <div className="ml-3">
              <h5 className="font-bold text-lg">{pro.name}</h5>
              <span className="text-gray-400 text-xs">{pro.content}</span>
            </div>
          </div>
          <div className="flex justify-between items-center gap-3 lg:w-80">
            <p className="text-xs font-semibold">{pro.stack} <span>in stock</span></p>
            <p className="mr-6 font-bold">$ {pro.price}</p>
            <p className="mr-10">{pro.total}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Product;
