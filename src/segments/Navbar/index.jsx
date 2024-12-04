import DataWaveLogo from "../../components/DataWaveLogo"
import "./Navbar.css"
import {navRoutes} from "../../data";
import { Link } from "react-scroll";
import Social from "../../components/Social";
import { CgMenuRight } from "react-icons/cg";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";
// social is missing 's' key

const Navbar = () => {

  const [open,setOpen] = useState(false)

  return (
    <>
      <Sidebar open={open} onClose={()=>setOpen(!open)} />
      <nav id="navbar">
        <DataWaveLogo />
        <div className="route-wrapper">
          {
          navRoutes.map(((route,index)=>(
            <Link 
              to={route.id} 
              className="route" 
              activeClass="active" 
              smooth={true} spy={true} 
              offset={-50} 
              key={index}
            > 
              {route.name}
            </Link>
          )))
          }
        </div>
        <Social />
        <div className="menu" onClick={()=>setOpen(!open)}>
          <CgMenuRight />
        </div>
      </nav>
    </>
    
  )
}

export default Navbar
