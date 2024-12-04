import "./Social.css"
import {socialHandles} from "../../data"
import { cssPerfectShape, convertHexToRgba } from "../../ulti";
const Social = () => {
  return (
    <div className="social">
      {socialHandles.map((route,index)=>(
        <a href={route.link} 
          target="_blank" 
          className="icon" style={{...cssPerfectShape(40,40),background: convertHexToRgba("--primary",0.2)}} key={index}>
            <route.icon />
        </a>
      ))}
    </div>
  )
}

export default Social