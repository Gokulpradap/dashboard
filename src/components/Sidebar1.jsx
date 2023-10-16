import { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import { BiMenu } from 'react-icons/bi';
import { navHeading } from '../Data';
import profile from "../assets/profile.png";
import { IoIosArrowDown } from 'react-icons/io';
import { TbHexagonLetterQ } from 'react-icons/tb';
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <BiMenu onClick={handleShow} className="text-4xl ml-10" />

      <Offcanvas style={{ background: '#05003c' }} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton className="close">
          <Offcanvas.Title style={{ color: '#fff' }}> <TbHexagonLetterQ/> Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <ul className="mt-10">
              {navHeading.map((heading, index) => (
                <li className="my-2 " key={index}>
                  <a
                    className="flex items-center justify-between no-underline focus:bg-violet-700  hover:bg-violet-400 p-2 rounded duration-200"
                    href={heading.link}
                  >
                    <div className="inline-flex items-center">
                      <i className="text-white text-2xl cursor-pointer mr-2 block float-left">
                        {heading.logo}
                      </i>
                      <h5 className={`text-white text-xl origin-left duration-300 }`}>{heading.heading}</h5>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
         
          <div className="w-80 flex flex-col items-center justify-between md:flex-row bg-slate-700 p-2 rounded mt-4 absolute bottom-4 cursor-pointer">
            <div className="flex items-center">
              <img src={profile} alt="profile_pic" className="w-12 h-12 rounded-full mr-5" />
              <div className='mt-2'>
                <h6 className="text-white">Gokulpradap</h6>
                <p className="text-light-white text-sm">Project Manager</p>
              </div>
            </div>

            <div className="inline-flex items-center justify-between">
              
              <div>
                <IoIosArrowDown className="text-light-white ml-2" />
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;