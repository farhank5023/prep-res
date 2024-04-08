import React, { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";

import { app } from "../firebase";
import "./Form.css";
import AdminSidebar from "./AdminSidebar";

export default function AdminForm() {
  const db = getFirestore(app);

  const [bookData, setBookData] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
    url: "",
    view: "",
    author: "",
    source: "",
    buyAvailable: "",
    buyLink: "",
  });
  const [roadmap, setRoadmap] = useState("");
  const [material, setMaterial] = useState("");

  function popup() {
    document.getElementById("popup-wrapper").style.display = "block";
  }

  const adminformpage = () => {
    setTimeout(() => {}, 3000);
  };

  const handleChange = (e) => {
    setBookData((currData) => {
      return {
        ...currData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      bookData["title"] === "" &&
      bookData["description"] === "" &&
      bookData["category"] === "" &&
      bookData["image"] === "" &&
      bookData["url"] === "" &&
      bookData["view"] === "" &&
      bookData["author"] === "" &&
      bookData["source"] === "" &&
      bookData["buyAvailable"] === "" &&
      bookData["buyLink"] === ""
    ) {
      document.getElementById("invalid").innerHTML = "Enter All Details!!";
    } else {
      try {
        if (bookData["category"] === "Books") {
          addDoc(collection(db, "books"), {
            title: bookData["title"],
            description: bookData["description"],
            url: bookData["url"],
            view: bookData["view"],
            image: bookData["image"],
            category: bookData["category"],
            author: bookData["author"],
            source: bookData["source"],
            buyAvailable: bookData["buyAvailable"],
            buyLink: bookData["buyLink"],
            trending: "false",
            timestamp: new Date(),
          }).then((err) => {
            window.location.reload();
          });
        } else if (bookData["category"] === "Roadmaps") {
          addDoc(collection(db, "roadmaps"), {
            title: bookData["title"],
            description: bookData["description"],
            url: bookData["url"],
            view: bookData["view"],
            image: bookData["image"],
            category: bookData["category"],
            subcategoryList: "Role-Based,Skill-Based",
            author: bookData["author"],
            source: bookData["source"],
            buyAvailable: bookData["buyAvailable"],
            buyLink: bookData["buyLink"],
            trending: "false",
            subcategory: roadmap,
            timestamp: new Date(),
          }).then((err) => {
            window.location.reload();
          });
        } else if (bookData["category"] === "Miscellaneous") {
          addDoc(collection(db, "miscellaneous"), {
            title: bookData["title"],
            description: bookData["description"],
            url: bookData["url"],
            view: bookData["view"],
            image: bookData["image"],
            category: bookData["category"],
            author: bookData["author"],
            source: bookData["source"],
            buyAvailable: bookData["buyAvailable"],
            buyLink: bookData["buyLink"],
            trending: "false",
            timestamp: new Date(),
          }).then((err) => {
            window.location.reload();
          });
        } else if (bookData["category"] === "Material") {
          addDoc(collection(db, "material"), {
            title: bookData["title"],
            description: bookData["description"],
            url: bookData["url"],
            view: bookData["view"],
            image: bookData["image"],
            category: bookData["category"],
            subcategoryList: "Practice Questions,Interview Questions",
            author: bookData["author"],
            source: bookData["source"],
            buyAvailable: bookData["buyAvailable"],
            buyLink: bookData["buyLink"],
            trending: "false",
            subcategory: material,
            timestamp: new Date(),
          }).then((err) => {
            window.location.reload();
          });
        }else if (bookData["category"] === "Higher Studies") {
          addDoc(collection(db, "higherstudies"), {
            title: bookData["title"],
            description: bookData["description"],
            url: bookData["url"],
            view: bookData["view"],
            image: bookData["image"],
            category: bookData["category"],
            author: bookData["author"],
            source: bookData["source"],
            buyAvailable: bookData["buyAvailable"],
            buyLink: bookData["buyLink"],
            trending: "false",
            timestamp: new Date(),
          }).then((err) => {
            window.location.reload();
          });}
        popup();
      } catch (error) {}
    }
  };
  return (
    <>
      <div style={{ display: "flex" }}>
        <AdminSidebar />
        <div className="popup-wrapper" id="popup-wrapper">
          <div className="popup">
            <div className="popup-close" onClick={adminformpage()}>
              X
            </div>
            <div className="popup-content" style={{ paddingTop: "15px" }}>
              <h2>Form Submitted!</h2>
              <p id="popup-score"></p>
              <p id="popup-time"></p>
            </div>
          </div>
        </div>
        <div className="admin-main-div">
          <div className="form-data login-box">
            <form onSubmit={handleSubmit}>
              <h1 style={{ marginBottom: "30px" }}>Add Book</h1>
              <input
                required
                type="text"
                className="book-input"
                placeholder="Book Title"
                id="title"
                name="title"
                value={bookData.title}
                onChange={handleChange}
              ></input>

              <input
                required
                type="text"
                className="book-input"
                placeholder="Book Description"
                id="description"
                name="description"
                value={bookData.description}
                onChange={handleChange}
              ></input>

              <select
                className="book-input-dropdown"
                name="category"
                placeholder="Category"
                id="category"
                value={bookData.category}
                onChange={handleChange}
                required
              >
                <option value="/">Select Category</option>
                <option value="Books">Books</option>
                <option value="Roadmaps">Roadmaps</option>
                <option value="Material">Material</option>
                <option value="Miscellaneous">Miscellaneous</option>
                <option value="Higher Studies">Higher Studies</option>
              </select>
              {bookData.category === "Roadmaps" && (
                <select
                  className="book-input-dropdown-2"
                  name="category"
                  id="category"
                  value={roadmap}
                  onChange={(e) => {
                    setRoadmap(e.target.value);
                  }}
                  required
                >
                  {" "}
                  <option value="/">Select Roadmaps</option>{" "}
                  <option value="Skill-Based">Skill-Based Roadmaps</option>{" "}
                  <option value="Role-Based">Role-Based Roadmaps</option>{" "}
                </select>
              )}
              {bookData.category === "Material" && (
                <select
                  className="book-input-dropdown-2"
                  name="category"
                  id="category"
                  value={material}
                  onChange={(e) => {
                    setMaterial(e.target.value);
                  }}
                  required
                >
                  {" "}
                  <option value="/">Select Material</option>{" "}
                  <option value="Practice Questions">Practice Questions</option>{" "}
                  <option value="Interview Questions">
                    Interview Questions
                  </option>{" "}
                </select>
              )}
              <input
                type="text"
                className="book-input"
                placeholder="Image"
                id="image"
                name="image"
                onChange={handleChange}
              ></input>

              <input
                required
                type="text"
                className="book-input"
                placeholder="Download Url"
                id="url"
                name="url"
                value={bookData.url}
                onChange={handleChange}
              ></input>

              <input
                required
                type="text"
                className="book-input"
                placeholder="View Url"
                id="view"
                name="view"
                value={bookData.view}
                onChange={handleChange}
              ></input>

              <input
                type="text"
                className="book-input"
                placeholder="Author"
                id="author"
                name="author"
                value={bookData.author}
                onChange={handleChange}
              ></input>
              <input
                type="text"
                className="book-input"
                placeholder="Source"
                id="source"
                name="source"
                value={bookData.source}
                onChange={handleChange}
              ></input>

              <select
                className="book-input-dropdown-2"
                name="buyAvailable"
                id="buyAvailable"
                onChange={handleChange}
                required
              >
                {" "}
                <option value="">Want to Sell</option>{" "}
                <option value="Yes">Yes</option> <option value="No">No</option>{" "}
              </select>
              {bookData["buyAvailable"] === "Yes" && (
                <input
                  type="text"
                  className="book-input"
                  placeholder="Buy Link"
                  id="buyLink"
                  name="buyLink"
                  value={bookData.buyLink}
                  onChange={handleChange}
                ></input>
              )}
              {/* <input
                type="text"
                className="book-input"
                placeholder="Source Url"
                id="srcurl"
                name="srcurl"
                value={bookData.srcurl}
                onChange={handleChange}
              ></input> */}
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
            <p
              style={{
                textAlign: "center",
                color: "#0aaa0a",
                display: "none",
                width: "100%",
                marginTop: "20px",
                background: "#a8ffdb",
                padding: "10px 0",
                borderRadius: "7px",
              }}
              id="bookAdded"
            ></p>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
}
