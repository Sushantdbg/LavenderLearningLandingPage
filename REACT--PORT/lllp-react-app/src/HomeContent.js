import React from 'react';


export default function HomeContent(){
    return (
        <>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 quote">
              <h1>Learning for you at your own pace</h1>
              <button type="button" class="btn btn-outline-dark btn-lg download-button-margin"><i class="fab fa-apple"> </i> Get on App Store</button>
              <button type="button" class="btn btn-outline-dark btn-lg download-button-margin"><i class="fab fa-google-play"> </i> Get on Play Store</button>
            </div>
            <div class="col-lg-6 iphonemockup title-image">
              <img class="mockup" src="assets/notmockup.png" alt="iphone15-mockup" />
            </div>
          </div>
        </div>
  
      <div class="sec2 row">
        <div class="sec2items col-lg-4 ">
          <img class="sec2img" src="assets/allin.png" alt="open for all" />
          <h3 class="sec2heading">Open for <b>ALL</b></h3>
          <p class="descsec2">Every part of service is free and accessible for all</p>
        </div>
        <div class="sec2items col-lg-4">
          <img class="sec2img" src="assets/multiplat.png" alt="multiplat service" />
          <h3 class="sec2heading">Seemless Cross-Platform Access</h3>
          <p class="descsec2">Our aim form beginning was to provide the same quality experience across all devices</p>
        </div>
        <div class="sec2items col-lg-4">
          <img class="sec2img" src="assets/begginer.png" alt="beginner friendly" />
          <h3 class="sec2heading">Begginer Friendly</h3>
          <p class="descsec2">The cources provided here are curated to be begginer friendly</p>
        </div>
      </div>
      <div class="sec3">
        <section class="testimonial">
          <div id="carouselExampleIndicators" class="carousel carousel-dark slide" data-bs-ride="carousel" data-bs-interval="3333" data-pause="hover">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <h2 class="sec3desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit elementum nibh, at clementum sed.</h2>
                <img class="testimonialpic" src="assets/person1.png" alt="person 1 photo" />
                <em>Earth, Solar System</em>
              </div>
              <div class="carousel-item">
                <h2 class="sec3desc">Morbi augue lectus, tincidunt non lorem vitae, iaculis vehicula est. Nam facilisis iaculis suscipit. </h2>
                <img class="testimonialpic" src="assets/person2.png" alt="person 2 photo" />
                <em>Jupiter, Solar System</em>
              </div>
              <div class="carousel-item">
                <h2 class="sec3desc">Nunc lobortis sapien in massa mattis vulputate. Aenean in justo dignissim, gravida felis non, eleifend risus. Integer id justo quis varius a id enim.</h2>
                <img class="testimonialpic" src="assets/person3.png" alt="person 3 photo" />
                <em>Mars, Solar System</em>
              </div>
              <div class="carousel-item">
                <h2 class="sec3desc">Fusce vitae elementum. In hac habitasse platea dictumst. Aliquam turpis. </h2>
                <img class="testimonialpic" src="assets/person4.png" alt="person 4 photo" />
                <em>Uranus, Solar System</em>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>
        </section>
      </div>
        </>
    )
}
