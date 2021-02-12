import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { beginAddPhoto } from '../actions/photos';
import Navbar from './Navbar';

const UploadForm = ({ errors, dispatch }) => {
  const [photo, setPhoto] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErroMsg] = useState(null);

  useEffect(() => {
    setErroMsg(errors);
  }, [errors]);

  useEffect(() => {
    setErroMsg(''); // reset error message on page load
  }, []);

  const handleOnChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (photo) {
      setErroMsg('');
      dispatch(beginAddPhoto(photo));
      setIsSubmitted(true);
    }
  };

  return (
    <>
      <Navbar />
      <section className="container about">
        <div className="dark-overlay">
          <div className="landing-inner">
            {errorMsg && errorMsg.upload_error ? (
              <p className="errorMsg centered-message">
                {errorMsg.upload_error}
              </p>
            ) : (
              isSubmitted && (
                <p className="successMsg centered-message">
                  Photo uploaded successfully.
                </p>
              )
            )}
            <Form
              onSubmit={handleFormSubmit}
              method="post"
              encType="multipart/form-data"
              className="upload-form"
            >
              <Form.Group>
                <Form.Label>Choose photo to upload</Form.Label>
                <Form.Control
                  type="file"
                  name="photo"
                  className="choose-file"
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className={`${!photo ? 'disabled submit-btn' : 'submit-btn'}`}
                disabled={photo ? false : true}
              >
                Upload
              </Button>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  photos: state.photos || [],
  errors: state.errors || {}
});

export default connect(mapStateToProps)(UploadForm);
