import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";

function GitHubProfile() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<GitHubProfile />);
