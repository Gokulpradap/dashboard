import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { TbHexagonLetterQ } from "react-icons/tb";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { navHeading } from "../../Data";
import profile from "../../assets/profile.png";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
      className={`bg-dark-purple h-screen p-5 pt-8 ${
        open ? "w-72" : "w-20"
      } relative duration-300`}
    >
      <BsArrowLeftShort
        className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer  ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className="inline-flex items-center">
        <TbHexagonLetterQ
          className={`text-white text-4xl cursor-pointer mr-2 block float-left duration-500 ${
            !open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white text-2xl origin-left duration-300 ${
            !open && "scale-0"
          }`}
        >
          Dashboard
        </h1>
      </div>
      <div>
        <ul className="mt-10">
          {navHeading.map((heading, index) => (
            <li className="my-5" key={index}>
              <a
                className="flex items-center justify-between focus:bg-violet-700  hover:bg-violet-400 p-2 rounded duration-200"
                href={heading.link}
              >
                <div className="inline-flex items-center">
                  <i className="text-white text-2xl cursor-pointer mr-2 block float-left">
                    {heading.logo}
                  </i>
                  <h5
                    className={`text-white text-xl origin-left duration-300 ${
                      !open && "scale-0"
                    }`}
                  >
                    {heading.heading}
                  </h5>
                </div>
                <div>
                  <IoIosArrowForward
                    className={`text-white ${
                      !open && "scale-0"
                    } focus:scale-0 `}
                  />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={`absolute bottom-4 duration-300 ${!open && "scale-0"}`}>
        <img src={profile} alt="profile_pic" className="w-12 h-12 rounded-full" />
      </div>
      <div className={`flex items-center bg-slate-700 p-2 rounded absolute bottom-4 w-60 duration-300 cursor-pointer ${!open && "scale-0"}`}>
        <div className="pr-2">
          <img src={profile} alt="profile_pic" className="w-12 h-12 rounded-full" />
        </div>
        <div className="inline-flex items-center justify-between">
          <div>
            <h6 className="text-white">Gokulpradap</h6>
            <p className="text-light-white text-sm">Project Manager</p>
          </div>
          <div>
            <IoIosArrowDown className="text-light-white ml-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
