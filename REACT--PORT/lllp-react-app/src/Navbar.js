import React from 'react';


export default function Navbar(){
    return (
        <>
        <section id="title">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
            <a class="navbar-brand" href="#"><img class="company-logo-title-size" src="assets/lavenderlogo.png" alt=" Lavender Learning" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item ms-auto">
                  <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item ms-auto">
                  <a class="nav-link" href="Services.html">Services</a>
                </li>

                <li class="nav-item ms-auto">
                  <a class="nav-link" href="FAQ.html">FAQ</a>
                </li>
                <li class="nav-item ms-auto">
                  <a class="nav-link" href="AboutPage.html">About</a>
                </li>
                <li class="nav-item ms-auto">
                  <a class="nav-link" href="index.html#anchor2footer">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
          </section>
        </>
    )
}
