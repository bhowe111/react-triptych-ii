import React from 'react';
import Brand from '../img/triptych_brand_white.png';
import Navbar from './Navbar';
import Footer from './Footer';

const HomePage = () => (
  <div>
    <Navbar />
    <section class="landing">
      <div class="dark-overlay">
        <div class="landing-inner">
          <h1 class="x-large">
            <img src={Brand} />
          </h1>
          <p class="lead">Curate your own art gallery.</p>
          <div class="buttons">
            <a href="/register" class="btn btn-primary">
              Register
            </a>
            <a href="/login" class="btn btn">
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default HomePage;
