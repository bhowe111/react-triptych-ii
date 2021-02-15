import React from 'react';
import Brand from '../img/triptych_brand_white.png';
import Navbar from './Navbar';

class About extends React.Component {
  state = {};

  render() {
    return (
      <>
        <Navbar />
        <section className="about">
          <div className="dark-overlay">
            <div className="landing-inner">
              <h1 className="x-large">
                <img src={Brand} alt="triptych logo" />
              </h1>
              <div>
                <p className="lead">trip·tych /ˈtriptik/</p>
                <div className="left-align">
                  <p>
                    <small>
                      noun
                      <br />
                      a picture or relief carving on three panels, typically
                      hinged together side by side and used as an altarpiece.
                      <br />
                      "a triptych depicting Mick Jagger's moves"
                      <br />a set of three associated artistic, literary, or
                      musical works intended to be appreciated together.
                    </small>
                  </p>
                  <br />
                </div>
              </div>
              <div className="buttons">
                <a href="/register" className="btn btn-primary">
                  Register
                </a>
                <a href="/login" className="btn btn">
                  Login
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;
