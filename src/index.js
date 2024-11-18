import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot from react-dom
import App from "./App";
import "./index.css"; // Optional if you use global CSS

// Use createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
