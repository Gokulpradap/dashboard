import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar"
import Accounts from "./components/accounts/Accounts"
import Product from "./components/product/Product";
import Charts  from "./components/chart/Chart";
function App() {
  return (
    <div className="flex overflow-hidden bg-slate-100 ">
      <div >
        <Sidebar />
      </div>

    
      <div className="w-full xl:px-10">
        <div>
          <Navbar />
          <Accounts />
          <Charts/>
          <Product/>
        </div>
      </div>
    </div>
  );
}

export default App;
