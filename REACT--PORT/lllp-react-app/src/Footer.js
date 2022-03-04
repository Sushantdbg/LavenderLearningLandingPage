import React from 'react';


export default function Footer(){
    return (
        <>
        <div id="anchor2footer" class="footer-dark">
          <footer>
            <div class="container">
              <div class="row">
                <div class="col-md-4 col-6 item">
                  <h3>Services</h3>
                  <ul>
                    <li><a href="#">Lavenderpedia</a></li>
                    <li><a href="#">LavenderGames</a></li>
                    <li><a href="#">Talk2Lavender</a></li>
                    <li><a href="#">SortedByLavender</a></li>

                  </ul>
                </div>

                <div class="col-md-4 col-6 item">
                  <h3>About</h3>
                  <ul>
                    <li><a href="#">Company</a></li>
                    <li><a href="#">Team</a></li>
                    <li><a href="#">Careers</a></li>
                  </ul>
                </div>
                <div class="col-md-4 item text">
                  <h3>LavenderLearning.com</h3>
                  <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus.</p>
                </div>
                <div class="col item social"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-youtube"></i></a><a href="#"><i class="fa fa-instagram"></i></a><a href="#"><i
                      class="fa fa-google"></i></a></div>
              </div>
              <p class="copyright">LavenderLearning.com © 2021</p>
            </div>
          </footer>
        </div>
        </>
    )
}
