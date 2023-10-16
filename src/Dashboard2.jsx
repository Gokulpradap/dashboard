import Navbar from "./components/navbar/Navbar"
import Accounts from "./components/accounts/Accounts"
import Product from "./components/product/Product";
import Charts  from "./components/chart/Chart";
import Sidebar1 from "./components/Sidebar1"
const Dashboard2 = () => {
  return (
    <div className="overflow-hidden bg-slate-100 "> 
        <div>
    <Sidebar1/>
    </div>
    <div className="w-full xl:px-10">
     
      <Navbar />
      <Accounts />
      <Charts/>
      <Product/>
    </div></div>
  )
}

export default Dashboard2