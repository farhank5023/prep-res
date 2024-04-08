import React from "react";

export default function Footer() {
  const requestForm = () => {
    document.getElementById("request-form").style.visibility = "visible";
    document.getElementById("request-form").style.transform = "scale(1)";
    document.querySelector(".landing-outer-div").style.filter = "blur(8px)";
    document.querySelector(".footer").style.filter = "blur(8px)";
  };
  const deleteForm = () => {
    document.getElementById("delete-form").style.visibility = "visible";
    document.getElementById("delete-form").style.transform = "scale(1)";
    document.querySelector(".landing-outer-div").style.filter = "blur(8px)";
    document.querySelector(".footer").style.filter = "blur(8px)";
  };
  const termForm = () => {
    document.getElementById("term-form").style.visibility = "visible";
    document.getElementById("term-form").style.transform = "scale(1)";
    document.querySelector(".landing-outer-div").style.filter = "blur(8px)";
    document.querySelector(".footer").style.filter = "blur(8px)";
  };
  return (
    <div className="footer">
      <div className="footer-left-outer">
        <a
          href="/#"
          // className="navbar-logo"
          style={{
            width: "max-content",
            display: "block",
            // marginTop: "20px",
          }}
        >
          <img
            className="company-logo-footer"
            src="https://ik.imagekit.io/qz6ubt34n4/logo-whiteAsset%202.png?updatedAt=1696619947825"
            alt=""
            width={"220"}
            height={"50"}
          />
        </a>
        <a
          href="mailto:support@prepcrazy.com"
          className="footer-left-inner-contact"
        >
          <span className="footer-left-inner-contact-span">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              className="footer-left-inner-contact-svg"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
          </span>
          support@prepcrazy.com
        </a>
        {/* <p className="footer-left-inner-contact">
          <span className="footer-left-inner-contact-span">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              className="footer-left-inner-contact-svg"
            >
              <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
            </svg>
          </span>
          +91 12345 54321
        </p> */}
      </div>
      <a
        id="pc-initiative"
        href="https://campuscredentials.com/"
        target="_blank"
        rel="noreferrer"
        className="footer-center-div"
      >
        An Initiative by{" "}
        <b style={{ marginLeft: "4px" }}> Campus Credentials</b>
      </a>
      <div>
        <ul className="footer-right-inner-list">
          <button
            className="footer-right-inner-list-button"
            onClick={requestForm}
          >
            Request a Book
          </button>
          <button
            className="footer-right-inner-list-button"
            onClick={deleteForm}
          >
            Report Copyright
          </button>

          <button className="footer-right-inner-list-button" onClick={termForm}>
            Terms and Condition
          </button>
        </ul>
      </div>
      <a
        id="mobile-initiative"
        href="https://campuscredentials.com/"
        target="_blank"
        rel="noreferrer"
        className="footer-center-div"
      >
        An Initiative by{" "}
        <b style={{ marginLeft: "4px" }}> Campus Credentials</b>
      </a>
    </div>
  );
}
