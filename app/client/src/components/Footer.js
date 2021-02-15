import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <section className="foot">
      <nav className="footer bg-dark">
        <ul>
          <li className="navLi"><Link to="#">Mobile App</Link></li>
          <li className="navLi"><Link to="#">Community</Link></li>
          <li className="navLi"><Link to="/about">About Triptych</Link></li>
          <li className="navLi"><Link to="#">Help desk</Link></li>
          <li className="navLi"><Link to="#">Blog</Link></li>
          <li className="navLi"><Link to="#">Resources</Link></li>
        </ul>
       
      </nav>
      <hr/>
      <div className="icons my-1">
        <Link to="#">
          <i className="fas fa-globe fa-2x"></i>
        </Link>
        <Link to="#">
          <i className="fab fa-twitter fa-2x"></i>
        </Link>
        <Link to="#">
          <i className="fab fa-facebook fa-2x"></i>
        </Link>
        <Link to="#">
          <i className="fab fa-linkedin fa-2x"></i>
        </Link>
        <Link to="#">
          <i className="fab fa-instagram fa-2x"></i>
        </Link>
      </div>
      <br/>
      <div className="copyright"><p>© Triptych 2020</p></div>
    </section>
  )
}

export default Footer;