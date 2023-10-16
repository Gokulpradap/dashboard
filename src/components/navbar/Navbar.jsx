import {AiOutlineSearch} from "react-icons/ai"
const Navbar = () => {
  return <nav>
    <div  className="flex xl:flex-row flex-col justify-between mt-8  mb-10 ">
    <div>
    <h5 className="text-xl font-semibold text-center">Hello Shahrukh 👋,</h5>
    </div>
    <div className="flex items-center border rounded bg-white border-none p-1">
      <AiOutlineSearch className="mr-2 text-gray-500 font-semibold"/>
      <input type="text" placeholder="Search" className="outline-none"/>
    </div>
    </div>
  </nav>
}

export default Navbar