import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { MdOutlineDelete, MdOutlineRecommend } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import {
  BiPencil,
  BiSolidCommentAdd,
  BiTrendingUp,
  BiSolidReport,
} from "react-icons/bi";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import "./AdminSidebar.css";

import { CiViewList } from "react-icons/ci";
const routes = [
  {
    path: "/adminhome",
    name: "Admin Home",
    icon: <AiOutlineHome />,
  },
  {
    path: "/adminadd",
    name: "Add Resources",
    icon: <BiSolidCommentAdd />,
  },
  {
    path: "/adminupdate",
    name: "Update Resources",
    icon: <BiPencil />,
  },
  {
    path: "/admindelete",
    name: "Delete Resources",
    icon: <MdOutlineDelete />,
  },
  {
    path: "/admintrend",
    name: "Add Trending",
    icon: <BiTrendingUp />,
  },
  {
    path: "/adminrecommended",
    name: "Add Recommend",
    icon: <MdOutlineRecommend />,
  },
  {
    path: "/adminview",
    name: "Resources Downloaded by User",
    icon: <CiViewList />,
  },
  {
    path: "/adminreport",
    name: "Resources Report by User",
    icon: <BiSolidReport />,
  },
  {
    path: "/adminrequest",
    name: "Resources Request by User",
    icon: <BiSolidReport />,
  },
  {
    path: "/admindeletedata",
    name: "Resources Delete Request",
    icon: <BiSolidReport />,
  },
];

const internRoutes = [
  {
    path: "/internhome",
    name: "Intern Home",
    icon: <AiOutlineHome />,
  },
  {
    path: "/adminadd",
    name: "Add Resources",
    icon: <BiSolidCommentAdd />,
  },
  {
    path: "/adminupdate",
    name: "Update Resources",
    icon: <BiPencil />,
  },
  {
    path: "/admindelete",
    name: "Delete Resources",
    icon: <MdOutlineDelete />,
  },
  {
    path: "/admintrend",
    name: "Add Trending",
    icon: <BiTrendingUp />,
  },
  {
    path: "/adminrecommended",
    name: "Add Recommend",
    icon: <MdOutlineRecommend />,
  },
  {
    path: "/adminreport",
    name: "Resources Report by User",
    icon: <BiSolidReport />,
  },
  {
    path: "/adminrequest",
    name: "Resources Request by User",
    icon: <BiSolidReport />,
  },
  {
    path: "/admindeletedata",
    name: "Resources Delete Request",
    icon: <BiSolidReport />,
  },
];

export default function AdminSidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  //   const inputAnimation = {
  //     hidden: {
  //       width: 0,
  //       padding: 0,
  //       transition: {
  //         duration: 0.2,
  //       },
  //     },
  //     show: {
  //       width: "140px",
  //       padding: "5px 15px",
  //       transition: {
  //         duration: 0.2,
  //       },
  //     },
  //   };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  const removeSessionStorage = () => {
    sessionStorage.removeItem("admin");
    sessionStorage.removeItem("intern");
  };
  return (
    <>
      <div className="sidenav-main-container">
        <motion.div
          animate={{
            width: isOpen ? "230px" : "55px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidenav-sidebar `}
        >
          <div className="sidenav-top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="sidenav-logo"
                >
                  <a
                    href="/#"
                    className="navbar-logo"
                    style={{
                      width: "max-content",
                      display: "block",
                      // marginTop: "20px",
                    }}
                    onClick={removeSessionStorage}
                  >
                    <img
                      className="company-logo-3"
                      src="https://ik.imagekit.io/qz6ubt34n4/logo-whiteAsset%202.png?updatedAt=1696619947825"
                      alt=""
                      width={"150"}
                      height={"30"}
                    />
                  </a>
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="sidenav-bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {/* <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div> */}
          <section className="sidenav-routes">
            {sessionStorage.getItem("admin") === "success"
              ? routes.map((route, index) => {
                  if (route.subRoutes) {
                    return (
                      <SidebarMenu
                        setIsOpen={setIsOpen}
                        route={route}
                        showAnimation={showAnimation}
                        isOpen={isOpen}
                      />
                    );
                  }

                  return (
                    <NavLink
                      to={route.path}
                      key={index}
                      className="sidenav-link"
                      activeclassname="sidenav-active"
                    >
                      <div
                        className="sidenav-icon"
                        style={{ width: "30px", height: "30px" }}
                      >
                        {route.icon}
                      </div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="sidenav-link_text"
                          >
                            {route.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </NavLink>
                  );
                })
              : internRoutes.map((route, index) => {
                  if (route.subRoutes) {
                    return (
                      <SidebarMenu
                        setIsOpen={setIsOpen}
                        route={route}
                        showAnimation={showAnimation}
                        isOpen={isOpen}
                      />
                    );
                  }

                  return (
                    <NavLink
                      to={route.path}
                      key={index}
                      className="sidenav-link"
                      activeclassname="sidenav-active"
                    >
                      <div
                        className="sidenav-icon"
                        style={{ width: "30px", height: "30px" }}
                      >
                        {route.icon}
                      </div>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            variants={showAnimation}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                            className="sidenav-link_text"
                          >
                            {route.name}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </NavLink>
                  );
                })}
          </section>
        </motion.div>
        <main>{children}</main>
      </div>
    </>
  );
}
