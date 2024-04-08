import React from "react";
import "./AdminHome.css";
import AdminSidebar from "./AdminSidebar";

export default function InternHome() {
  if (sessionStorage.getItem("intern") !== "intern-success") {
    window.location.href = "/intern";
  } else {
    sessionStorage.removeItem("admin");
  }
  return (
    <div className="admin-home-outer">
      <AdminSidebar />
      <div className="admin-home-inner">
        <h1 className="admin-home-welcome">Welcome Intern</h1>
        <div className="admin-inner">
          <a href="/adminadd">
            <div className="admin-card">
              <div className="admin-tools">
                <div className="admin-circle">
                  <span className="admin-red admin-box"></span>
                </div>
                <div className="admin-circle">
                  <span className="admin-yellow admin-box"></span>
                </div>
                <div className="admin-circle">
                  <span className="admin-green admin-box"></span>
                </div>
              </div>
              <div className="card__content">
                <p className="admin-home-text">Add Book</p>
              </div>
            </div>
          </a>
          <a href="/adminupdate">
            <div className="admin-card">
              <div className="admin-tools">
                <div className="admin-circle">
                  <span className="admin-red admin-box"></span>
                </div>
                <div className="admin-circle">
                  <span className="admin-yellow admin-box"></span>
                </div>
                <div className="admin-circle">
                  <span className="admin-green admin-box"></span>
                </div>
              </div>
              <div className="card__content">
                <p className="admin-home-text">Update Book</p>
              </div>
            </div>
          </a>
          <a href="/admindelete">
            <div className="admin-card">
              <div className="admin-tools">
                <div className="admin-circle">
                  <span className="admin-red admin-box"></span>
                </div>
                <div className="admin-circle">
                  <span className="admin-yellow admin-box"></span>
                </div>
                <div className="admin-circle">
                  <span className="admin-green admin-box"></span>
                </div>
              </div>
              <div className="card__content">
                <p className="admin-home-text">Delete Book</p>
              </div>
            </div>
          </a>
          <a href="/admintrend">
            <div className="admin-card">
              <div className="admin-tools">
                <div className="admin-circle">
                  <span className="admin-red admin-box"></span>
                </div>
                <div className="admin-circle">
                  <span className="admin-yellow admin-box"></span>
                </div>
                <div className="admin-circle">
                  <span className="admin-green admin-box"></span>
                </div>
              </div>
              <div className="card__content">
                <p className="admin-home-text">Add Trending</p>
              </div>
            </div>
          </a>

          <a href="/adminrecommended">
            <div className="admin-card">
              <div className="admin-tools">
                <div className="admin-circle">
                  <span className="admin-red admin-box"></span>
                </div>
                <div className="admin-circle">
                  <span className="admin-yellow admin-box"></span>
                </div>
                <div className="admin-circle">
                  <span className="admin-green admin-box"></span>
                </div>
              </div>
              <div className="card__content">
                <p className="admin-home-text">
                  Add <br />
                  Recommended
                </p>
              </div>
            </div>
          </a>
          {/* <a href="/adminview">
            <div className="admin-card">
              <div className="admin-tools">
                <div className="admin-circle">
                  <span className="admin-red admin-box"></span>
                </div>
                <div className="admin-circle">
                  <span className="admin-yellow admin-box"></span>
                </div>
                <div className="admin-circle">
                  <span className="admin-green admin-box"></span>
                </div>
              </div>
              <div className="card__content">
                <p className="admin-home-text">View Data</p>
              </div>
            </div>
          </a> */}
        </div>
      </div>
    </div>
  );
}
