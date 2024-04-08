import React from "react";
import GoogleAnalytics from "../GoogleAnalytics";

export default function UseGoogleAnalytics({ children }) {
  GoogleAnalytics();
  return <>{children}</>;
}
