import { NavLink } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
    <div>
    

<footer className="footer">

  <div className="footer-content">

    <div className="footer-brand">

      <h3>EVORA</h3>

      <p>
        Empowering the next generation to learn,
        create, and explore technology.
      </p>

    </div>


    <div className="footer-links">

      <div>
        <h4>Explore</h4>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </div>


      <div>
        <h4>Company</h4>

        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>


      <div>
        <h4>Get Started</h4>

        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Start Learning</NavLink>
      </div>

    </div>

  </div>


  <div className="footer-bottom">

    <p>
      © 2026 Evora. All rights reserved.
    </p>

    <p>
      Learn. Create. Explore.
    </p>

  </div>

</footer>
    </div>
  )
}

export default Footer
