import DataWaveLogo from "../../components/DataWaveLogo";
import "./Navbar.css";
import { navRoutes } from "../../data";
import { Link } from "react-scroll";
import Social from "../../components/Social";
import { CgMenuRight } from "react-icons/cg";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";
// social is missing 's' key

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // console.log("Sidebar open state:", open);

  return (
    <>
      <Sidebar open={open} onClose={() => setOpen(!open)} />
      {open && (
        <div className="sidebar-overlay" onClick={() => setOpen(!open)}></div>
      )}
      <nav id="navbar">
        <DataWaveLogo />
        <div className="route-wrapper">
          {navRoutes.map((route, index) => (
            <Link
              to={route.id}
              className="route"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-50}
              key={index}
            >
              {route.name}
            </Link>
          ))}
        </div>
        <Social />
        <div
          className="menu"
          onClick={() => {
            setOpen(!open);
            // console.log("Menu button clicked, open state:", !open);
          }}
        >
          <CgMenuRight />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
