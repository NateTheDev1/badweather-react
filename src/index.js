import React from "react";
import ReactDOM from "react-dom";
import BadWeather from "./BadWeather";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <BadWeather />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
