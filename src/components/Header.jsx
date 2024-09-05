import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Logo from "../assets/navLogo.svg";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    console.log("from use effect");
  }, [mobileMenuOpen]);

  const handelMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div>
        <div className="flex flex-row m-4 justify-between items-center">
          <Link to="/" className="w-16 ">
            <img src={Logo} alt="logo" className="w-24"></img>
          </Link>

          <div className="flex">
            <nav
              className={`${mobileMenuOpen ? "block" : "hidden"} flex md:flex`}
            >
              <ul className="absolute right-0 left-0 top-14 px-4 bg-blue-50 py-6 gap-4 flex flex-col md:static md:flex md:flex-row md:gap-6 md:bg-inherit ">
                <li>
                  <Link
                    to="/profile"
                    className="text-md text-slate-800 hover:text-green-500 font-medium"
                    onClick={handelMenuClose}
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/create"
                    className="text-md text-slate-800 hover:text-green-500 font-medium"
                    onClick={handelMenuClose}
                  >
                    Create post
                  </Link>
                </li>

                <li>
                  <Link
                    to="/authors"
                    className="text-md text-slate-800 hover:text-green-500 font-medium"
                    onClick={handelMenuClose}
                  >
                    Authors
                  </Link>
                </li>
                <li>
                  <Link
                    to="/logout"
                    className="text-md text-slate-800 hover:text-green-500 font-medium"
                    onClick={handelMenuClose}
                  >
                    Logout
                  </Link>
                </li>
                <li></li>
              </ul>
            </nav>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="block md:hidden"
            >
              <Menu
                size={24}
                color="blue"
                className={`${mobileMenuOpen ? "hidden" : "block"}`}
              />
              <X
                size={24}
                color="blue"
                className={`${mobileMenuOpen ? "block" : "hidden"}`}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
