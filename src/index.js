import React from "react";
import ReactDOM from "react-dom"; // Import ReactDOM to render the app
import "./index.css"; // Import global CSS styles
import App from "./App"; // Import the main App component

// Rendering the App component inside the root div in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
