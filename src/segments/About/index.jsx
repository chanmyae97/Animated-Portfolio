import "./About.css"
import VRIMage from "../../assets/vr.png"

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="left-column">
          <div className="spotlight" />
          <div className="vision-container">
            
            <div className="vision-item">
              <div className="vision-content">
                <h2>Our Vision</h2>
                <h4 className="title">
                Transforming Technology into Progress
                </h4>
                <p className="description">
                  Our vision is to empower businesses with practical, cutting-edge IT solutions that drive growth, streamline processes, and enhance competitiveness.
                </p>
              </div>
              <div className="image-container">
              <img src={VRIMage} alt="" className="" />
              </div>
            </div>

            <div className="vision-item">
              <div className="vision-content">
                <h2>Who We are</h2>
                <h4 className="title">
                Transforming Technology into Progress
                </h4>
                <p className="description">
                  Our vision is to empower businesses with practical, cutting-edge IT solutions that drive growth, streamline processes, and enhance competitiveness.
                </p>
              </div>
              <div className="image-container">
              <img src={VRIMage} alt="" className="" />
              </div>
            </div>

          </div>
        </div>
        <div></div>
      </div>
    </section>
  )
}

export default About
