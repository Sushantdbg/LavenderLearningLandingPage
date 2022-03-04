import React from 'react';
import './Home.css';
import iphone15mockup from './assets/notmockup.png';
import openforall from "./assets/allin.png";
import multiplatservice from './assets/multiplat.png';
import beginnerfriendly from './assets/begginer.png';
import person1photo from './assets/person1.png';
import person2photo from './assets/person2.png';
import person3photo from './assets/person3.png';
import person4photo from './assets/person4.png';

export default function Home(){
    return (
        <>
          <section className="title">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 quote">
              <h1>Learning for you at your own pace</h1>
              <button type="button" className="btn btn-outline-dark btn-lg download-button-margin"><i className="fab fa-apple"> </i> Get on App Store</button>
              <button type="button" className="btn btn-outline-dark btn-lg download-button-margin"><i className="fab fa-google-play"> </i> Get on Play Store</button>
            </div>
            <div className="col-lg-6 iphonemockup title-image">
              <img className="mockup" src={iphone15mockup} alt="iphone15-mockup" />
            </div>
          </div>
        </div>
</section>
      <div className="sec2 row">
        <div className="sec2items col-lg-4 ">
          <img className="sec2img" src={openforall} alt="open for all" />
          <h3 className="sec2heading">Open for <b>ALL</b></h3>
          <p className="descsec2">Every part of service is free and accessible for all</p>
        </div>
        <div className="sec2items col-lg-4">
          <img className="sec2img" src={multiplatservice} alt="multiplat service" />
          <h3 className="sec2heading">Seemless Cross-Platform Access</h3>
          <p className="descsec2">Our aim form beginning was to provide the same quality experience across all devices</p>
        </div>
        <div className="sec2items col-lg-4">
          <img className="sec2img" src={beginnerfriendly} alt="beginner friendly" />
          <h3 className="sec2heading">Begginer Friendly</h3>
          <p className="descsec2">The cources provided here are curated to be begginer friendly</p>
        </div>
      </div>
      <div className="sec3">
        <section className="testimonial">
          <div id="carouselExampleIndicators" className="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-interval="3333" data-pause="hover">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h2 className="sec3desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit elementum nibh, at clementum sed.</h2>
                <img className="testimonialpic" src={person1photo} alt="person 1 photo" />
                <em>Earth, Solar System</em>
              </div>
              <div className="carousel-item">
                <h2 className="sec3desc">Morbi augue lectus, tincidunt non lorem vitae, iaculis vehicula est. Nam facilisis iaculis suscipit. </h2>
                <img className="testimonialpic" src={person2photo} alt="person 2 photo" />
                <em>Jupiter, Solar System</em>
              </div>
              <div className="carousel-item">
                <h2 className="sec3desc">Nunc lobortis sapien in massa mattis vulputate. Aenean in justo dignissim, gravida felis non, eleifend risus. Integer id justo quis varius a id enim.</h2>
                <img className="testimonialpic" src={person3photo} alt="person 3 photo" />
                <em>Mars, Solar System</em>
              </div>
              <div className="carousel-item">
                <h2 className="sec3desc">Fusce vitae elementum. In hac habitasse platea dictumst. Aliquam turpis. </h2>
                <img className="testimonialpic" src={person4photo} alt="person 4 photo" />
                <em>Uranus, Solar System</em>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </section>
      </div>
        </>
    )
}
