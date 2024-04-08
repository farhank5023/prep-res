import React from "react";
import Landing from "./Component/Landing/Landing";
import Home from "./Component/Home/Home";
import AdminForm from "./Component/Admin/AdminForm";
import Login from "./Component/Admin/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from "./Component/Admin/AdminHome";
import AdminUpdate from "./Component/Admin/AdminUpdate";
import AdminDelete from "./Component/Admin/AdminDelete";
import AdminTrending from "./Component/Admin/AdminTrending";
import PdfView from "./Component/Home/PdfView";
import AdminView from "./Component/Admin/AdminView";
import ReportData from "./Component/Admin/ReportData";
import RequestData from "./Component/Admin/RequestData";
import DeleteData from "./Component/Admin/DeleteData";
import About from "./Component/Landing/About";
import Disclaimer from "./Component/Landing/Disclaimer";
import { Partytown } from "@builder.io/partytown/react";
import UseGoogleAnalytics from "./Component/GoogleAnalytics/UseGoogleAnalytics";
import InternLogin from "./Component/Admin/InternLogin";
import InternHome from "./Component/Admin/InternHome";
import AdminRecommended from "./Component/Admin/AdminRecommended";

// import React, { useEffect,lazy } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ReactGA from "react-ga";

// const Landing = lazy(() => import('./Component/Landing/Landing'));
// const Home = lazy(() => import('./Component/Home/Home'));
// const AdminForm = lazy(() => import('./Component/Admin/AdminForm'));
// const Login = lazy(() => import('./Component/Admin/Login'));
// const AdminHome = lazy(() => import('./Component/Admin/AdminHome'));
// const AdminUpdate = lazy(() => import('./Component/Admin/AdminUpdate'));
// const AdminDelete = lazy(() => import('./Component/Admin/AdminDelete'));
// const AdminTrending = lazy(() => import('./Component/Admin/AdminTrending'));
// const PdfView = lazy(() => import('./Component/Home/PdfView'));
// const AdminView = lazy(() => import('./Component/Admin/AdminView'));
// const RequestData = lazy(() => import('./Component/Admin/RequestData'));
// const ReportData = lazy(() => import('./Component/Admin/ReportData'));
// const DeleteData = lazy(() => import('./Component/Admin/DeleteData'));
// const About = lazy(() => import('./Component/Landing/About'));
// const Disclaimer = lazy(() => import('./Component/Landing/Disclaimer'));

// const TRACKING_ID = "G-0GRLKRW94F"; // OUR_TRACKING_ID
// ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <div className="App">
      <Partytown
        debug={process.env.NODE_ENV === "development"}
        forward={["dataLayer.push"]}
      />
      <UseGoogleAnalytics>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/book" element={<Home />} />
            <Route path="/admin" element={<Login />} />
            <Route path="/intern" element={<InternLogin />} />
            <Route path="/pdfview" element={<PdfView />} />
            <Route path="/about" element={<About />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/adminhome" element={<AdminHome />} />
            <Route path="/internhome" element={<InternHome />} />
            <Route path="/adminadd" element={<AdminForm />} />
            <Route path="/adminupdate" element={<AdminUpdate />} />
            <Route path="/adminDelete" element={<AdminDelete />} />
            <Route path="/admintrend" element={<AdminTrending />} />
            <Route path="/adminrecommended" element={<AdminRecommended />} />
            <Route path="/adminview" element={<AdminView />} />
            <Route path="/adminreport" element={<ReportData />} />
            <Route path="/adminrequest" element={<RequestData />} />
            <Route path="/admindeletedata" element={<DeleteData />} />
          </Routes>
        </BrowserRouter>
      </UseGoogleAnalytics>
    </div>
  );
}

export default App;
