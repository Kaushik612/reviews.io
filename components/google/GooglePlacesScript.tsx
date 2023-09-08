import React from "react";
import Script from "next/script";

const source =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyDnnF5xG9h_ZAudsyFVqhs13xgJqetsj0k&libraries=places&callback=Function.prototype";

const GooglePlacesScript = () => {
  return (
    <Script type="text/javascript" src={source} strategy="beforeInteractive" />
  );
};

export default GooglePlacesScript;
