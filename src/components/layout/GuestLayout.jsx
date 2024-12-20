import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


function GuestLayout() {
    return (
    <>
      {/* Navbar Section */}
      <header>
          <nav className="navbar navbar-expand-lg bg-white fixed-top navbar-light p-3 shadow-sm">
            <div className="container">
              <Link className="navbar-brand" to="/">
                <img src="./src/assets/image-removebg-preview (4).png" alt="logo" style={{ height: 60 }} />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link mx-2 text-uppercase" to="/AboutUs">
                      About us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link mx-2 text-uppercase" to="/ContactUs">
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ACCOUNT
                    </a>
                    <ul className="dropdown-menu text-center">
                      <li>
                        <Link className="dropdown-item" to="/SignUp">
                          SIGN UP
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/SignIn">
                          SIGN IN
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

      {/* Main content */}
      <main>
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="container-fluid text-lg-start text-muted">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            {/* Social media links */}
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
              <a href="/" className="me-4 text-reset">
                <i className="bi bi-facebook fs" />
              </a>
              <a href="/" className="me-4 text-reset">
                <i className="bi bi-twitter-x" />
              </a>
              <a href="/" className="me-4 text-reset">
                <i className="bi bi-google" />
              </a>
              <a href="/" className="me-4 text-reset">
                <i className="bi bi-instagram" />
              </a>
              <a href="/" className="me-4 text-reset">
                <i className="bi bi-linkedin" />
              </a>
              <a href="/" className="me-4 text-reset">
                <i className="bi bi-github" />
              </a>
            </div>
          </section>
          <section>
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <img src="./src/assets/image-removebg-preview (4).png" alt="" style={{ height: 50 }} />
                  </h6>
                  <p>Here you can use rows and columns to organize your footer content.</p>
                </div>
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p><i className="bi bi-house" /> Philippines, PH 10012</p>
                  <p><i className="bi bi-envelope" /> ExpenseWize@gmail.com</p>
                  <p><i className="bi bi-telephone" /> + 63 123 456 78</p>
                </div>
              </div>
            </div>
          </section>
          <div className="text-center p-4">© 2024 Copyright:
            <Link className="text-reset" to="/">ExpenseWize</Link>
          </div>
        </footer>
    </>
  );
}

export default GuestLayout;