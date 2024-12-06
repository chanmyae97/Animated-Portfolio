import DataWaveLogo from "../../components/DataWaveLogo";
import "./Navbar.css";
import { navRoutes } from "../../data";
import { Link } from "react-scroll";
import Social from "../../components/Social";
import { CgMenuRight } from "react-icons/cg";
import Sidebar from "../../components/Sidebar";
import { useMemo, useState } from "react";
import { convertHexToRgba } from "../../ulti";
// social is missing 's' key

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState (false);
  const dropNavbar =() =>{
    if(window.scrollY > 200){
      setDrop(true)
    }else{
      setDrop(false)
    }
  }

  // console.log("Sidebar open state:", open);

  useMemo(() =>{
    window.addEventListener("scroll",dropNavbar);
    return () => window.removeEventListener("scroll",dropNavbar);
  })

  // console.log("Drop", drop);
  return (
    <>
      <Sidebar open={open} onClose={() => setOpen(!open)} />
      {open && (
        <div className="sidebar-overlay" onClick={() => setOpen(!open)} />
      )}
      <nav id="navbar" className={drop ? "blur drop": ""} style={{background:convertHexToRgba('--bg-base',0.8)}}>
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
