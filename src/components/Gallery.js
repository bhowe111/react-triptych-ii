/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { startLoadPhotos } from '../actions/photos';
import Photo from './Photo';
import Navbar from './Navbar';

const Gallery = ({ errors, photos, dispatch }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(startLoadPhotos());
  }, []);

  useEffect(() => {
    if (photos.length > 0) {
      setIsLoading(false);
    }
  }, [photos]);

  return (
    <div>
      <Navbar />
      <section className="gallery">
        <div className="dark-overlay">
          <div className="landing-inner">
            {/* <div className="gallery-row">
              <div className="gallery-column"> */}
            <div className="photos-list">
              {errors && errors.get_error && (
                <p className="errorMsg centered-message">{errors.get_error}</p>
              )}
              {isLoading ? (
                <div className="loading-msg centered-message">Loading...</div>
              ) : (
                photos.map((photo) => <Photo key={photo._id} id={photo._id} />)
              )}
            </div>
            {/* </div>
      </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state) => ({
  photos: state.photos || [],
  errors: state.errors || {}
});

export default connect(mapStateToProps)(Gallery);
