import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import "./Tabs.css";
import cardData from "./cardData";

export default function BookTabs(props) {
  const [active, setActive] = useState(
    parseInt(window.sessionStorage.getItem("active")) || 1
  );
  const [roadmap, setRoadmap] = useState(
    parseInt(window.sessionStorage.getItem("roadmap")) || 1
  );
  const [material, setMaterial] = useState(
    parseInt(window.sessionStorage.getItem("material")) || 1
  );


  let perPage = 6;

  const [pageMaterial, setPageMaterial] = useState(1);
  const [pageMaterial2, setPageMaterial2] = useState(1);
  const [pageRoadmap, setPageRoadmap] = useState(1);
  const [pageRoadmap2, setPageRoadmap2] = useState(1);
  const [pageMiscellaneous, setPageMiscellaneous] = useState(1);
  const [pageBooks, setPageBooks] = useState(1);
  const [pageHigherStudies, setPageHigherStudies] = useState(1);

  const handleChangeMiscellaneous = (event, value) => {
    setPageMiscellaneous(value);
  };

  const handleChangeBooks = (event, value) => {
    setPageBooks(value);
  };

  const handleChangeMaterial = (event, value) => {
    setPageMaterial(value);
  };

  const handleChangeMaterial2 = (event, value) => {
    setPageMaterial2(value);
  };
  const handleChangeRoadmap = (event, value) => {
    setPageRoadmap(value);
  };
  const handleChangeRoadmap2 = (event, value) => {
    setPageRoadmap2(value);
  };
  const handleChangeHigherStudies = (event, value) => {
    setPageHigherStudies(value);
  };
  // console.log(cardData)
  return (
    <>
      {true && (
        <div className="landing-outer-tab">
          <div className="tabs-button-outer">
            <button
              onClick={() => {
                setActive(1);
                window.sessionStorage.setItem("active", 1);
              }}
              className={active === 1 ? "tab-btn tab-btn-active" : "tab-btn"}
            >
              Prep Material
              {active === 1 && (
                <>
                  <br />
                  <div
                    onClick={() => {
                      setMaterial(1);
                      window.sessionStorage.setItem("material", 1);
                    }}
                    className={
                      material === 1
                        ? "tab-btn roadmap-sub-active roadmap-sub"
                        : "tab-btn roadmap-sub"
                    }
                  >
                    Interview Questions
                  </div>

                  <br />
                  <div
                    onClick={() => {
                      setMaterial(2);
                      window.sessionStorage.setItem("material", 2);
                    }}
                    className={
                      material === 2
                        ? "tab-btn roadmap-sub-active roadmap-sub"
                        : "tab-btn roadmap-sub"
                    }
                  >
                    Practice Questions
                  </div>
                </>
              )}
            </button>
            <button
              onClick={() => {
                setActive(2);
                window.sessionStorage.setItem("active", 2);
              }}
              className={active === 2 ? "tab-btn tab-btn-active" : "tab-btn"}
            >
              Roadmaps
              {active === 2 && (
                <>
                  <br />
                  <div
                    onClick={() => {
                      setRoadmap(1);
                      window.sessionStorage.setItem("roadmap", 1);
                    }}
                    className={
                      roadmap === 1
                        ? "tab-btn roadmap-sub-active roadmap-sub"
                        : "tab-btn roadmap-sub"
                    }
                  >
                    Skill-Based
                  </div>
                  <br />
                  <div
                    onClick={() => {
                      setRoadmap(2);
                      window.sessionStorage.setItem("roadmap", 2);
                    }}
                    className={
                      roadmap === 2
                        ? "tab-btn roadmap-sub-active roadmap-sub"
                        : "tab-btn roadmap-sub"
                    }
                  >
                    Role-Based
                  </div>
                </>
              )}
            </button>
            <button
              onClick={() => {
                setActive(4);
                window.sessionStorage.setItem("active", 4);
              }}
              className={active === 4 ? "tab-btn tab-btn-active" : "tab-btn"}
            >
              Miscellaneous
            </button>

            <button
              onClick={() => {
                setActive(5);
                window.sessionStorage.setItem("active", 5);
              }}
              className={active === 5 ? "tab-btn tab-btn-active" : "tab-btn"}
            >
              Books
            </button>

            <button
              onClick={() => {
                setActive(6);
                window.sessionStorage.setItem("active", 6);
              }}
              className={active === 6 ? "tab-btn tab-btn-active" : "tab-btn"}
            >Higher Studies
            </button>
          </div>
          {/* Books  */}
          {props.cardData[0].length === 0 && (
            <>
              <div
                className="card-tab-outer-outer"
                style={{ display: `${active === 1 ? "flex" : "none"}` }}
              >
                <div
                  className="card-tab-outer"
                  style={{ display: `${active === 1 ? "flex" : "none"}` }}
                >
                  {props.cardData[3].length > 0 &&
                    props.cardData[3][0]
                      .slice(
                        pageMaterial * perPage - perPage,
                        pageMaterial * perPage
                      )
                      .map((data, idx) => {
                        if (
                          material === 1 &&
                          data.subcategory === "Interview Questions"
                        ) {
                          return (
                            <>
                              <div className="card" key={idx}>
                                <div className="content">
                                  <div className="back">
                                    {data.trending === "true" && (
                                      <div className="ribbon">
                                        <span className="trending-label">
                                          Trending
                                        </span>
                                      </div>
                                    )}
                                    {data.recommended === "true" && (
                                      <div className="ribbon2">
                                        <span className="trending-label">
                                          RECOMMENDED
                                        </span>
                                      </div>
                                    )}
                                    <div className="back-content">
                                      <img
                                        src={data.img}
                                        alt=""
                                        className="tabs-book-img"
                                        loading="lazy"
                                      />
                                    </div>
                                    <a
                                      href={data.url}
                                      className="tabs-know-more-mobile phone-know-more"
                                    >
                                      <button className="tabs-know-more-mobile-btn">
                                        Know More
                                      </button>
                                    </a>
                                  </div>
                                  <div className="front">
                                    <div className="img">
                                      <div className="circle"></div>
                                      <div className="circle" id="right"></div>
                                      <div className="circle" id="bottom"></div>
                                    </div>
                                    <div className="front-content">
                                      <div className="description">
                                        <div className="title">
                                          <p className="title">
                                            <strong>{data.title}</strong>
                                          </p>
                                          <svg
                                            fillRule="nonzero"
                                            height="15px"
                                            width="15px"
                                            viewBox="0,0,256,256"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <g
                                              style={{ mixBlendMode: "normal" }}
                                              textAnchor="none"
                                              fontSize="none"
                                              fontWeight="none"
                                              fontFamily="none"
                                              strokeDashoffset={0}
                                              strokeDasharray=""
                                              strokeMiterlimit={10}
                                              strokeLinejoin="miter"
                                              strokeLinecap="butt"
                                              strokeWidth={1}
                                              stroke="none"
                                              fillRule="nonzero"
                                              fill="#20c997"
                                            >
                                              <g transform="scale(8,8)">
                                                <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                      </div>
                                      <a
                                        href={data.url}
                                        className="pc-know-more"
                                      >
                                        <button className="tabs-know-more">
                                          Know More
                                        </button>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        }
                        return <></>;
                      })}
                </div>
                {material === 1 && props.cardData[3][0].length > 0 && (
                  <div
                    className="pagination"
                    style={{ display: `${active === 1 ? "flex" : "none"}` }}
                  >
                    <Pagination
                      count={Math.ceil(props.cardData[3][0].length / perPage)}
                      style={{ fill: "white" }}
                      page={pageMaterial}
                      onChange={handleChangeMaterial}
                    />
                  </div>
                )}

                <div
                  className="card-tab-outer"
                  style={{ display: `${active === 1 ? "flex" : "none"}` }}
                >
                  {props.cardData[4].length > 0 &&
                    props.cardData[4][0]
                      .slice(
                        pageMaterial2 * perPage - perPage,
                        pageMaterial2 * perPage
                      )
                      .map((data, idx) => {
                        if (
                          material === 2 &&
                          data.subcategory === "Practice Questions"
                        ) {
                          return (
                            <>
                              <div className="card" key={idx}>
                                <div className="content">
                                  <div className="back">
                                    {data.trending === "true" && (
                                      <div className="ribbon">
                                        <span className="trending-label">
                                          Trending
                                        </span>
                                      </div>
                                    )}
                                    {data.recommended === "true" && (
                                      <div className="ribbon2">
                                        <span className="trending-label">
                                          RECOMMENDED
                                        </span>
                                      </div>
                                    )}
                                    <div className="back-content">
                                      <img
                                        src={data.img}
                                        alt=""
                                        className="tabs-book-img"
                                        loading="lazy"
                                      />
                                    </div>
                                    <a
                                      href={data.url}
                                      className="tabs-know-more-mobile phone-know-more"
                                    >
                                      <button className="tabs-know-more-mobile-btn">
                                        Know More
                                      </button>
                                    </a>
                                  </div>
                                  <div className="front">
                                    <div className="img">
                                      <div className="circle"></div>
                                      <div className="circle" id="right"></div>
                                      <div className="circle" id="bottom"></div>
                                    </div>
                                    <div className="front-content">
                                      <div className="description">
                                        <div className="title">
                                          <p className="title">
                                            <strong>{data.title}</strong>
                                          </p>
                                          <svg
                                            fillRule="nonzero"
                                            height="15px"
                                            width="15px"
                                            viewBox="0,0,256,256"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <g
                                              style={{ mixBlendMode: "normal" }}
                                              textAnchor="none"
                                              fontSize="none"
                                              fontWeight="none"
                                              fontFamily="none"
                                              strokeDashoffset={0}
                                              strokeDasharray=""
                                              strokeMiterlimit={10}
                                              strokeLinejoin="miter"
                                              strokeLinecap="butt"
                                              strokeWidth={1}
                                              stroke="none"
                                              fillRule="nonzero"
                                              fill="#20c997"
                                            >
                                              <g transform="scale(8,8)">
                                                <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                      </div>
                                      <a
                                        href={data.url}
                                        className="pc-know-more"
                                      >
                                        <button className="tabs-know-more">
                                          Know More
                                        </button>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        }
                        return <></>;
                      })}
                </div>
                {material === 2 && props.cardData[4][0].length > 0 && (
                  <div
                    className="pagination"
                    style={{ display: `${active === 1 ? "flex" : "none"}` }}
                  >
                    <Pagination
                      count={Math.ceil(props.cardData[4][0].length / perPage)}
                      style={{ fill: "white" }}
                      page={pageMaterial2}
                      onChange={handleChangeMaterial2}
                    />
                  </div>
                )}
              </div>

              <div
                className="card-tab-outer-outer"
                style={{ display: `${active === 2 ? "flex" : "none"}` }}
              >
                <div
                  className="card-tab-outer"
                  style={{ display: `${active === 2 ? "flex" : "none"}` }}
                >
                  {props.cardData[1].length > 0 &&
                    props.cardData[1][0]
                      .slice(
                        pageRoadmap * perPage - perPage,
                        pageRoadmap * perPage
                      )
                      .map((data, idx) => {
                        if (
                          roadmap === 1 &&
                          data.subcategory === "Skill-Based"
                        ) {
                          return (
                            <>
                              <div className="card" key={idx}>
                                <div className="content">
                                  <div className="back">
                                    {data.trending === "true" && (
                                      <div className="ribbon">
                                        <span className="trending-label">
                                          Trending
                                        </span>
                                      </div>
                                    )}
                                    {data.recommended === "true" && (
                                      <div className="ribbon2">
                                        <span className="trending-label">
                                          RECOMMENDED
                                        </span>
                                      </div>
                                    )}
                                    <div className="back-content">
                                      <img
                                        src={data.img}
                                        alt=""
                                        className="tabs-book-img"
                                        loading="lazy"
                                      />
                                    </div>
                                    <a
                                      href={data.url}
                                      className="tabs-know-more-mobile phone-know-more"
                                    >
                                      <button className="tabs-know-more-mobile-btn">
                                        Know More
                                      </button>
                                    </a>
                                  </div>
                                  <div className="front">
                                    <div className="img">
                                      <div className="circle"></div>
                                      <div className="circle" id="right"></div>
                                      <div className="circle" id="bottom"></div>
                                    </div>
                                    <div className="front-content">
                                      <div className="description">
                                        <div className="title">
                                          <p className="title">
                                            <strong>{data.title}</strong>
                                          </p>
                                          <svg
                                            fillRule="nonzero"
                                            height="15px"
                                            width="15px"
                                            viewBox="0,0,256,256"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <g
                                              style={{ mixBlendMode: "normal" }}
                                              textAnchor="none"
                                              fontSize="none"
                                              fontWeight="none"
                                              fontFamily="none"
                                              strokeDashoffset={0}
                                              strokeDasharray=""
                                              strokeMiterlimit={10}
                                              strokeLinejoin="miter"
                                              strokeLinecap="butt"
                                              strokeWidth={1}
                                              stroke="none"
                                              fillRule="nonzero"
                                              fill="#20c997"
                                            >
                                              <g transform="scale(8,8)">
                                                <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                      </div>
                                      <a
                                        href={data.url}
                                        className="pc-know-more"
                                      >
                                        <button className="tabs-know-more">
                                          Know More
                                        </button>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        }
                        return <></>;
                      })}
                </div>
                {roadmap === 1 && props.cardData[1][0].length > 0 && (
                  <div
                    className="pagination"
                    style={{ display: `${active === 2 ? "flex" : "none"}` }}
                  >
                    <Pagination
                      count={Math.ceil(props.cardData[1][0].length / perPage)}
                      style={{ fill: "white" }}
                      page={pageRoadmap}
                      onChange={handleChangeRoadmap}
                    />
                  </div>
                )}

                <div
                  className="card-tab-outer"
                  style={{ display: `${active === 2 ? "flex" : "none"}` }}
                >
                  {props.cardData[5].length > 0 &&
                    props.cardData[5][0]
                      .slice(
                        pageRoadmap2 * perPage - perPage,
                        pageRoadmap2 * perPage
                      )
                      .map((data, idx) => {
                        if (
                          roadmap === 2 &&
                          data.subcategory === "Role-Based"
                        ) {
                          return (
                            <>
                              <div className="card" key={idx}>
                                <div className="content">
                                  <div className="back">
                                    {data.trending === "true" && (
                                      <div className="ribbon">
                                        <span className="trending-label">
                                          Trending
                                        </span>
                                      </div>
                                    )}
                                    {data.recommended === "true" && (
                                      <div className="ribbon2">
                                        <span className="trending-label">
                                          RECOMMENDED
                                        </span>
                                      </div>
                                    )}
                                    <div className="back-content">
                                      <img
                                        src={data.img}
                                        alt=""
                                        className="tabs-book-img"
                                        loading="lazy"
                                      />
                                    </div>
                                    <a
                                      href={data.url}
                                      className="tabs-know-more-mobile phone-know-more"
                                    >
                                      <button className="tabs-know-more-mobile-btn">
                                        Know More
                                      </button>
                                    </a>
                                  </div>
                                  <div className="front">
                                    <div className="img">
                                      <div className="circle"></div>
                                      <div className="circle" id="right"></div>
                                      <div className="circle" id="bottom"></div>
                                    </div>
                                    <div className="front-content">
                                      <div className="description">
                                        <div className="title">
                                          <p className="title">
                                            <strong>{data.title}</strong>
                                          </p>
                                          <svg
                                            fillRule="nonzero"
                                            height="15px"
                                            width="15px"
                                            viewBox="0,0,256,256"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <g
                                              style={{ mixBlendMode: "normal" }}
                                              textAnchor="none"
                                              fontSize="none"
                                              fontWeight="none"
                                              fontFamily="none"
                                              strokeDashoffset={0}
                                              strokeDasharray=""
                                              strokeMiterlimit={10}
                                              strokeLinejoin="miter"
                                              strokeLinecap="butt"
                                              strokeWidth={1}
                                              stroke="none"
                                              fillRule="nonzero"
                                              fill="#20c997"
                                            >
                                              <g transform="scale(8,8)">
                                                <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                      </div>
                                      <a
                                        href={data.url}
                                        className="pc-know-more"
                                      >
                                        <button className="tabs-know-more">
                                          Know More
                                        </button>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        }
                        return <></>;
                      })}
                </div>
                {roadmap === 2 && props.cardData[5][0].length > 0 && (
                  <div
                    className="pagination"
                    style={{ display: `${active === 2 ? "flex" : "none"}` }}
                  >
                    <Pagination
                      count={Math.ceil(props.cardData[5][0].length / perPage)}
                      style={{ fill: "white" }}
                      page={pageRoadmap2}
                      onChange={handleChangeRoadmap2}
                    />
                  </div>
                )}
              </div>

              <div
                className="card-tab-outer-outer"
                style={{ display: `${active === 4 ? "flex" : "none"}` }}
              >
                <div
                  className="card-tab-outer"
                  style={{ display: `${active === 4 ? "flex" : "none"}` }}
                >
                  {props.cardData[2].length > 0 &&
                    props.cardData[2][0]
                      .slice(
                        pageMiscellaneous * perPage - perPage,
                        pageMiscellaneous * perPage
                      )
                      .map((data, idx) => {
                        return (
                          <>
                            <div className="card" key={idx}>
                              <div className="content">
                                <div className="back">
                                  {data.trending === "true" && (
                                    <div className="ribbon">
                                      <span className="trending-label">
                                        Trending
                                      </span>
                                    </div>
                                  )}
                                  {data.recommended === "true" && (
                                    <div className="ribbon2">
                                      <span className="trending-label">
                                        RECOMMENDED
                                      </span>
                                    </div>
                                  )}
                                  <div className="back-content">
                                    <img
                                      src={data.img}
                                      alt=""
                                      className="tabs-book-img"
                                      loading="lazy"
                                    />
                                  </div>
                                  <a
                                    href={data.url}
                                    className="tabs-know-more-mobile phone-know-more"
                                  >
                                    <button className="tabs-know-more-mobile-btn">
                                      Know More
                                    </button>
                                  </a>
                                </div>
                                <div className="front">
                                  <div className="img">
                                    <div className="circle"></div>
                                    <div className="circle" id="right"></div>
                                    <div className="circle" id="bottom"></div>
                                  </div>
                                  <div className="front-content">
                                    <div className="description">
                                      <div className="title">
                                        <p className="title">
                                          <strong>{data.title}</strong>
                                        </p>
                                        <svg
                                          fillRule="nonzero"
                                          height="15px"
                                          width="15px"
                                          viewBox="0,0,256,256"
                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g
                                            style={{ mixBlendMode: "normal" }}
                                            textAnchor="none"
                                            fontSize="none"
                                            fontWeight="none"
                                            fontFamily="none"
                                            strokeDashoffset={0}
                                            strokeDasharray=""
                                            strokeMiterlimit={10}
                                            strokeLinejoin="miter"
                                            strokeLinecap="butt"
                                            strokeWidth={1}
                                            stroke="none"
                                            fillRule="nonzero"
                                            fill="#20c997"
                                          >
                                            <g transform="scale(8,8)">
                                              <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                                            </g>
                                          </g>
                                        </svg>
                                      </div>
                                    </div>
                                    <a href={data.url} className="pc-know-more">
                                      <button className="tabs-know-more">
                                        Know More
                                      </button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                </div>
                {props.cardData[2][0].length > 0 && (
                  <div
                    className="pagination"
                    style={{ display: `${active === 4 ? "flex" : "none"}` }}
                  >
                    <Pagination
                      siblingCount={0}
                      count={Math.ceil(props.cardData[2][0].length / perPage)}
                      style={{ fill: "white" }}
                      page={pageMiscellaneous}
                      onChange={handleChangeMiscellaneous}
                    />
                  </div>
                )}
              </div>

              <div
                className="card-tab-outer-outer"
                style={{ display: `${active === 5 ? "flex" : "none"}` }}
              >
                <div
                  className="card-tab-outer"
                  style={{ display: `${active === 5 ? "flex" : "none"}` }}
                >
                  {props.cardData[0].length > 0 &&
                    props.cardData[0][0]
                      .slice(pageBooks * perPage - perPage, pageBooks * perPage)
                      .map((data, idx) => {
                        return (
                          <>
                            <div className="card" key={idx}>
                              <div className="content">
                                <div className="back">
                                  {data.trending === "true" && (
                                    <div className="ribbon">
                                      <span className="trending-label">
                                        Trending
                                      </span>
                                    </div>
                                  )}
                                  {data.recommended === "true" && (
                                    <div className="ribbon2">
                                      <span className="trending-label">
                                        RECOMMENDED
                                      </span>
                                    </div>
                                  )}
                                  <div className="back-content">
                                    <img
                                      src={data.img}
                                      alt=""
                                      className="tabs-book-img"
                                      loading="lazy"
                                    />
                                  </div>
                                  <a
                                    href={data.url}
                                    className="tabs-know-more-mobile phone-know-more"
                                  >
                                    <button className="tabs-know-more-mobile-btn">
                                      Know More
                                    </button>
                                  </a>
                                </div>
                                <div className="front">
                                  <div className="img">
                                    <div className="circle"></div>
                                    <div className="circle" id="right"></div>
                                    <div className="circle" id="bottom"></div>
                                  </div>
                                  <div className="front-content">
                                    <div className="description">
                                      <div className="title">
                                        <p className="title">
                                          <strong>{data.title}</strong>
                                        </p>
                                        <svg
                                          fillRule="nonzero"
                                          height="15px"
                                          width="15px"
                                          viewBox="0,0,256,256"
                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g
                                            style={{ mixBlendMode: "normal" }}
                                            textAnchor="none"
                                            fontSize="none"
                                            fontWeight="none"
                                            fontFamily="none"
                                            strokeDashoffset={0}
                                            strokeDasharray=""
                                            strokeMiterlimit={10}
                                            strokeLinejoin="miter"
                                            strokeLinecap="butt"
                                            strokeWidth={1}
                                            stroke="none"
                                            fillRule="nonzero"
                                            fill="#20c997"
                                          >
                                            <g transform="scale(8,8)">
                                              <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                                            </g>
                                          </g>
                                        </svg>
                                      </div>
                                    </div>
                                    <a href={data.url} className="pc-know-more">
                                      <button className="tabs-know-more">
                                        Know More
                                      </button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                </div>
                {props.cardData[0][0].length > 0 && (
                  <div
                    className="pagination"
                    style={{ display: `${active === 5 ? "flex" : "none"}` }}
                  >
                    <Pagination
                      count={Math.ceil(props.cardData[0][0].length / perPage)}
                      style={{ fill: "white" }}
                      page={pageBooks}
                      onChange={handleChangeBooks}
                    />
                  </div>
                )}
              </div>
              {/* Testing */}
              <div
                className="card-tab-outer-outer"
                style={{ display: `${active === 6 ? "flex" : "none"}` }}
              >
                <div
                  className="card-tab-outer"
                  style={{ display: `${active === 6 ? "flex" : "none"}` }}
                >
                  {props.cardData[0].length > 0 &&
                    props.cardData[0][0]
                      .slice(pageHigherStudies * perPage - perPage, pageHigherStudies * perPage)
                      .map((data, idx) => {
                        return (
                          <>
                            <div className="card" key={idx}>
                              <div className="content">
                                <div className="back">
                                  {data.trending === "true" && (
                                    <div className="ribbon">
                                      <span className="trending-label">
                                        Trending
                                      </span>
                                    </div>
                                  )}
                                  {data.recommended === "true" && (
                                    <div className="ribbon2">
                                      <span className="trending-label">
                                        RECOMMENDED
                                      </span>
                                    </div>
                                  )}
                                  <div className="back-content">
                                    <img
                                      src={data.img}
                                      alt=""
                                      className="tabs-book-img"
                                      loading="lazy"
                                    />
                                  </div>
                                  <a
                                    href={data.url}
                                    className="tabs-know-more-mobile phone-know-more"
                                  >
                                    <button className="tabs-know-more-mobile-btn">
                                      Know More
                                    </button>
                                  </a>
                                </div>
                                <div className="front">
                                  <div className="img">
                                    <div className="circle"></div>
                                    <div className="circle" id="right"></div>
                                    <div className="circle" id="bottom"></div>
                                  </div>
                                  <div className="front-content">
                                    <div className="description">
                                      <div className="title">
                                        <p className="title">
                                          <strong>{data.title}</strong>
                                        </p>
                                        <svg
                                          fillRule="nonzero"
                                          height="15px"
                                          width="15px"
                                          viewBox="0,0,256,256"
                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g
                                            style={{ mixBlendMode: "normal" }}
                                            textAnchor="none"
                                            fontSize="none"
                                            fontWeight="none"
                                            fontFamily="none"
                                            strokeDashoffset={0}
                                            strokeDasharray=""
                                            strokeMiterlimit={10}
                                            strokeLinejoin="miter"
                                            strokeLinecap="butt"
                                            strokeWidth={1}
                                            stroke="none"
                                            fillRule="nonzero"
                                            fill="#20c997"
                                          >
                                            <g transform="scale(8,8)">
                                              <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                                            </g>
                                          </g>
                                        </svg>
                                      </div>
                                    </div>
                                    <a href={data.url} className="pc-know-more">
                                      <button className="tabs-know-more">
                                        Know More
                                      </button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                </div>
                {props.cardData[0][0].length > 0 && (
                  <div
                    className="pagination"
                    style={{ display: `${active === 6 ? "flex" : "none"}` }}
                  >
                    <Pagination
                      count={Math.ceil(props.cardData[0][0].length / perPage)}
                      style={{ fill: "white" }}
                      page={pageHigherStudies}
                      onChange={handleChangeHigherStudies}
                    />
                  </div>
                )}
              </div>
            </>
          )}
          {props.cardData[0].length !== 0 && (
            <>
              <div
                className="card-tab-outer-outer"
                style={{ display: `${active === 1 ? "flex" : "none"}` }}
              >
                <div
                  className="card-tab-outer"
                  style={{ display: `${active === 1 ? "flex" : "none"}` }}
                >
                  {props.cardData[3].length > 0 &&
                    props.cardData[3][0]
                      .slice(
                        pageMaterial * perPage - perPage,
                        pageMaterial * perPage
                      )
                      .map((data, idx) => {
                        if (
                          material === 1 &&
                          data.subcategory === "Interview Questions"
                        ) {
                          return (
                            <>
                              <div className="card" key={idx}>
                                <div className="content">
                                  <div className="back">
                                    {data.trending === "true" && (
                                      <div className="ribbon">
                                        <span className="trending-label">
                                          Trending
                                        </span>
                                      </div>
                                    )}
                                    {data.recommended === "true" && (
                                      <div className="ribbon2">
                                        <span className="trending-label">
                                          RECOMMENDED
                                        </span>
                                      </div>
                                    )}
                                    <div className="back-content">
                                      <img
                                        src={data.img}
                                        alt=""
                                        className="tabs-book-img"
                                        loading="lazy"
                                      />
                                    </div>
                                    <a
                                      href={data.url}
                                      className="tabs-know-more-mobile phone-know-more"
                                    >
                                      <button className="tabs-know-more-mobile-btn">
                                        Know More
                                      </button>
                                    </a>
                                  </div>
                                  <div className="front">
                                    <div className="img">
                                      <div className="circle"></div>
                                      <div className="circle" id="right"></div>
                                      <div className="circle" id="bottom"></div>
                                    </div>
                                    <div className="front-content">
                                      <div className="description">
                                        <div className="title">
                                          <p className="title">
                                            <strong>{data.title}</strong>
                                          </p>
                                          <svg
                                            fillRule="nonzero"
                                            height="15px"
                                            width="15px"
                                            viewBox="0,0,256,256"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <g
                                              style={{ mixBlendMode: "normal" }}
                                              textAnchor="none"
                                              fontSize="none"
                                              fontWeight="none"
                                              fontFamily="none"
                                              strokeDashoffset={0}
                                              strokeDasharray=""
                                              strokeMiterlimit={10}
                                              strokeLinejoin="miter"
                                              strokeLinecap="butt"
                                              strokeWidth={1}
                                              stroke="none"
                                              fillRule="nonzero"
                                              fill="#20c997"
                                            >
                                              <g transform="scale(8,8)">
                                                <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                      </div>
                                      <a
                                        href={data.url}
                                        className="pc-know-more"
                                      >
                                        <button className="tabs-know-more">
                                          Know More
                                        </button>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        }
                        return <></>;
                      })}
                </div>
                {material === 1 && props.cardData[3][0].length > 0 && (
                  <div
                    className="pagination"
                    style={{ display: `${active === 1 ? "flex" : "none"}` }}
                  >
                    <Pagination
                      count={Math.ceil(props.cardData[3][0].length / perPage)}
                      style={{ fill: "white" }}
                      page={pageMaterial}
                      onChange={handleChangeMaterial}
                    />
                  </div>
                )}

                <div
                  className="card-tab-outer"
                  style={{ display: `${active === 1 ? "flex" : "none"}` }}
                >
                  {props.cardData[4].length > 0 &&
                    props.cardData[4][0]
                      .slice(
                        pageMaterial2 * perPage - perPage,
                        pageMaterial2 * perPage
                      )
                      .map((data, idx) => {
                        if (
                          material === 2 &&
                          data.subcategory === "Practice Questions"
                        ) {
                          return (
                            <>
                              <div className="card" key={idx}>
                                <div className="content">
                                  <div className="back">
                                    {data.trending === "true" && (
                                      <div className="ribbon">
                                        <span className="trending-label">
                                          Trending
                                        </span>
                                      </div>
                                    )}
                                    {data.recommended === "true" && (
                                      <div className="ribbon2">
                                        <span className="trending-label">
                                          RECOMMENDED
                                        </span>
                                      </div>
                                    )}
                                    <div className="back-content">
                                      <img
                                        src={data.img}
                                        alt=""
                                        className="tabs-book-img"
                                        loading="lazy"
                                      />
                                    </div>
                                    <a
                                      href={data.url}
                                      className="tabs-know-more-mobile phone-know-more"
                                    >
                                      <button className="tabs-know-more-mobile-btn">
                                        Know More
                                      </button>
                                    </a>
                                  </div>
                                  <div className="front">
                                    <div className="img">
                                      <div className="circle"></div>
                                      <div className="circle" id="right"></div>
                                      <div className="circle" id="bottom"></div>
                                    </div>
                                    <div className="front-content">
                                      <div className="description">
                                        <div className="title">
                                          <p className="title">
                                            <strong>{data.title}</strong>
                                          </p>
                                          <svg
                                            fillRule="nonzero"
                                            height="15px"
                                            width="15px"
                                            viewBox="0,0,256,256"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <g
                                              style={{ mixBlendMode: "normal" }}
                                              textAnchor="none"
                                              fontSize="none"
                                              fontWeight="none"
                                              fontFamily="none"
                                              strokeDashoffset={0}
                                              strokeDasharray=""
                                              strokeMiterlimit={10}
                                              strokeLinejoin="miter"
                                              strokeLinecap="butt"
                                              strokeWidth={1}
                                              stroke="none"
                                              fillRule="nonzero"
                                              fill="#20c997"
                                            >
                                              <g transform="scale(8,8)">
                                                <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                      </div>
                                      <a
                                        href={data.url}
                                        className="pc-know-more"
                                      >
                                        <button className="tabs-know-more">
                                          Know More
                                        </button>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        }
                        return <></>;
                      })}
                </div>
                {material === 2 && props.cardData[4][0].length > 0 && (
                  <div
                    className="pagination"
                    style={{ display: `${active === 1 ? "flex" : "none"}` }}
                  >
                    <Pagination
                      count={Math.ceil(props.cardData[4][0].length / perPage)}
                      style={{ fill: "white" }}
                      page={pageMaterial2}
                      onChange={handleChangeMaterial2}
                    />
                  </div>
                )}
              </div>

              <div
                className="card-tab-outer-outer"
                style={{ display: `${active === 2 ? "flex" : "none"}` }}
              >
                <div
                  className="card-tab-outer"
                  style={{ display: `${active === 2 ? "flex" : "none"}` }}
                >
                  {props.cardData[1].length > 0 &&
                    props.cardData[1][0]
                      .slice(
                        pageRoadmap * perPage - perPage,
                        pageRoadmap * perPage
                      )
                      .map((data, idx) => {
                        if (
                          roadmap === 1 &&
                          data.subcategory === "Skill-Based"
                        ) {
                          return (
                            <>
                              <div className="card" key={idx}>
                                <div className="content">
                                  <div className="back">
                                    {data.trending === "true" && (
                                      <div className="ribbon">
                                        <span className="trending-label">
                                          Trending
                                        </span>
                                      </div>
                                    )}
                                    {data.recommended === "true" && (
                                      <div className="ribbon2">
                                        <span className="trending-label">
                                          RECOMMENDED
                                        </span>
                                      </div>
                                    )}
                                    <div className="back-content">
                                      <img
                                        src={data.img}
                                        alt=""
                                        className="tabs-book-img"
                                        loading="lazy"
                                      />
                                    </div>
                                    <a
                                      href={data.url}
                                      className="tabs-know-more-mobile phone-know-more"
                                    >
                                      <button className="tabs-know-more-mobile-btn">
                                        Know More
                                      </button>
                                    </a>
                                  </div>
                                  <div className="front">
                                    <div className="img">
                                      <div className="circle"></div>
                                      <div className="circle" id="right"></div>
                                      <div className="circle" id="bottom"></div>
                                    </div>
                                    <div className="front-content">
                                      <div className="description">
                                        <div className="title">
                                          <p className="title">
                                            <strong>{data.title}</strong>
                                          </p>
                                          <svg
                                            fillRule="nonzero"
                                            height="15px"
                                            width="15px"
                                            viewBox="0,0,256,256"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <g
                                              style={{ mixBlendMode: "normal" }}
                                              textAnchor="none"
                                              fontSize="none"
                                              fontWeight="none"
                                              fontFamily="none"
                                              strokeDashoffset={0}
                                              strokeDasharray=""
                                              strokeMiterlimit={10}
                                              strokeLinejoin="miter"
                                              strokeLinecap="butt"
                                              strokeWidth={1}
                                              stroke="none"
                                              fillRule="nonzero"
                                              fill="#20c997"
                                            >
                                              <g transform="scale(8,8)">
                                                <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                      </div>
                                      <a
                                        href={data.url}
                                        className="pc-know-more"
                                      >
                                        <button className="tabs-know-more">
                                          Know More
                                        </button>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        }
                        return <></>;
                      })}
                </div>
                {roadmap === 1 && props.cardData[1][0].length > 0 && (
                  <div
                    className="pagination"
                    style={{ display: `${active === 2 ? "flex" : "none"}` }}
                  >
                    <Pagination
                      count={Math.ceil(props.cardData[1][0].length / perPage)}
                      style={{ fill: "white" }}
                      page={pageRoadmap}
                      onChange={handleChangeRoadmap}
                    />
                  </div>
                )}

                <div
                  className="card-tab-outer"
                  style={{ display: `${active === 2 ? "flex" : "none"}` }}
                >
                  {props.cardData[5].length > 0 &&
                    props.cardData[5][0]
                      .slice(
                        pageRoadmap2 * perPage - perPage,
                        pageRoadmap2 * perPage
                      )
                      .map((data, idx) => {
                        if (
                          roadmap === 2 &&
                          data.subcategory === "Role-Based"
                        ) {
                          return (
                            <>
                              <div className="card" key={idx}>
                                <div className="content">
                                  <div className="back">
                                    {data.trending === "true" && (
                                      <div className="ribbon">
                                        <span className="trending-label">
                                          Trending
                                        </span>
                                      </div>
                                    )}
                                    {data.recommended === "true" && (
                                      <div className="ribbon2">
                                        <span className="trending-label">
                                          RECOMMENDED
                                        </span>
                                      </div>
                                    )}
                                    <div className="back-content">
                                      <img
                                        src={data.img}
                                        alt=""
                                        className="tabs-book-img"
                                        loading="lazy"
                                      />
                                    </div>
                                    <a
                                      href={data.url}
                                      className="tabs-know-more-mobile phone-know-more"
                                    >
                                      <button className="tabs-know-more-mobile-btn">
                                        Know More
                                      </button>
                                    </a>
                                  </div>
                                  <div className="front">
                                    <div className="img">
                                      <div className="circle"></div>
                                      <div className="circle" id="right"></div>
                                      <div className="circle" id="bottom"></div>
                                    </div>
                                    <div className="front-content">
                                      <div className="description">
                                        <div className="title">
                                          <p className="title">
                                            <strong>{data.title}</strong>
                                          </p>
                                          <svg
                                            fillRule="nonzero"
                                            height="15px"
                                            width="15px"
                                            viewBox="0,0,256,256"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <g
                                              style={{ mixBlendMode: "normal" }}
                                              textAnchor="none"
                                              fontSize="none"
                                              fontWeight="none"
                                              fontFamily="none"
                                              strokeDashoffset={0}
                                              strokeDasharray=""
                                              strokeMiterlimit={10}
                                              strokeLinejoin="miter"
                                              strokeLinecap="butt"
                                              strokeWidth={1}
                                              stroke="none"
                                              fillRule="nonzero"
                                              fill="#20c997"
                                            >
                                              <g transform="scale(8,8)">
                                                <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                                              </g>
                                            </g>
                                          </svg>
                                        </div>
                                      </div>
                                      <a
                                        href={data.url}
                                        className="pc-know-more"
                                      >
                                        <button className="tabs-know-more">
                                          Know More
                                        </button>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        }
                        return <></>;
                      })}
                </div>
                {roadmap === 2 && props.cardData[5][0].length > 0 && (
                  <div
                    className="pagination"
                    style={{ display: `${active === 2 ? "flex" : "none"}` }}
                  >
                    <Pagination
                      count={Math.ceil(props.cardData[5][0].length / perPage)}
                      style={{ fill: "white" }}
                      page={pageRoadmap2}
                      onChange={handleChangeRoadmap2}
                    />
                  </div>
                )}
              </div>

              <div
                className="card-tab-outer-outer"
                style={{ display: `${active === 4 ? "flex" : "none"}` }}
              >
                <div
                  className="card-tab-outer"
                  style={{ display: `${active === 4 ? "flex" : "none"}` }}
                >
                  {props.cardData[2].length > 0 &&
                    props.cardData[2][0]
                      .slice(
                        pageMiscellaneous * perPage - perPage,
                        pageMiscellaneous * perPage
                      )
                      .map((data, idx) => {
                        return (
                          <>
                            <div className="card" key={idx}>
                              <div className="content">
                                <div className="back">
                                  {data.trending === "true" && (
                                    <div className="ribbon">
                                      <span className="trending-label">
                                        Trending
                                      </span>
                                    </div>
                                  )}
                                  {data.recommended === "true" && (
                                    <div className="ribbon2">
                                      <span className="trending-label">
                                        RECOMMENDED
                                      </span>
                                    </div>
                                  )}
                                  <div className="back-content">
                                    <img
                                      src={data.img}
                                      alt=""
                                      className="tabs-book-img"
                                      loading="lazy"
                                    />
                                  </div>
                                  <a
                                    href={data.url}
                                    className="tabs-know-more-mobile phone-know-more"
                                  >
                                    <button className="tabs-know-more-mobile-btn">
                                      Know More
                                    </button>
                                  </a>
                                </div>
                                <div className="front">
                                  <div className="img">
                                    <div className="circle"></div>
                                    <div className="circle" id="right"></div>
                                    <div className="circle" id="bottom"></div>
                                  </div>
                                  <div className="front-content">
                                    <div className="description">
                                      <div className="title">
                                        <p className="title">
                                          <strong>{data.title}</strong>
                                        </p>
                                        <svg
                                          fillRule="nonzero"
                                          height="15px"
                                          width="15px"
                                          viewBox="0,0,256,256"
                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g
                                            style={{ mixBlendMode: "normal" }}
                                            textAnchor="none"
                                            fontSize="none"
                                            fontWeight="none"
                                            fontFamily="none"
                                            strokeDashoffset={0}
                                            strokeDasharray=""
                                            strokeMiterlimit={10}
                                            strokeLinejoin="miter"
                                            strokeLinecap="butt"
                                            strokeWidth={1}
                                            stroke="none"
                                            fillRule="nonzero"
                                            fill="#20c997"
                                          >
                                            <g transform="scale(8,8)">
                                              <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                                            </g>
                                          </g>
                                        </svg>
                                      </div>
                                    </div>
                                    <a href={data.url} className="pc-know-more">
                                      <button className="tabs-know-more">
                                        Know More
                                      </button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                </div>
                {props.cardData[2][0].length > 0 && (
                  <div
                    className="pagination"
                    style={{ display: `${active === 4 ? "flex" : "none"}` }}
                  >
                    <Pagination
                      count={Math.ceil(props.cardData[2][0].length / perPage)}
                      style={{ fill: "white" }}
                      page={pageMiscellaneous}
                      onChange={handleChangeMiscellaneous}
                    />
                  </div>
                )}
              </div>

              <div
                className="card-tab-outer-outer"
                style={{ display: `${active === 5 ? "flex" : "none"}` }}
              >
                <div
                  className="card-tab-outer"
                  style={{ display: `${active === 5 ? "flex" : "none"}` }}
                >
                  {props.cardData[0].length > 0 &&
                    props.cardData[0][0]
                      .slice(pageBooks * perPage - perPage, pageBooks * perPage)
                      .map((data, idx) => {
                        return (
                          <>
                            <div className="card" key={idx}>
                              <div className="content">
                                <div className="back">
                                  {data.trending === "true" && (
                                    <div className="ribbon">
                                      <span className="trending-label">
                                        Trending
                                      </span>
                                    </div>
                                  )}
                                  {data.recommended === "true" && (
                                    <div className="ribbon2">
                                      <span className="trending-label">
                                        RECOMMENDED
                                      </span>
                                    </div>
                                  )}
                                  <div className="back-content">
                                    <img
                                      src={data.img}
                                      alt=""
                                      className="tabs-book-img"
                                      loading="lazy"
                                    />
                                  </div>
                                  <a
                                    href={data.url}
                                    className="tabs-know-more-mobile phone-know-more"
                                  >
                                    <button className="tabs-know-more-mobile-btn">
                                      Know More
                                    </button>
                                  </a>
                                </div>
                                <div className="front">
                                  <div className="img">
                                    <div className="circle"></div>
                                    <div className="circle" id="right"></div>
                                    <div className="circle" id="bottom"></div>
                                  </div>
                                  <div className="front-content">
                                    <div className="description">
                                      <div className="title">
                                        <p className="title">
                                          <strong>{data.title}</strong>
                                        </p>
                                        <svg
                                          fillRule="nonzero"
                                          height="15px"
                                          width="15px"
                                          viewBox="0,0,256,256"
                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g
                                            style={{ mixBlendMode: "normal" }}
                                            textAnchor="none"
                                            fontSize="none"
                                            fontWeight="none"
                                            fontFamily="none"
                                            strokeDashoffset={0}
                                            strokeDasharray=""
                                            strokeMiterlimit={10}
                                            strokeLinejoin="miter"
                                            strokeLinecap="butt"
                                            strokeWidth={1}
                                            stroke="none"
                                            fillRule="nonzero"
                                            fill="#20c997"
                                          >
                                            <g transform="scale(8,8)">
                                              <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                                            </g>
                                          </g>
                                        </svg>
                                      </div>
                                    </div>
                                    <a href={data.url} className="pc-know-more">
                                      <button className="tabs-know-more">
                                        Know More
                                      </button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                </div>
                {props.cardData[0][0].length > 0 && (
                  <div
                    className="pagination"
                    style={{ display: `${active === 5 ? "flex" : "none"}` }}
                  >
                    <Pagination
                      count={Math.ceil(props.cardData[0][0].length / perPage)}
                      style={{ fill: "white" }}
                      page={pageBooks}
                      onChange={handleChangeBooks}
                    />
                  </div>
                )}
              </div>  
              {/* testing */}
              <div
                className="card-tab-outer-outer"
                style={{ display: `${active === 6 ? "flex" : "none"}` }}
              >
                <div
                  className="card-tab-outer"
                  style={{ display: `${active === 6 ? "flex" : "none"}` }}
                >
                  {props.cardData[6].length > 0 &&
                    props.cardData[6][0]
                      .slice(pageHigherStudies * perPage - perPage, pageHigherStudies * perPage)
                      .map((data, idx) => {
                        return (
                          <>
                            <div className="card" key={idx}>
                              <div className="content">
                                <div className="back">
                                  {data.trending === "true" && (
                                    <div className="ribbon">
                                      <span className="trending-label">
                                        Trending
                                      </span>
                                    </div>
                                  )}
                                  {data.recommended === "true" && (
                                    <div className="ribbon2">
                                      <span className="trending-label">
                                        RECOMMENDED
                                      </span>
                                    </div>
                                  )}
                                  <div className="back-content">
                                    <img
                                      src={data.img}
                                      alt=""
                                      className="tabs-book-img"
                                      loading="lazy"
                                    />
                                  </div>
                                  <a
                                    href={data.url}
                                    className="tabs-know-more-mobile phone-know-more"
                                  >
                                    <button className="tabs-know-more-mobile-btn">
                                      Know More
                                    </button>
                                  </a>
                                </div>
                                <div className="front">
                                  <div className="img">
                                    <div className="circle"></div>
                                    <div className="circle" id="right"></div>
                                    <div className="circle" id="bottom"></div>
                                  </div>
                                  <div className="front-content">
                                    <div className="description">
                                      <div className="title">
                                        <p className="title">
                                          <strong>{data.title}</strong>
                                        </p>
                                        <svg
                                          fillRule="nonzero"
                                          height="15px"
                                          width="15px"
                                          viewBox="0,0,256,256"
                                          xmlnsXlink="http://www.w3.org/1999/xlink"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <g
                                            style={{ mixBlendMode: "normal" }}
                                            textAnchor="none"
                                            fontSize="none"
                                            fontWeight="none"
                                            fontFamily="none"
                                            strokeDashoffset={0}
                                            strokeDasharray=""
                                            strokeMiterlimit={10}
                                            strokeLinejoin="miter"
                                            strokeLinecap="butt"
                                            strokeWidth={1}
                                            stroke="none"
                                            fillRule="nonzero"
                                            fill="#20c997"
                                          >
                                            <g transform="scale(8,8)">
                                              <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                                            </g>
                                          </g>
                                        </svg>
                                      </div>
                                    </div>
                                    <a href={data.url} className="pc-know-more">
                                      <button className="tabs-know-more">
                                        Know More
                                      </button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                          </>
                        
                        );
                     
                      })}
                </div>
                {props.cardData[6][0].length > 0 && (
                  <div
                    className="pagination"
                    style={{ display: `${active === 6 ? "flex" : "none"}` }}
                  >
                    <Pagination
                      count={Math.ceil(props.cardData[6][0].length / perPage)}
                      style={{ fill: "white" }}
                      page={pageHigherStudies}
                      onChange={handleChangeHigherStudies}
                    />
                  </div>
                )}
              </div>  
            </>
          )}
   
        </div>
        
      )}
      
    </>
  );
}
