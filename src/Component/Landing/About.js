import React from "react";

export default function About() {
  const clickMenuIcon = () => {
    let pcNav = document.getElementById("navbar");

    let nav = document.getElementById("overlay-menu");
    let toggleIcon = document.getElementById("menuIcon");
    if (nav.style.transform !== "translateX(0%)") {
      nav.style.transform = "translateX(0%)";
      nav.style.transition = "transform 0.2s ease-out";
      pcNav.style.borderBottomLeftRadius = "0px";
      pcNav.style.borderBottomRightRadius = "0px";
    } else {
      nav.style.transform = "translateX(-100%)";
      nav.style.transition = "transform 0.2s ease-out";
      pcNav.style.borderBottomLeftRadius = "20px";
      pcNav.style.borderBottomRightRadius = "20px";
    }

    if (toggleIcon.className !== "menuIcon toggle") {
      toggleIcon.className += " toggle";
    } else {
      toggleIcon.className = "menuIcon";
    }
  };
  return (
    <>
      <nav id="navbar" className="">
        <div className="nav-wrapper">
          <div className="logo">
            {/* <a href="#home"><i class=""></i><img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2FC4D0BAQGdIrA-l7aEnQ%2Fcompany-logo_200_200%2F0%3Fe%3D2159024400%26v%3Dbeta%26t%3D6hXsGdT5ztbJ-9Su0Mvxb9yWyHg3D9hKkQusZw10HxA&imgrefurl=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Ftechieventures.in&docid=ye0_UI1lhof8XM&tbnid=wjB_u2HvSqaXwM%3A&vet=10ahUKEwjG4ITVqofnAhXVbX0KHX4BC30QMwhHKAQwBA..i&w=200&h=200&bih=657&biw=1366&q=techieventures&ved=0ahUKEwjG4ITVqofnAhXVbX0KHX4BC30QMwhHKAQwBA&iact=mrc&uact=8"></a> */}
            <a
              href="/#"
              className="navbar-logo"
              style={{
                width: "max-content",
                display: "block",
                // marginTop: "20px",
              }}
            >
              <img
                className="company-logo"
                src="https://ik.imagekit.io/qz6ubt34n4/logo-whiteAsset%202.png?updatedAt=1696619947825"
                alt=""
                width={"220"}
                height={"50"}
              />
            </a>
          </div>

          <ul id="menu">
            <li>
              <a href="/about" style={{ color: "white" }}>
                About
              </a>
            </li>
            <li>
              <a href="/disclaimer">Disclaimer</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="menuIcon" id="menuIcon" onClick={clickMenuIcon}>
        {/* <span className="icon icon-bars"></span>
              <span className="icon icon-bars overlay"></span> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
          style={{ fill: "white", width: "25px", height: "25px" }}
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>

      <div
        className="overlay-menu"
        id="overlay-menu"
        style={{ zIndex: "99", marginTop: "75px" }}
      >
        <ul id="menu">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/disclaimer">Disclaimer</a>
          </li>
        </ul>
      </div>
      <div className="nav-right-div">
        <h1 className="nav-right-heading">About Prepcrazy</h1>
        <p className="nav-right-para">
        Prepcrazy is a free resource portal you need to prepare for your future. From your interview prep to your entrance exam we've got you all covered. We provide all the required material you need to ace any examination. <br />

 We're proud to be sponsored and run by Campus Credentials, a trusted name in education and career development. Campus Credentials is your ultimate guiding partner in helping you secure the best placements. We are passionate about empowering students to excel in their academic and professional journeys. Prepcrazy is driven by the same moto in mind: empower students to excel. <br />

We strive to make the best possible solutions for all your problems. Our mission is simple: to provide you with the tools and knowledge you need to succeed in exams and placements. With a user-friendly interface, expert guidance, practice papers, and career insights, Prepcrazy is here to help you reach your academic and professional goals. We understand the challenges that students face when navigating the competitive landscape of competitive exams and interviews. Prepcrazy is here to lift a little burden from you. With our extensive knowledge of various industries, we've curated some carefully crafted in-house prep material.  Join us on your journey to success!
        </p>
      </div>
    </>
  );
}
