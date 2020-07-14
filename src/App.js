import React from "react";
import "../src/App.css";
import Navbar from "./component/Navbar";
import Body from "./component/Body";
import SubNav from "./component/SubNav";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SubNav />
      <Body />
    </div>
  );
}

export default App;
