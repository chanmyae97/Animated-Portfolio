import "./Service.css"
import { services } from "../../data"
import { cssPerfectShape, convertHexToRgba } from "../../ulti"
import { Link } from "react-scroll"
import { FaArrowRightLong } from "react-icons/fa6"

const Service = () => {
  return (
    <section id="services">
      <div className="spotlight">
        <div className="container">
          <div className="section-header">
            <h3>Our Services</h3>
            <h2>Empowering Your Business with Tailored IT Solutions</h2>
          </div>

          <div className="services">
            {
              services.map((service,index) => (
                <div className="blur service" 
                style={{
                  background: convertHexToRgba("--bg-secondary", 0.1)
                }}
                key={index}> 
                  <div className="icon" 
                  style={{...cssPerfectShape(70,70), 
                  background: convertHexToRgba('--primary',0.1)}}>
                    <service.icon />
                  </div>
                  <div className="middle">
                    <h4 className="title">{service.title}</h4>
                    <p className="line-clamp-3 description">
                      {service.description}
                    </p>
                  </div>
                  <div className="bottom">
                    <Link to="service"  smooth={true} className="btn primary">Explore <FaArrowRightLong /></Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
