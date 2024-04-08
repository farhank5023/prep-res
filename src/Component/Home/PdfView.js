import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import BookForm from "../BookForm";
import  { cardData, initializeCardData } from "../Landing/cardData";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export default function PdfView({ downloadlink }) {
  const [numPages, setNumPages] = useState(null);
  const [downloadform, setDownloadForm] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(11);
  };

  var bookurl = "/book" + window.location.search;

  var bookinfo;
  cardData.forEach((data) => {
    try {
      if (data[0].find((e) => e.url === bookurl) !== undefined) {
        bookinfo = data[0].find((e) => e.url === bookurl);
        // console.log(bookinfo.author);
      }
    } catch (err) {
      // console.log(err);
    }
  });

  // const link = sessionStorage.getItem("newLink");
  // console.log(link);

  // const [loading, setloading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setloading(false);
  //   }, 2000);
  // });

  const homePage = () => {
    document.getElementById("view-pdf").style.visibility = "hidden";
    document.getElementById("view-pdf").style.transform = "scale(0)";
    document.getElementById("home-page-outer-div").style.filter = "none";
    document.getElementById("navbar").style.filter = "none";
    document.getElementById("menuIcon").style.filter = "none";
  };

  const downloadForm = () => {
    setDownloadForm(true);
    document.getElementById("download-pdf-form").style.visibility = "visible";
    document.getElementById("download-pdf-form").style.transform = "scale(1)";
    document.getElementById("home-page-outer-div").style.filter = "blur(8px)";
    document.getElementById("navbar").style.filter = "blur(8px)";
    document.getElementById("menuIcon").style.filter = "blur(8px)";
    document.getElementById("view-pdf").style.visibility = "hidden";
  };

  return (
    // <>
    //   {loading && (
    //     <div className="loading-background">
    //       <div className="custom-loader"></div>
    //     </div>
    //   )}

    //   {!loading && (
    <>
      <div
        className="book-form-outer"
        id="download-pdf-form"
        style={{ height: "100%" }}
      >
        {
        downloadform && <BookForm downloadlink={bookinfo.link} name={bookinfo.title} />
        }
      </div>
      <button onClick={homePage} className="back-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 384 512"
          style={{ fill: "white", height: "20px" }}
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </button>
      <div className="pdf-veiw-cdn">
        <div className="pdf-doc">
          <Document file={downloadlink} onLoadSuccess={onDocumentLoadSuccess}>
            {pageNumber <= 8 && (
              <Page pageNumber={pageNumber} width={340} height={500} />
            )}
            {pageNumber > 8 && (
              <div className="lock-div">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                  className="lock-icon"
                >
                  <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                </svg>
                <p className="lock-text">
                  To view the full content download the book
                </p>
                <button class="cssbuttons-io-button" onClick={downloadForm}>
                  Download
                  <div class="icon">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0h24v24H0z" fill="none"></path>
                      <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            )}
          </Document>
          {/* <p>
            Page {pageNumber} of {numPages}
          </p> */}
        </div>
        <div className="media-button-css">
          <button
            className="pdf-previous-button"
            onClick={() => setPageNumber(pageNumber - 1)}
            disabled={pageNumber <= 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </button>
          <button
            className="pdf-next-button"
            onClick={() => setPageNumber(pageNumber + 1)}
            disabled={pageNumber >= numPages}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
            >
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </button>
        </div>
      </div>
    </>
    //   )}
    // </>
  );
}
