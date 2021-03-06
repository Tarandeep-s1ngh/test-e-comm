
import "../Navbar/navbar.css";

export const Footer = () => {
    return(
        <footer className="footer">
          <div className="footer-above">
            <div className="flex-row">
            <div>
              <div className="h3 nav-txt">
                <a className="footer-icon" href="">
                  <i className="fas fa-store"></i> Sheh Mart
                </a>
              </div>
              
              <address className="mt-1">123 Market St. #28</address>
              <address>Jalandhar, Punjab</address>
              <address>144001</address>
            </div>

              <div className="flex-row f-grow justify-se">
                <div className="flex-col">
                  <a
                      className="link"
                    >About us</a>
                  <a
                      className="link"
                    >Work with us</a>
                  <a
                      className="link"
                    >Shipping</a>
                  <a
                      className="link"
                    >Customer stories</a>
                </div>

                <div className="flex-col">
                    <a
                      className="link"
                      href="mailto: taran.s1608@gmail.com"
                      target="_blank"
                    >
                      <i className="fas fa-at"></i> Contact Us
                    </a>
                    <a
                      className="link"
                      href="https://twitter.com/Tarandeep_s1ngh"
                      target="_blank"
                    >
                      <i className="fab fa-twitter"></i> Twitter
                    </a>
                    <a
                      className="link"
                      href="https://www.linkedin.com/in/tarandeep-s1ngh/"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a
                      className="link"
                      href="https://github.com/Tarandeep-s1ngh "
                      target="_blank"
                    >
                      <i className="fab fa-github"></i> GitHub
                    </a>
                </div>
              </div>
              <div className="flex-col pt-0p5">
                  <p>+91 976346 09827</p>
                  <p className="mt-1">Contact: taran.s1608@gmail.com </p>
                </div>
            </div>
          </div>

          <div className="footer-below mt-1">
            <span className="t0p75">
              <a href="https://twitter.com/Tarandeep_s1ngh" target="_blank">
                <i className="fa-regular fa-copyright"></i> Copyright 2022 -
                Tarandeep Singh
              </a>
            </span>
          </div>
        </footer>
    )
}