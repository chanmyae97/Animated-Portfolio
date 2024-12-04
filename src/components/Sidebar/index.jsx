import "./Sidebar.css"
import { Link } from "react-scroll"
import { navRoutes } from "../../data"
import { FaTimes } from "react-icons/fa"
import { cssPerfectShape } from "../../ulti"

const Sidebar = ({open, onClose}) => {
  return (
    <div className={`sidebar ${open && "active"}`}>
      <div>
        <div className="top">
          <div className="close-btn"
          onClick={onClose}
          style={{...cssPerfectShape(40,40)}}>
            <FaTimes />
          </div>
        </div>
        <div className="middle">
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
      </div>
  </div>
  )
}

export default Sidebar
