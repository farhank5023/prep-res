import { useEffect } from "react";

export default function GoogleAnalytics() {
  useEffect(() => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      console.log("[DEV]: stubbing Google Analytics integration");
    }

    if (document) {
      let d = document;
      let primaryS = d.createElement("script");
      primaryS.type = "text/partytown";
      primaryS.setAttribute(
        "src",
        "https://www.googletagmanager.com/gtag/js?id=G-0GRLKRW94F"
      );
      primaryS.setAttribute("async", "true");

      let s = d.createElement("script");
      s.type = "text/partytown";
      s.innerText =
        " window.dataLayer = window.dataLayer || [];function gtag() {dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-0GRLKRW94F');";
      d.getElementsByTagName("head")[0].appendChild(primaryS);
      d.getElementsByTagName("head")[0].appendChild(s);
      window.dispatchEvent(new CustomEvent("ptupdate"));
    }
  });
}
