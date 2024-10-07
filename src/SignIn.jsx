import './App.css';
import './SignIn.css';

function SignIn() {
  return (
    <>
      {/* styling  */}
      <link rel="stylesheet" href="style.css" />
      {/* font  */}
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans"
        rel="stylesheet"
        type="text/css"
      />
      {/* bootstrap  */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      {/* icons  */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
      />
      <title> Sign in | Spend Wise</title>
      <link rel="icon" type="image/x-icon" href="Images/rounded-1.png" />
      <link rel="stylesheet" href="SignIn.css" />
      <header>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg bg-white fixed-top navbar-light p-3 shadow-sm">
          <div className="container">
            {/* Logo */}
            <a className="navbar-brand" href="App.jsx">
              <img src="Images/logo.png" alt="logo" style={{ height: 60 }} />
            </a>
            {/* Toggler/collapsing button */}
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
            {/* Collapsible content */}
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              {/* Navigation links */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link mx-2 text-uppercase"
                    href="Dashboard.jsx"
                  >
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link mx-2 text-uppercase" href="AboutUs.jsx">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link mx-2 text-uppercase"
                    href="ContactUs.jsx"
                  >
                    contact-us
                  </a>
                </li>
              </ul>
              {/* Additional actions */}
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ACCOUNT
                  </a>
                  <ul className="dropdown-menu text-center">
                    <li>
                      <a className="dropdown-item" href="SignUp.jsx">
                        SIGN UP
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="SignIn.jsx">
                        SIGN IN
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* progress bar */}
        <div className="progress-container">
          <div className="progress-bar" id="myBar" />
        </div>
      </header>
      <main>
        <div
          className="container shadow my-5 p-5 rounded"
          style={{ backgroundColor: "white" }}
        >
          <div className="row text-center">
            <h1 style={{ fontSize: 50, fontWeight: "bolder" }}>
              Log in to your account
            </h1>
          </div>
          <div className="row py-5 ">
            <div className="col px-4">
              <img
                src="Images/login.jpeg"
                alt="sign up"
                className="img-fluid rounded"
              />
            </div>
            <div className="col py-5">
              <h2 style={{ fontSize: 30, fontWeight: "bolder" }}>
                Please enter your login information
              </h2>
              <form
                className="py-4"
                action="Dashboard.jsx"
                name="myForm"
                onSubmit="return validateForm()"
              >
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <span
                    id="emailError"
                    style={{ color: "red", visibility: "hidden" }}
                  >
                    *Email cannot be blank
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                  <div id="emailHelp" className="form-text">
                    We&apos;ll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <span
                      id="passError"
                      style={{ color: "red", visibility: "hidden" }}
                    >
                      *Password cannot be blank
                    </span>
                    {/* <span id="passError1" style="color: red; visibility:hidden;">*Password length should be minimum 8 characters.</span> */}
                    <input
                      type="password"
                      className="form-control"
                      id="pass"
                      placeholder="Password"
                    />
                    <div id="password" className="form-text">
                      Forget Password?{" "}
                    </div>
                  </div>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember me
                  </label>
                </div>
                <div className="row">
                  <button type="submit" className="btn btn-success btn-lg  my-4">
                    Submit
                  </button>
                </div>
                <div className="row text-center">
                  <div className="col-md-6">
                    <div className="row">
                      <button
                        type="button"
                        className="btn btn-outline-success btn-flat"
                      >
                        <i className="bi bi-google" />
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row m-0">
                      <button type="button" className="btn btn-outline-success ">
                        <i className="bi bi-facebook" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <footer className=" container-fluid text-lg-start  text-muted ">
        {/* Section: Social media */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* Left */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Right */}
          <div>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-facebook fs" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-twitter-x" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-google" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-instagram" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="bi bi-github" />
            </a>
          </div>
        </section>
        {/* Section: Links  */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3" />
                  <img src="Images/logo.png" alt="" style={{ height: 50 }} />
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              {/* Grid column */}
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="bi bi-house" /> New York, NY 10012, US
                </p>
                <p>
                  <i className="bi bi-envelope" />
                  info@example.com
                </p>
                <p>
                  <i className="bi bi-telephone" /> + 01 234 567 88
                </p>
                <p>
                  <i className="bi bi-printer" /> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-4">
          © 2024 Copyright:
          <a className="text-reset" href="#">
            Spend Wise
          </a>
        </div>
      </footer>
      {/* hidden div script  */}
      {/* fade in  */}
      {/* progress bar  */}
    </>

  );
}

export default SignIn;