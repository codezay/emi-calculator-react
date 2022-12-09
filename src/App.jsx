import { useState } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";

// components
import Calculator from "./components/Calculator";

function App() {
  return (
    // <div className="App">
    <div className="container-fluid">
      <div className="container">
        {/* <h1>Hello world</h1> */}
        <Calculator />
      </div>
    </div>
  );
}

export default App;
