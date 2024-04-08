import React, { Component } from "react";
import { app } from "./firebase";
import { getAuth } from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import "./BookForm.css";

export class BookForm extends Component {
  auth = getAuth(app);
  db = getFirestore(app);
  state = {
    handleSubmit: true,
    name: "",
    email: "",
    issue: "",
    dropDownIssue: "Common Issues",
  };

  handleSubmit = (e) => {
    if (
      this.state.email === "" ||
      this.state.name === "" ||
      this.state.dropDownIssue === ""
    ) {
      return;
    }
    const db = getFirestore(app);
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    formDatab.append("uname", this.state.name);
    formDatab.append("uemail", this.state.email);
    if (this.state.dropDownIssue === "Other") {
      formDatab.append("issue", this.state.issue);
    } else {
      formDatab.append("issue", this.state.dropDownIssue);
    }
    formDatab.append("ubookname", this.props.name);
    fetch(
      "https://script.google.com/macros/s/AKfycbzBr6kQiprkKR-nFmK5LxzyHCmfovwappIJo8rjdNfLY9Sl2ZwOPSZYCCgfym5F4Kyo/exec",
      {
        method: "POST",
        body: formDatab,
      }
    );
    addDoc(collection(db, "report"), {
      name: this.state.name,
      email: this.state.email,
      issue: this.state.issue,
      bookname: this.props.name,
      dropDownIssue: this.state.dropDownIssue,
    }).then((err) => {});
    document.getElementById("report-text").innerHTML =
      "Your Issue Has Been Reported";
    document.getElementById("report-text").style.color = "red";
  };
  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  // showHide = (elm) => {
  //   console.log(elm.target.value);
  //   if (elm.target.value === "Other") {
  //     //display textbox
  //     document.getElementById("issue").style.display = "block";
  //   } else {
  //     //hide textbox
  //     document.getElementById("issue").style.display = "none";
  //   }
  // };

  render() {
    return (
      <div>
        <div className="container-form">
          <form id="contact">
            <div>
              <button
                className="close-btn"
                type="button"
                onClick={() => {
                  document.getElementById("report-form").style.visibility =
                    "hidden";
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
            <h3 id="report-text">Report Form</h3>
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
                name="name"
                autoFocus
                value={this.state.name}
                onChange={this.handleChange}
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
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </fieldset>
            <fieldset>
            <label htmlFor="dropDownIssue" className="book-form-label">
                  Select Issue
                </label>
              <select
                value={this.state.dropDownIssue}
                onChange={this.handleChange}
                name="dropDownIssue"
                tabIndex="3"
                className="report-select"
              >
                <option value="Common Issues">Common Issues</option>
                <option value="Incorrect Book Content">
                  Incorrect Book Content
                </option>
                <option value="Wrong Resource added">
                  Wrong Resource added
                </option>
                <option value="Error in Downloading/Viewing">
                  Error in Downloading/Viewing
                </option>
                <option value="Other">Other</option>
              </select>
            </fieldset>
            {this.state.dropDownIssue === "Other" && (
              <fieldset>
                <label htmlFor="number" className="book-form-label">
                  Other Issue
                </label>
                <textarea
                  required
                  placeholder="Write your issue"
                  type="text"
                  tabIndex="4"
                  name="issue"
                  id="issue"
                  value={this.state.issue}
                  onChange={this.handleChange}
                />
              </fieldset>
            )}

            <fieldset>
              <button
                name="submit"
                type="submit"
                id="contact-submit"
                data-submit="...Sending"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default BookForm;
