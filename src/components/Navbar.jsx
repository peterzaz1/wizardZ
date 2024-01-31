import { useState } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center ">
      <span className="text-2xl font-semibold">WizardZ</span>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className=" font-normal cursor-pointer
            text-[16px] text-black mr-10"
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <button className=" hidden sm:block py-3 px-4 border border-black rounded-md">
        Request a quote
      </button>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
          src={toggle ? close : menu}
          alt="menu"
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 py-6 bg-black-gradient absolute top-20 right-0
            mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul
            className="list-none flex flex-col 
           justify-end items-center flex-1"
          >
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className=" font-normal cursor-pointer text-[16px] mb-4 text-white
                "
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li>
              <button className="py-2 px-3 border text-black bg-white rounded-md">
                Request a quote
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
