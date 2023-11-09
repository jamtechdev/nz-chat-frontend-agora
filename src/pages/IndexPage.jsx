// import React,{} from 'react';
// const Index = ()=>{
// return(<>
// <h1>Index Page</h1>
// </>)
// }
// export default Index;

import React from 'react';
import { Link } from "react-router-dom";
import "../styles/home.css";
import "../styles/grid.css";

export default function Home() {
  return (
    <>
      <header id="home">
        <div className="row">
          <nav>
            <div className="navbar-logo">
              <Link to="#" className="logo">
                Nzchat.
              </Link>
            </div>
            <div id="navbar">
              <ul>
                <li>
                  <Link to="#home">HOME</Link>
                </li>
                <li>
                  <Link to="#features">FEATURES</Link>
                </li>
                <li>
                  <Link to="#testimonial">TESTIMONIAL</Link>
                </li>
                <li>
                  <Link to="#howto">HOW TO</Link>
                </li>
                <li>
                  <Link to="#download">DOWNLOAD</Link>
                </li>
              </ul>
            </div>
            <div className="navbar">
              <Link to="/chat" className="btn-login">Login</Link>
            </div>

            <div id="mobileNav">
              <span>&#9776;</span>
            </div>
            <div id="myNav" className="mobileNavOverlay">
              <div className="overlay-content">
                <Link
                  to="javascript:void()"
                  className="close-btn"
                >
                  &times;
                </Link>
                <Link to="#home">
                  HOME
                </Link>
                <Link to="#features">
                  FEATURES
                </Link>
                <Link to="#testimonial">
                  TESTIMONIAL
                </Link>
                <Link to="#howto">
                  HOW TO
                </Link>
                <Link to="#download">
                  DOWNLOAD
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div id="hero">
          <div className="row">
            <div className="col span_1_of_2">
              <div className="hero-description">
                <h1>
                  Simple, safe <br />& beautiful.
                </h1>
                <p>
                  With <span className="bold-text">HeyU</span>, you'll get fast,
                  simple, secure messaging!
                </p>

                <Link to="#download" className="btn">
                  <span className="download-btn"> Download Now</span>
                </Link>
              </div>
            </div>
            <div className="col span_1_of_2">
              <div className="hero-section">
               <img className="hero-img" src="images/1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="shape-divider">
          <div className="custom-shape-divider-bottom-1603385849">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
        <button id="scrollUp" title="Go to top">
          <svg
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 16 16"
            className="bi bi-arrow-up"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
            />
          </svg>
        </button>
      </header>
      <section id="features">
        <div className="row">
          <div className="col span_1_of_2">
            <div className="features-images">
              <img className="features_1" src="images/features1.png" alt="" />
            </div>
          </div>
          <div className="col span_1_of_2">
            <div className="section-description features-description col1">
              <h2 className="stylish_heading">
                Easy Messaging <span className="red_dot">.</span>
              </h2>
              <p className="little-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className="row second-features-row">
          <div className="col span_1_of_2">
            <div className="section-description features-description">
              <h2 className="stylish_heading">
                Keep in touch <span className="red_dot">.</span>
              </h2>
              <p className="little-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="col span_1_of_2">
            <div className="features-images">
              <img className="features_3" src="images/features2.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="testimonial">
        <h2 className="stylish_heading">
          What people say <span className="red_dot">.</span>
        </h2>
        <div className="row">
          <div className="col span_1_of_3">
            <div className="bubble">
              <p className="message">
                "Lorem ipsum dolor sit amet, onsectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim"
              </p>
              <span className="company-name">Booking.com</span>
            </div>
            <div className="client-info">
              <img className="avatar" src="images/avatar1.jpg" alt="" />
              <div className="name">
                <h4>John Doe</h4>
                <p className="role">CEO</p>
              </div>
            </div>
          </div>
          <div className="col span_1_of_3">
            <div className="bubble">
              <p className="message">
                "Lorem ipsum dolor sit amet, onsectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim"
              </p>
              <span className="company-name">Airnbnb</span>
            </div>
            <div className="client-info">
              <img className="avatar" src="images/avatar2.jpg" alt="" />
              <div className="name">
                <h4>John Doe</h4>
                <p className="role">CEO</p>
              </div>
            </div>
          </div>
          <div className="col span_1_of_3">
            <div className="bubble">
              <p className="message">
                "Lorem ipsum dolor sit amet, onsectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim"
              </p>
              <span className="company-name">Symu.co</span>
            </div>
            <div className="client-info">
              <img className="avatar" src="images/avatar3.jpg" alt="" />
              <div className="name">
                <h4>John Doe</h4>
                <p className="role">CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="howto">
        <div className="row">
          <div className="col span_1_of_3">
            <div className="first-item">
              <div className="item-description">
                <h4>Start conversation</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut
                </p>
              </div>
              <div className="item-icon1">
                <svg
                  width="2.5rem"
                  height="2.5rem"
                  viewBox="0 0 16 16"
                  className="bi bi-chat-dots"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                  />
                  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </div>
            </div>
            <div className="first-item">
              <div className="item-description">
                <h4>Make a free call</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut
                </p>
              </div>
              <div className="item-icon1">
                <svg
                  width="2.5rem"
                  height="2.5rem"
                  viewBox="0 0 16 16"
                  className="bi bi-telephone-outbound"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="col span_1_of_3">
            <img className="big_image" src="images/2.png" alt="" />
          </div>
          <div className="col span_1_of_3">
            <div className="last-item">
              <div className="item-icon2">
                <svg
                  width="2.5rem"
                  height="2.5rem"
                  viewBox="0 0 16 16"
                  className="bi bi-camera"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 12V6a1 1 0 0 0-1-1h-1.172a3 3 0 0 1-2.12-.879l-.83-.828A1 1 0 0 0 9.173 3H6.828a1 1 0 0 0-.707.293l-.828.828A3 3 0 0 1 3.172 5H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                  />
                  <path d="M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                </svg>
              </div>
              <div className="item-description">
                <h4>Take a picture</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut
                </p>
              </div>
            </div>
            <div className="last-item">
              <div className="item-icon2">
                <svg
                  width="2.5rem"
                  height="2.5rem"
                  viewBox="0 0 16 16"
                  className="bi bi-camera-video"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175l3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"
                  />
                </svg>
              </div>
              <div className="item-description">
                <h4>Send your video</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="subscribe">
        <div className="row">
          <h2 className="stylish_heading">
            Subscribe to our newsletter <span className="red_dot">.</span>
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className="subscribe-form">
          <input
            className="form-input"
            type="email"
            placeholder="Your email address"
            required
          />
          <input
            type="submit"
            className="btn subscribe-btn"
            value="Subscribe"
          />
        </div>
      </section>
      <section id="download">
        <div className="row">
          <img className="app-logo" src="images/app_logo.png" alt="" />
          <h2 className="stylish_heading">
            Download the app <span className="red_dot">.</span>
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>

          <Link to="javascript:void()">
            <img src="images/appstore.png" alt="" />
          </Link>
        </div>
      </section>
      <section className="copy-right-section">
        <p>@ 2023 Nzchat App. All rights reserved</p>
      </section>
    </>
  );
}
