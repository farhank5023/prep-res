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
    bookname: "",
  };

  handleSubmit = (e) => {
    if (
      this.state.email === "" ||
      this.state.issue === "" ||
      this.state.name === ""
    ) {
      return;
    }
    const db = getFirestore(app);
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    formDatab.append("name", this.state.name);
    formDatab.append("email", this.state.email);
    formDatab.append("issue", this.state.issue);
    formDatab.append("bookname", this.state.bookname);
    fetch(
      "https://script.google.com/macros/s/AKfycbzFZzT1DBlocP2erOsqxsjIor9JmyHbLrjzay0Jiy9FouUx0YVZavyCCgqyRAQdFQRT/exec",
      {
        method: "POST",
        body: formDatab,
      }
    );
    addDoc(collection(db, "delete"), {
      name: this.state.name,
      email: this.state.email,
      issue: this.state.issue,
      bookname: this.state.bookname,
    }).then((err) => {});
    document.getElementById("report-text").innerHTML =
      "Your Request Has Been Reported";
    document.getElementById("report-text").style.color = "red";
  };
  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

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
                  document.getElementById("delete-form").style.visibility =
                    "hidden";
                  document.querySelector(".landing-outer-div").style.filter =
                    "none";
                  document.querySelector(".footer").style.filter = "blur(0px)";
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
            <h3 id="report-text">Delete Book Form</h3>
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
              <label htmlFor="name" className="book-form-label">
                Book Name
              </label>
              <input
                required
                placeholder="Book Name"
                type="text"
                id="bookname"
                tabIndex="1"
                name="bookname"
                autoFocus
                value={this.state.bookname}
                onChange={this.handleChange}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="number" className="book-form-label">
                Issue
              </label>
              <textarea
                required
                placeholder="Write your issue"
                type="text"
                tabIndex="3"
                name="issue"
                id="issue"
                value={this.state.issue}
                onChange={this.handleChange}
              />
            </fieldset>
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
