import { useState } from "react";
import "./AdminUpdate.css";
import "./Form.css";
import { app } from "../firebase";
import {
  collection,
  getDocs,
  query,
  doc,
  deleteDoc,
  getFirestore,
} from "firebase/firestore";
import AdminSidebar from "./AdminSidebar";
import Select from "react-select";

export default function AdminDelete() {
  const db = getFirestore(app);

  const [data, setData] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [category, setCategory] = useState("books");

  const options = [];

  options.push(data.map((e) => ({ value: e, label: e })));

  const handleTitleChange = (e) => {
    setNewTitle(e.value);
  };

  function popup() {
    document.getElementById("popup-wrapper").style.display = "block";
  }

  const adminformpage = () => {
    window.location.pathname = "admindelete";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const q = query(collection(db, category));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc4) => {
      if (doc4.data()["title"] === newTitle) {
        deleteDoc(doc(db, category, doc4.id));
      }
    });
    popup();
  };

  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />
      <div className="popup-wrapper" id="popup-wrapper">
        <div className="popup">
          <div className="popup-close" onClick={adminformpage}>
            X
          </div>
          <div className="popup-content" style={{ paddingTop: "15px" }}>
            <h2>Item Deleted</h2>
            <p id="popup-score"></p>
            <p id="popup-time"></p>
          </div>
        </div>
      </div>
      <div className="outer-div-1">
        <div className="inside-div">
          <form className="update-form" onSubmit={handleSubmit}>
            <h1 style={{ marginBottom: "40px" }}>Delete Item</h1>
            <select
              name="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
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
              name="title"
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

            <button className="admin-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
