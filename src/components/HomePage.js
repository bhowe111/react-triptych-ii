import React, { Component } from 'react';
import UploadForm from './UploadForm';
import Brand from '../img/triptych_brand_white.png';

const HomePage = () => (
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
    <div className="home-page">
      <UploadForm />
    </div>
  </section>
);

export default HomePage;
