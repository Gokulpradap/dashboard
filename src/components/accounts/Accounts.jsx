import { AiOutlineDollarCircle } from "react-icons/ai"
import { BsArrowUpShort } from "react-icons/bs"
import { CgLoadbarDoc } from "react-icons/cg"
import { TbCoins, TbShoppingBag } from "react-icons/tb"

const Accounts = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col justify-between ">
      <div className="flex items-center box-border h-40 w-auto p-4 border shadow rounded-lg bg-white">
      <AiOutlineDollarCircle className="text-green-600 bg-green-200 text-[7rem] rounded-full p-6 mr-4"/>
      <div>
        <p className="text-xs font-semibold text-gray-400">Earning</p>
        <h3 className="flex items-center text-3xl font-semibold">$198K</h3>
        <p className="flex items-center text-xs"><span className="flex items-center text-green-500 font-semibold mr-1"><BsArrowUpShort/>37% </span>  this month</p>
      </div>
      </div>
      <div  className="flex items-center box-border h-40 w-auto p-4 border shadow rounded-lg bg-white">
        <CgLoadbarDoc className="text-violet-600 bg-violet-200 text-[7rem] rounded-full p-6 mr-4"/>
        <div>
          <p className="text-xs font-semibold text-gray-400">Orders</p>
          <h3 className="flex items-center text-3xl font-semibold">$2.4K</h3>
          <p className="flex items-center text-xs"><span className="flex items-center text-red-500 font-semibold mr-1"><BsArrowUpShort className="rotate-180"/>2%</span>this month</p>
        </div>
      </div>
      <div  className="flex items-center box-border h-40 w-auto p-4 border shadow rounded-lg bg-white">
      <TbCoins className="text-blue-600 bg-blue-200 text-[7rem] rounded-full p-6 mr-4"/>
      <div>
        <p className="text-xs font-semibold text-gray-400">Balance</p>
        <h3 className="flex items-center text-3xl font-semibold">$2.4K</h3>
        <p className="flex items-center text-xs"><span className="flex items-center text-red-500 font-semibold mr-1"><BsArrowUpShort className="rotate-180"/>37%</span>this month</p>
      </div>
      </div>
      <div  className="flex items-center box-border h-40 w-auto p-4 border shadow rounded-lg bg-white">
        <TbShoppingBag className="text-red-600 bg-red-200 text-[7rem] rounded-full p-6 mr-4"/>
        <div>
          <p className="text-xs font-semibold text-gray-400">name</p>
          <h3 className="flex items-center text-3xl font-semibold">$89K</h3>
          <p className="flex items-center text-xs"><span className="flex items-center text-green-500 font-semibold mr-1"><BsArrowUpShort/>11%</span>this month</p>
        </div>
      </div>
    
    </section>
  )
}

export default Accounts