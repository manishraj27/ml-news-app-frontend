import React from "react";
import './loader.css';
function Loader() {
  return (
    <div className="loading-wave">
      <div className="loading-bar"></div>
      <div className="loading-bar"></div>
      <div className="loading-bar"></div>
      <div className="loading-bar"></div>
    </div>
  );
}

export default Loader;
