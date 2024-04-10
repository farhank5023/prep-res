import React, { useEffect, useState ,useRef} from 'react';
import './Home.css';
import { useCardData } from '../Landing/CardContext'; // Adjust the import path as needed
import "./Home.css";
import BookForm from "../BookForm";
import ReportForm from "../ReportForm";
import cardData from "../Landing/cardData";
import PdfView from "./PdfView";
import Navbar from "../Landing/Navbar";
import { IoCartOutline } from "react-icons/io5";

export default function Home() {
  const [loading, setloading] = useState(true);
  const [bookInfo, setBookInfo] = useState(null);
  const { cardData, isLoaded } = useCardData(); // Assuming this now checks local storage
  const [downloadform, setDownloadForm] = useState(false);
  const targetRef = useRef(null);
  const bookurl = '/book' + window.location.search;


  useEffect(() => {
    let storedData = window.localStorage.getItem('cardData');
    if (storedData) {
      storedData = JSON.parse(storedData);
      const bookurl = '/book' + window.location.search;
      const flatCardData = storedData.flat(Infinity);
      const foundBookInfo = flatCardData.find(book => book.url === bookurl);

      setBookInfo(foundBookInfo || 'Not Found');
    }
  }, []);

  if (!bookInfo) {
    return <div className="loading">Loading book details...</div>;
  } else if (bookInfo === 'Not Found') {
    return <p>Book information not found.</p>;
  }
 
  const handleOutsideClick = (event) => {
    // Check if the clicked element is inside the target component
    if (targetRef.current && !targetRef.current.contains(event.target)) {
      document.getElementById("share-menu").style.display = "none";
    } else {
      document.getElementById("share-menu").style.display = "block";
    }
  };

  const downloadForm = () => {
    setDownloadForm(true);
    document.getElementById("download-form").style.visibility = "visible";
    document.getElementById("download-form").style.transform = "scale(1)";
    document.getElementById("home-page-outer-div").style.filter = "blur(8px)";
    document.getElementById("navbar").style.filter = "blur(8px)";
    document.getElementById("menuIcon").style.filter = "blur(8px)";
  };
  const reportForm = () => {
    document.getElementById("report-form").style.visibility = "visible";
    document.getElementById("report-form").style.transform = "scale(1)";
    document.getElementById("home-page-outer-div").style.filter = "blur(8px)";
    document.getElementById("navbar").style.filter = "blur(8px)";
    document.getElementById("menuIcon").style.filter = "blur(8px)";
  };

  const openInNewTab = () => {
    document.getElementById("view-pdf").style.visibility = "visible";
    document.getElementById("view-pdf").style.transform = "scale(1)";
    document.getElementById("home-page-outer-div").style.filter = "blur(8px)";
    document.getElementById("navbar").style.filter = "blur(8px)";
    document.getElementById("menuIcon").style.filter = "blur(8px)";
    // cardData.forEach((data) => {
    //   try {
    //     if (data[0].find((e) => e.title === bookinfo.title) !== undefined) {
    //       bookinfo = data[0].find((e) => e.title === bookinfo.title);
    //     }
    //   } catch (err) {
    //     // console.log(err);
    //   }
    // });
    // window.sessionStorage.setItem("newLink", bookinfo.link);
    // window.location.href = `/pdfview?${bookinfo.title}`;
  };

  function copyCurrentLink() {
    console.time("time2");
    var temp = document.createElement("input");
    var texttoCopy = document.getElementById("copyText2").innerHTML;
    temp.type = "input";
    temp.setAttribute("value", texttoCopy);
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    temp.remove();
    console.timeEnd("time2");
  }

  return (
    
    

     
        <>
          <Navbar />
          <div className="book-form-outer-2" id="view-pdf">
            {/* <PdfView downloadlink={bookInfo.link} name={bookInfo.title} /> */}
            <PdfView downloadlink={bookInfo.view} />
          </div>
          <div
            className="book-form-outer"
            id="download-form"
            style={{ height: "100%" }}
          >
            {downloadform && (
              <BookForm downloadlink={bookInfo.link} name={bookInfo.title} />
            )}
          </div>
          <div
            className="book-form-outer"
            id="report-form"
            style={{ height: "100%" }}
          >
            <ReportForm name={bookInfo.title} />
          </div>
          <div id="home-page-outer-div">
            <div className="outer-div">
              <div className="inner-left-div">
                <img className="inner-left-div-img" src={bookInfo.img} alt="" />
              </div>

              <div className="inner-right-div">
                <div style={{ display: "flex" }}>
                  <h1 className="book-heading">
                    {bookInfo.title}{" "}
                    <div className="book-report-share">
                      <button class="report-button" onClick={reportForm}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1.2em"
                          viewBox="0 0 448 512"
                          className="svgIcon"
                        >
                          <path
                            fill="#ffffff"
                            d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V64 368 480c0 17.7 14.3 32 32 32s32-14.3 32-32V352l64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48V32z"
                          />
                        </svg>
                      </button>
                      <label class="dropdown" id="share-div" ref={targetRef}>
                        <div class="dd-button">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="16"
                            width="14"
                            viewBox="0 0 448 512"
                            fill="white"
                            style={{
                              position: "relative",
                              top: "2px",
                              right: "7px",
                            }}
                          >
                            <path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z" />
                          </svg>
                          Share
                        </div>

                        <input type="checkbox" class="dd-input" id="test" />

                        <ul class="dd-menu" id="share-menu">
                          <li>
                            <a
                              href={`https://twitter.com/intent/tweet?text=Step by step ${bookInfo.category} to excel in your career &url=https://www.prepcrazy.com${bookurl}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Twitter
                            </a>
                          </li>
                          {/* <li>
                            <a
                              href={`https://wa.me/+9111111111?text=Step by step ${bookInfo.category} to excel in your carrier &url=https://www.prepcrazy.com${bookurl}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Whatsapp
                            </a>
                          </li> */}
                          <li>
                            <a
                              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.prepcrazy.com${bookurl}`}
                              target="_blank"
                              rel="noreferrer"
                            >
                              Linkedin
                            </a>
                          </li>
                          <li class="divider"></li>
                          <li onClick={copyCurrentLink}>
                            {/* <a href={bookurl}>Copy Link</a> */}
                            <span id="copyText2" style={{ display: "none" }}>
                              {" "}
                              {`https://www.prepcrazy.com${bookurl}`}
                            </span>
                            Copy Link
                          </li>
                        </ul>
                      </label>
                    </div>
                  </h1>
                </div>
                <p className="book-desc">{bookInfo.description}</p>
                {bookInfo.author !== undefined &&
                  bookInfo.author !== null &&
                  bookInfo.author !== "" && (
                    <p className="book-auth">Author: {bookInfo.author}</p>
                  )}{" "}
                {bookInfo.source !== undefined &&
                  bookInfo.source !== null &&
                  bookInfo.source !== "" && (
                    <p className="book-source">
                      The{" "}
                      <span style={{ fontWeight: "bold" }}>
                        {bookInfo.title}
                      </span>{" "}
                      book is written by{" "}
                      <span style={{ fontWeight: "bold" }}>
                        {bookInfo.author}
                      </span>{" "}
                      and taken from{" "}
                      <a
                        href={`https://${bookInfo.source}`}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: "#0047ab", fontWeight: "bold" }}
                      >
                        {bookInfo.source}
                      </a>{" "}
                      , Text content is released under Creative Commons BY-SA.
                      Images may be copyright of their respective owners unless
                      otherwise specified.
                    </p>
                  )}
                <div className="pdf-btn">
                  <button className="comic-button" onClick={downloadForm}>
                    <p>Download</p>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                      style={{
                        fill: "white",
                        // marginLeft: "5px",
                      }}
                    >
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                  </button>
                  {bookInfo.category !== "Roadmaps" && (
                    <button className="comix-button-2" onClick={openInNewTab}>
                      <p>View</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                        style={{
                          fill: "white",
                        }}
                      >
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                      </svg>
                    </button>
                  )}
                  {bookInfo.buyAvailable === "Yes" && (
                    <a
                      className="comix-button-2"
                      style={{ height: "auto", width: "auto" }}
                      href={bookInfo.buyLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p>Buy</p>
                      <IoCartOutline
                        style={{ width: "30px", height: "30px" }}
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      
    
  );
}