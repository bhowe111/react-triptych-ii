import React from 'react';
import Navbar from './Navbar';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <section className="container about">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="large text-primary">Dashboard</h1>
            <p className="lead">
              <i className="fas fa-user"></i> Welcome User
            </p>
            <div className="dash-buttons">
              <a href="/edituser/:id" className="btn">
                <i className="fas fa-user-circle text-primary"></i> Edit Profile
              </a>
            </div>

            <div className="my-2">
              <button className="btn btn-danger">
                <i className="fas fa-user-minus"></i> Delete My Account
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
