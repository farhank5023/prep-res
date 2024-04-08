import React, { useState } from "react";

import "./AdminUpdate.css";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  getFirestore,
} from "firebase/firestore";
import { app } from "../firebase";
import AdminSidebar from "./AdminSidebar";
import Select from "react-select";

export default function AdminUpdate() {
  const db = getFirestore(app);

  const [data, setData] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [category, setCategory] = useState("books");
  const [bookNewData, setBookNewData] = useState({
    title: "",
    description: "",
    image: "",
    url: "",
    view: "",
    author: "",
    source: "",
    buyAvailable: "",
    buyLink: "",
  });

  function popup() {
    document.getElementById("popup-wrapper").style.display = "block";
  }

  const handleUpdatedChange = (e) => {
    setBookNewData((currData) => {
      return {
        ...currData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const options = [];

  options.push(data.map((e) => ({ value: e, label: e })));

  const handleTitleChange = (e) => {
    setNewTitle(e.value);
    getPrevData(e.value);
  };

  const getTitle = async () => {
    var selectedTitle = [];
    const q = query(collection(db, category));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      selectedTitle.push(doc.data()["title"]);
    });
    setData(selectedTitle);
  };
  getTitle();

  const getPrevData = async (e) => {
    const colRef = query(collection(db, category));
    const querySnapshot = await getDocs(colRef);
    querySnapshot.forEach((doc) => {
      if (doc.data()["title"] === e) {
        setBookNewData({
          title: doc.data()["title"],
          description: doc.data()["description"],
          image: doc.data()["image"],
          url: doc.data()["url"],
          view: doc.data()["view"],
          author: doc.data()["author"],
          source: doc.data()["source"],
        });
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const querySnapshot = await getDocs(collection(db, category));
    querySnapshot.forEach((dat) => {
      if (dat.data()["title"] === newTitle) {
        const scoreRef = doc(db, category, dat.id);
        updateDoc(scoreRef, {
          title: bookNewData.title,
          description: bookNewData.description,
          image: bookNewData.image,
          url: bookNewData.url,
          view: bookNewData.view,
          author: bookNewData.author || null,
          source: bookNewData.source || null,
          buyAvailable: bookNewData.buyAvailable || null,
          buyLink: bookNewData.buyLink || null,
        });
      }
    });
    setBookNewData({
      title: "",
      description: "",
      image: "",
      url: "",
      view: "",
      author: "",
      source: "",
    });
    popup();
  };

  const adminformpage = () => {
    window.location.pathname = "adminupdate";
  };

  console.log(newTitle);

  return (
    <>
      <div style={{ display: "flex" }}>
        <AdminSidebar />
        <div className="popup-wrapper" id="popup-wrapper">
          <div className="popup">
            <div className="popup-close" onClick={adminformpage}>
              X
            </div>
            <div className="popup-content" style={{ paddingTop: "15px" }}>
              <h2>Item Updated</h2>
              <p id="popup-score"></p>
              <p id="popup-time"></p>
            </div>
          </div>
        </div>
        <div className="outer-div-1">
          <div className="inside-div">
            <form
              className="update-form"
              onSubmit={handleSubmit}
              style={{ marginTop: "200px", marginBottom: "50px" }}
            >
              <h1 style={{ marginBottom: "30px" }}>Update Book</h1>

              <select
                name="category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setNewTitle("");
                  setBookNewData({
                    title: "",
                    description: "",
                    image: "",
                    url: "",
                    view: "",
                    author: "",
                    source: "",
                    buyAvailable: "",
                    buyLink: "",
                  });
                }}
                className="book-dropdown"
              >
                <option value="books">Books</option>
                <option value="roadmaps">Roadmaps</option>
                <option value="material">Material</option>
                <option value="miscellaneous">Miscellaneous</option>
                <option value="higherstudies">Higher Studies</option>
              </select>

              <Select
                defaultValue={newTitle}
                onChange={handleTitleChange}
                options={options[0]}
                placeholder={`Select ${category}`}
                isSearchable
                noOptionsMessage={() => "No " + category + " found"}
                styles={{
                  container: (baseStyles, state) => ({
                    ...baseStyles,
                    fontSize: "15px",
                  }),
                  menuList: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: "black",
                    color: "grey",
                  }),
                  singleValue: (baseStyles, state) => ({
                    ...baseStyles,
                    color: "grey",
                  }),
                }}
              />
              {/* <select
                name="title"
                value={newTitle}
                onChange={handleTitleChange}
                className="book-dropdown"
              >
                <option value="">Select Item</option>
                {data.map((e) => (
                  <option value={e}>{e}</option>
                ))}
              </select> */}

              <input
                required
                name="title"
                placeholder="Updated Title"
                onChange={handleUpdatedChange}
                value={bookNewData.title}
                className="input-update"
              ></input>

              <input
                required
                className="input-update"
                type="text"
                placeholder="Description"
                name="description"
                value={bookNewData.description}
                onChange={handleUpdatedChange}
              ></input>
              <input
                className="input-update"
                type="text"
                placeholder="Image"
                name="image"
                id="image"
                value={bookNewData.image}
                onChange={handleUpdatedChange}
              ></input>

              <input
                required
                className="input-update"
                type="text"
                placeholder="Url"
                name="url"
                value={bookNewData.url}
                onChange={handleUpdatedChange}
              ></input>

              <input
                required
                className="input-update"
                type="text"
                placeholder="View"
                name="view"
                value={bookNewData.view}
                onChange={handleUpdatedChange}
              ></input>

              <input
                className="input-update"
                type="text"
                placeholder="Author"
                name="author"
                value={bookNewData.author}
                onChange={handleUpdatedChange}
              ></input>
              <input
                className="input-update"
                type="text"
                placeholder="Source"
                name="source"
                value={bookNewData.source}
                onChange={handleUpdatedChange}
              ></input>
              <select
                className="book-input-dropdown-2"
                style={{ marginLeft: "5px" }}
                name="buyAvailable"
                id="buyAvailable"
                onChange={handleUpdatedChange}
                required
              >
                {" "}
                <option value="">Want to Sell</option>{" "}
                <option value="Yes">Yes</option> <option value="No">No</option>{" "}
              </select>
              {bookNewData["buyAvailable"] === "Yes" && (
                <input
                  className="input-update"
                  type="text"
                  placeholder="Buy Link"
                  id="buyLink"
                  name="buyLink"
                  value={bookNewData.buyLink}
                  onChange={handleUpdatedChange}
                ></input>
              )}
              {/* <input
                className="input-update"
                type="text"
                placeholder="Source Url"
                name="srcurl"
                value={bookNewData.srcurl}
                onChange={handleUpdatedChange}
              ></input>*/}
              <button className="admin-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
