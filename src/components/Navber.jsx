import React, { useState } from "react";
import Container from "./Container";
import { FaBars } from "react-icons/fa6";

const Navber = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className=" w-full bg-slate-300 p-3 z-[10000]">
        <Container className=" max-w-[1185px] flex items-center justify-between">
          <img src="/vite.svg" alt="" />
          <ul
            className={`absolute w-full bg-slate-300 duration-150 left-0 ${
              toggle ? "top-[64px] opacity-100" : " top-[-120px] opacity-0"
            } md:static lg:static md:flex lg:flex items-center justify-center gap-4 opacity-100`}
          >
            <li className=" group my-3 md:m-0 lg:m-0 relative">
              <a href="#" className=" group">
                Home
              </a>

              <ul className=" absolute w-[150px] p-3 bg-slate-300 duration-150 scale-y-0 origin-top group-hover:scale-y-100">
                <li>Nav Sub Menu</li>
                <li>Nav Sub Menu</li>
                <li>Nav Sub Menu</li>
              </ul>
            </li>
            <li className=" my-3 md:m-0 lg:m-0">
              <a href="https://github.com/rameem2003/react-tailwind-get-started">
                Repository
              </a>
            </li>
            <li className=" my-3 md:m-0 lg:m-0">
              <a href="#">Content</a>
            </li>
          </ul>

          <div className=" flex items-center gap-3">
            <a
              href="https://github.com/rameem2003"
              target="_blank"
              className=" bg-slate-700 px-7 py-2 font-medium text-white rounded-md duration-150 hover:bg-slate-900"
            >
              Github
            </a>

            <FaBars
              onClick={() => setToggle(!toggle)}
              className=" md:hidden lg:hidden"
              size={30}
            />
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navber;
