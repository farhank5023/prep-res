import React from "react";
import { useState } from "react";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { app } from "../firebase";

export default function InternLogin() {
  const db = getFirestore(app);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData((currData) => {
      return {
        ...currData,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const q = query(collection(db, "intern"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (loginData.username === "" || loginData.password === "") {
        document.getElementById("invalid").innerHTML = "Enter Credentials";
      } else {
        if (
          loginData.username === doc.data()["username"] &&
          loginData.password === doc.data()["password"]
        ) {
          sessionStorage.setItem("intern", "intern-success");
          window.location.href = "/internhome";
        } else {
          document.getElementById("invalid").innerHTML = "Invalid Credentials";
        }
      }
    });
  };
  return (
    <div>
      <div className="admin-main-div admin-login-main">
        <div className="form-data login-box admin-login">
          <form onSubmit={handleSubmit}>
            <h1 style={{ marginBottom: "50px" }}>Login</h1>
            <input
              required
              type="text"
              className="book-input"
              placeholder="Username"
              id="username"
              name="username"
              value={loginData.username}
              onChange={handleChange}
            ></input>

            <input
              required
              type="password"
              className="book-input"
              placeholder="Password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
            ></input>
            <p
              style={{
                textAlign: "left",
                color: "red",
                display: "block",
                width: "100%",
                marginBottom: "20px",
              }}
              id="invalid"
            ></p>
            <button className="admin-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
