import React from "react";
import ReactDOM from "react-dom";
import EmployeesList from "./EmployeesList/EmployeesList.jsx";
import "./styles.css";

function App() {
  return <div className="App">
    <EmployeesList />
  </div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
