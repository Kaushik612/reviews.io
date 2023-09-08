import React from "react";
import Script from "next/script";

let GOOGLE_API_KEY = "";
const source = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places&callback=Function.prototype`;

const GooglePlacesScript = () => {
  return (
    <Script type="text/javascript" src={source} strategy="beforeInteractive" />
  );
};

export default GooglePlacesScript;
