import Logo from "./Logo";
import { FiSearch } from "react-icons/fi";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Header() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  function handleOpenSearchbar() {
    setOpenSearch(true);
  }

  function toggleNavbar() {
    setOpenNav((x) => !x);
  }

  function handleNavClick() {
    setOpenNav(false);
  }

  return (
    <header className="fixed left-0 right-0 top-0 flex items-center bg-blue-950 px-2 py-4 z-50">
      <div className="flex items-center justify-between w-full">
        <Logo
          size="text-xl"
          className={openSearch ? "opacity-0 lg:opacity-100" : "opacity-100"}
          colour="text-white"
        />
        <div className="flex items-center gap-4 text-white">
          <Navbar
            closeNavbar={handleNavClick}
            className={`fixed w-1/2 left-0 top-0 bottom-0 bg-blue-700/90 transition-all duration-900 text-white z-50 py-7 ${
              openNav ? "translate-x-0" : "-translate-x-[100%] md:translate-x-0"
            } md:py-0 md:relative md:bg-inherit md:w-auto`}
          />
          <form
            action=""
            className="flex items-center gap-2 rounded-full px-3 py-1 border-b border-b-blue-700 md:w-auto"
          >
            <input
              type="search"
              name=""
              id=""
              className={`${openSearch ? "w-full" : "w-0"} transition-all duration-1000`}
            />
            <FiSearch onClick={handleOpenSearchbar} />
          </form>
          <div className="p-1 bg-blue-700 lg:hidden">
            <button
              className="w-6 h-4 relative text-white "
              onClick={toggleNavbar}
            >
              <div className="w-6 h-0.5 absolute  top-0 bg-white" />
              <div className="w-6 h-0.5 absolute top-[7px] bg-white" />
              <div className="w-6 h-0.5 absolute bottom-0 bg-white" />
            </button>
          </div>
        </div>
      </div>

      {/* <Navbar /> */}
    </header>
  );
}
