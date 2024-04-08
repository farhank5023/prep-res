import React, { Component } from "react";
import { app } from "./firebase";
import { getAuth } from "firebase/auth";
import {
  collection,
  addDoc,
  getDocs,
  query,
  getFirestore,
} from "firebase/firestore";
import { RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";
import "./BookForm.css";
import { saveAs } from "file-saver";

export class BookForm extends Component {
  auth = getAuth(app);
  db = getFirestore(app);
  state = {
    mobile: "",
    mobileErr: false,
    already: false,
    verifyClick: true,
    submitClick: true,
  };
  handleChange = (e) => {
    this.setState({ mobile: e.target.value.replace(/[^0-9]+/g, "") });
  };
  verifyOTP = (event) => {
    event.preventDefault();
    if (this.state.verifyClick) {
      this.setState({ ...this.state, verifyClick: false });
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      document.getElementById("name").style.border = "1px solid #aaa";
      document.getElementById("email").style.border = "1px solid #aaa";
      document.getElementById("number").style.border = "1px solid #aaa";
      if (name === "") {
        document.getElementById("name").style.border = "1px solid red";
        this.setState({ ...this.state, verifyClick: true });
        return;
      }
      if (email === "") {
        document.getElementById("email").style.border = "1px solid red";
        this.setState({ ...this.state, verifyClick: true });
        return;
      }
      if (this.state.mobile === "" || this.state.mobile.length !== 10) {
        document.getElementById("number").style.border = "2px solid red";
        this.setState({ ...this.state, verifyClick: true });
        return;
      }
      if (this.state.already) {
        document.getElementById("download-button").style.display = "flex";
        const formEle = document.querySelector("form");
        const formDatab = new FormData(formEle);
        formDatab.append("BookName", this.props.name);
        fetch(
          "https://script.google.com/macros/s/AKfycbxzqg8WSparyfQhPi73XgAU_zJLmpGfrnVzguJA61YZfmoWISKPa9e6A0LTCMCSQegUqg/exec",
          {
            method: "POST",
            body: formDatab,
          }
        );
        return;
      }

      var otp = document.getElementById("otp-input").value;
      if (otp.length === 0) {
        document.getElementById("otp-input").style.border = "2px solid red";
        this.setState({ ...this.state, verifyClick: true });
        return;
      }
      if (otp.length > 0) {
        let confirmationResult = window.confirmationResult;
        confirmationResult
          .confirm(otp)
          .then((result) => {
            document.getElementById("download-button").style.display = "flex";
            const formEle = document.querySelector("form");
            const formDatab = new FormData(formEle);
            formDatab.append("BookName", this.props.name);
            fetch(
              "https://script.google.com/macros/s/AKfycbxzqg8WSparyfQhPi73XgAU_zJLmpGfrnVzguJA61YZfmoWISKPa9e6A0LTCMCSQegUqg/exec",
              {
                method: "POST",
                body: formDatab,
              }
            );
            addDoc(collection(this.db, "MobileNumber"), {
              number: `${this.state.mobile}`,
            }).then((err) => {});
          })
          .catch((error) => {
            document.getElementById("invalid").innerHTML = "Invalid OTP";
          });
      }
    }
  };
  handleClick = async () => {
    if (this.state.submitClick) {
      document.getElementById("name").style.border = "1px solid #aaa";
      document.getElementById("email").style.border = "1px solid #aaa";
      if (document.getElementById("name").value === "") {
        document.getElementById("name").style.border = "1px solid red";
        this.setState({ ...this.state, verifyClick: true });
        return;
      }
      if (document.getElementById("email").value === "") {
        document.getElementById("email").style.border = "1px solid red";
        this.setState({ ...this.state, verifyClick: true });
        return;
      }
      var already = false;
      const { mobile } = this.state;
      if (mobile.length !== 10) {
        this.setState({
          mobileErr: true,
        });
        document.getElementById("number").style.border = "2px solid red";
        document.getElementById("invalid-number").innerHTML =
          "Invalid Mobile Number";
        document.getElementById("invalid-number").style.color = "red";
        this.setState({ ...this.state, submitClick: true });
        return;
      } else {
        document.getElementById("invalid-number").innerHTML = "";
        if (this.state.submitClick) {
          this.setState({ ...this.state, submitClick: false });
          const q = query(collection(this.db, "MobileNumber"));
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            if (doc.data()["number"] === `${this.state.mobile}`) {
              document.getElementById("verify-text").innerHTML = "Verified";
              document.getElementById("verify-btn").style.background =
                "lightgreen";
              already = true;
              document.getElementById("contact-submit").style.display = "none";
              document.getElementById("download-button").style.display = "flex";
              const formEle = document.querySelector("form");
              const formDatab = new FormData(formEle);
              formDatab.append("BookName", this.props.name);
              fetch(
                "https://script.google.com/macros/s/AKfycbwTTh4cN6wRpZQAVcPQZi-ABamX9cohsyt-rtiKAtK-gvIcp0SIG2Um0Ur8wy_GDVJrPg/exec",
                {
                  method: "POST",
                  body: formDatab,
                }
              );
              return;
            }
          });
        }
        if (!already) {
          this.setState({ mobileErr: false });
          var recaptcha = new RecaptchaVerifier(this.auth, "recaptcha");
          var number = `+91${mobile}`;
          signInWithPhoneNumber(this.auth, number, recaptcha)
            .then(function (confirmationResult) {
              document.getElementById("otp-input").style.display = "block";
              document.getElementById("recaptcha").style.display = "none";
              document.getElementById("book-form-otp").style.display = "block";
              document.getElementById("otp-input").style.marginTop = "15px";
              window.confirmationResult = confirmationResult;
            })
            .catch(function (error) {
              console.error(error);
            });
        }
      }
    }
  };

  downloadFile = () => {
    saveAs(this.props.downloadlink, this.props.name + ".pdf");
  };
  render() {
    const { mobile } = this.state;
    return (
      <div>
        <div className="container-form">
          <form id="contact">
            <div>
              <button
                className="close-btn"
                type="button"
                onClick={() => {
                  document.getElementById("download-form").style.visibility =
                    "hidden";
                  document.getElementById(
                    "download-pdf-form"
                  ).style.visibility = "hidden";
                  document.getElementById("home-page-outer-div").style.filter =
                    "blur(0px)";
                  document.getElementById("navbar").style.filter = "blur(0px)";
                  document.getElementById("menuIcon").style.filter =
                    "blur(0px)";
                }}
              >
                <img
                  src="https://ik.imagekit.io/p3m4p352x/close-button-png-27.png?updatedAt=1693842648252"
                  width="25px"
                  height="25px"
                  alt=""
                />
              </button>
            </div>
            <h3>Download Form</h3>
            <h4>Kindly fill up details</h4>
            <fieldset>
              <label htmlFor="name" className="book-form-label">
                Name
              </label>
              <input
                required
                placeholder="Your name"
                type="text"
                id="name"
                tabIndex="1"
                name="Name"
                autoFocus
              />
            </fieldset>
            <fieldset>
              <label htmlFor="email" className="book-form-label">
                Email
              </label>
              <input
                required
                placeholder="Your Email Address"
                type="email"
                tabIndex="2"
                name="Email"
                id="email"
              />
            </fieldset>
            <fieldset>
              <label htmlFor="number" className="book-form-label">
                Phone Number
              </label>
              <input
                required
                placeholder="Your Phone Number"
                type="tel"
                tabIndex="3"
                name="MobileNumber"
                id="number"
                value={mobile}
                onChange={this.handleChange}
              />
              <p id="invalid-number"></p>
              <button
                type="button"
                onClick={this.handleClick}
                className="verify-button"
                id="verify-btn"
              >
                {" "}
                <span id="verify-text">Verify Number</span>
              </button>
            </fieldset>
            <div id="recaptcha"></div>
            <fieldset>
              <label
                htmlFor="contact-submit"
                className="book-form-label"
                id="book-form-otp"
                style={{ display: "none", marginTop: "10px" }}
              >
                Enter OTP
              </label>
              <input
                required
                id="otp-input"
                placeholder="Enter OTP"
                type="text"
                tabIndex="2"
              />
              <p id="invalid"></p>
            </fieldset>
            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
                onClick={this.verifyOTP}
              >
                Submit
              </button>
              <button
                className="down-button"
                type="button"
                id="download-button"
                onClick={this.downloadFile}
              >
                <span className="button__text">Download</span>
                <span className="button__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 35 35"
                    id="bdd05811-e15d-428c-bb53-8661459f9307"
                    data-name="Layer 2"
                    className="svg"
                  >
                    <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                    <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                    <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                  </svg>
                </span>
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default BookForm;
