import React from "react";
import MessageList from './MessageList';
/* import ContactForm from "./contact-form-app/ContactForm"; */
const Home = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <ul className="social-icons pt-3">
            <li className="social-item">
              <a
                className="social-link text-light"
                href="https://twitter.com/aditya_09__?t=y3KhHgUbnI_0a2jNTInkqQ&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ti-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social-item">
              <a
                className="social-link text-light"
                href="https://www.instagram.com/_addy_09__/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ti-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li className="social-item">
              <a
                className="social-link text-light"
                href="https://github.com/Asasane"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ti-github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <div className="header-content">
            <h4 className="header-subtitle">Hello, I am</h4>
            <h1 className="header-title">Aditya Sasane</h1>
            <h6 className="header-mono">Computer Science and Engineering Student</h6>
            <button className="btn btn-primary btn-rounded">
              <i className="ti-printer pr-2"></i>
              <a
                href="https://firebasestorage.googleapis.com/v0/b/contactform-8f433.appspot.com/o/Resume.pdf?alt=media&token=e6e2dd53-30d4-4972-b13c-8983e636e8e6"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </header>
      
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
        <div className="container">
          <button
            className="navbar-toggler ml-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="#home" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a href="#resume" className="nav-link">Resume</a>
              </li>
              <li className="nav-item">
              <a href="/contact-form-app" target="_blank" className="nav-link">Contact</a>
              </li>
            </ul>
            <ul className="navbar-nav brand">
              <img src="assets/imgs/avatar.jpg" alt="Aditya" className="brand-img" />
              <li className="brand-txt">
                <h5 className="brand-title">Aditya</h5>
                <div className="brand-subtitle">Computer Science Student</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <div id="about" className="row about-section">
          <div className="col-lg-4 about-card">
            <h3 className="font-weight-light">Who am I?</h3>
            <span className="line mb-5"></span>
            <h5 className="mb-3">A Computer Science & Engineering Student (SGU)</h5>
            <p className="mt-20">
              A Computer Science enthusiast interested in Algorithms, Software development, and Web Development
            </p>
            <button className="btn btn-outline-danger">
              <i className="icon-down-circled2"></i>
              <a
                href="https://firebasestorage.googleapis.com/v0/b/contactform-8f433.appspot.com/o/Resume.pdf?alt=media&token=e6e2dd53-30d4-4972-b13c-8983e636e8e6"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "black" }}
              >
                Download My CV
              </a>
            </button>
          </div>
          <div className="col-lg-4 about-card">
            <h3 className="font-weight-light">Personal Info</h3>
            <span className="line mb-5"></span>
            <ul className="mt40 info list-unstyled">
              <li><span>Birthdate</span>: 09/05/2002</li>
              <li><span>Email</span>: sasaneaditya9@gmail.com</li>
              <li><span>Phone</span>: +91 8668385877</li>
              <li><span>Skype</span>: Aditya Sasane</li>
              <li><span>Address</span>: 192 A-Ward Shivaji Peth, Kolhapur (416012)</li>
            </ul>
            <ul className="social-icons pt-3">
              <li className="social-item">
                <a
                  className="social-link"
                  href="https://twitter.com/aditya_09__?t=y3KhHgUbnI_0a2jNTInkqQ&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ti-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li className="social-item">
                <a
                  className="social-link"
                  href="https://instagram.com/_addy_09__?igshid=NTc4MTIwNjQ2YQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ti-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li className="social-item">
                <a
                  className="social-link"
                  href="https://github.com/Asasane"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ti-github" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 about-card">
            <h3 className="font-weight-light">My Expertise</h3>
            <span className="line mb-5"></span>
            <div className="row">
              <div className="col-1 text-danger pt-1">
                <i className="ti-widget icon-lg"></i>
              </div>
              <div className="col-10 ml-auto mr-3">
                <h6>Coding Languages</h6>
                <p className="subtitle">C, C++, Java, Adv. Java</p>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-1 text-danger pt-1">
                <i className="ti-paint-bucket icon-lg"></i>
              </div>
              <div className="col-10 ml-auto mr-3">
                <h6>Web Development</h6>
                <p className="subtitle">HTML, CSS, Bootstrap, React</p>
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col-1 text-danger pt-1">
                <i className="ti-stats-up icon-lg"></i>
              </div>
              <div className="col-10 ml-auto mr-3">
                <h6>Softwares</h6>
                <p className="subtitle">
                  Visual Studio, MS Office, Jupyter notebook, Eclipse, Android studio
                </p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section" id="resume">
      <div className="container">
        <h2 className="mb-5">
          <span className="text-danger">My</span> Resume
        </h2>

        {/* Main Row for aligning sections horizontally */}
        <div className="row">
          {/* My Education Section */}
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-header">
                <div className="mt-2">
                  <h4>My Education</h4>
                  <span className="line"></span>
                </div>
              </div>
              <div className="card-body">
                <h6 className="title text-danger">2017 - SSC(X)</h6>
                <p>Secondary School Certificate (10th Std)</p>
                <p className="subtitle">@ Maharashtra High School, Kolhapur</p>
                <p className="subtitle">Batch: 2017 March</p>
                <p className="subtitle">Marks: 60%</p>
                <button className="btn btn-primary btn-rounded">
                  <i className="ti-printer pr-2"></i>
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/contactform-8f433.appspot.com/o/SSC%20Marksheet.pdf?alt=media&token=38641c77-3f00-4bc7-b7cd-86fb2d7c1105"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                  >
                    Download
                  </a>
                </button>
                <hr />
                <h6 className="title text-danger">Diploma in Computer Engineering (MSBTE)</h6>
                <p>Diploma Certificate (UG)</p>
                <p className="subtitle">@ Dr. D Y Patil Polytechnic, Kolhapur</p>
                <p className="subtitle">Batch: 2017 - 2021</p>
                <p className="subtitle">Marks: 89.6%</p>
                <button className="btn btn-primary btn-rounded">
                  <i className="ti-printer pr-2"></i>
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/contactform-8f433.appspot.com/o/Diploma%20Last%20year.pdf?alt=media&token=33807714-f26d-4f8c-92ed-ec8f5c0e6b9a"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                  >
                    Download
                  </a>
                </button>
                <hr />
                <h6 className="title text-danger">Computer Science and Engineering (UG)</h6>
                <p>Under Graduate (Pursuing)</p>
                <p className="subtitle">@ Sanjay Ghodawat University, Atigre</p>
                <p className="subtitle">Batch: 2021 - Pursuing(2025)</p>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-header">
                <div className="mt-2">
                  <h4>Projects</h4>
                  <span className="line"></span>
                </div>
              </div>
              <div className="card-body">
                <h6 className="title text-danger">
                  <a href="https://github.com/Asasane/AMA-Grocery-store-project.git" target="_blank" rel="noopener noreferrer">
                    Online Grocery Store with Payment Gateway
                  </a>
                </h6>
                <span className="line_long" style={{ marginBottom: '15px' }}></span>
                <p style={{ marginBottom: '3px' }}>2020</p>
                <p className="subtitle">
                  Online grocery purchase using webapp, Multiple functionalities like Admin actions, Payment Gateway, Cart, Order history, etc.
                </p>
                <hr />
                <h6 className="title text-danger">
                  <a href="https://github.com/Asasane/Yoga-Place.git" target="_blank" rel="noopener noreferrer">
                    Yoga Place
                  </a>
                </h6>
                <span className="line_long" style={{ marginBottom: '15px' }}></span>
                <p>2022</p>
                <p className="subtitle">
                  A website for Yoga Institute which gives information about daily Yoga benefits with photo gallery, video gallery, contact form.
                </p>
                <hr />
                <h6 className="title text-danger">
                  <a href="https://github.com/Asasane/Antivirus-SGU-mini-project.git" target="_blank" rel="noopener noreferrer">
                    Antivirus software using python
                  </a>
                </h6>
                <span className="line_long" style={{ marginBottom: '15px' }}></span>
                <p>2022 (A mini project)</p>
                <p className="subtitle">
                  It is a simple antivirus software which has multiple functionalities like scanning a file or scanning the entire system.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Skills Section */}
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-header">
                <div className="pull-left">
                  <h4 className="mt-2">Professional Skills</h4>
                  <span className="line"></span>
                </div>
              </div>
              <div className="card-body pb-2">
                <ul>
                  <li style={{ fontSize: 'large' }}>Communication</li>
                  <li style={{ fontSize: 'large' }}>Collaboration</li>
                  <li style={{ fontSize: 'large' }}>Adaptability</li>
                  <li style={{ fontSize: 'large' }}>Teamwork</li>
                  <li style={{ fontSize: 'large' }}>Decision Making</li>
                  <li style={{ fontSize: 'large' }}>Problem Solving</li>
                  <li style={{ fontSize: 'large' }}>Positive Attitude</li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="pull-left">
                  <h4 className="mt-2">Languages</h4>
                  <span className="line"></span>
                </div>
              </div>
              <div className="card-body pb-2">
                <h6>English</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>Hindi</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <h6>Marathi</h6>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '80%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
              
          </div>
          <div className="card">
              <div className="card-header">
                <div className="pull-left">
                  <h4 className="mt-2">Contact Form Messages</h4>
                  <span className="line_long"></span>
                </div>
              </div><div className="App">
           {/*  <h1></h1> */}
              <MessageList />
            </div>
            </div>
          
        
          <div className="col-md-6 col-lg-4">
            
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Footer */}
      <footer className="footer py-3">
        <div className="container">
          <p className="small mb-0 text-light">
            &copy; <script>document.write(new Date().getFullYear())</script> Created With <i className="ti-heart text-danger"></i> By Aditya
          </p>
        </div>
      </footer>

      {/* Include necessary scripts here */}
    </>
  );
};

export default Home;
