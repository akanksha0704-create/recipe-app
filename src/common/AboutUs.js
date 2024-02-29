import React from 'react';

function AboutUs() {
  return (
    <>
      <div className='container aboutus-container'>
        <div className='row'>
          <h1 className='text-highlight text-center playfair-display my-5 mt-0'>
            About us
          </h1>
          <div className='col-md-6 text-center d-flex align-items-center justify-content-center'>
            <img
              src='./images/logo.png'
              alt=''
              className='aboutus-logo img-fluid'
            />
          </div>
          <div className='col-md-6 text-center text-md-justify roboto-black d-flex align-items-center'>
            <p>
              "At Culina Share, we are passionate about bringing people together
              through the joy of cooking and sharing delicious recipes. Our
              mission is to inspire and empower culinary enthusiasts of all
              levels to explore their creativity in the kitchen, discover new
              flavors, and create memorable dining experiences. Whether you're a
              seasoned chef or a novice cook, Culina Share is your go-to
              destination for culinary inspiration, helpful tips, and a vibrant
              community of food lovers. Join us on this flavorful journey as we
              celebrate the art of cooking and the joy of sharing meals with
              loved ones."
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
