import React from "react";
import "./App.css";
import EmployeesResults from "./components/EmployeesResults";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="header-section">
          <h1>Employee Directory</h1>
          <p>
            Click on carrots to filter by heading or use the search box to
            narrow your results
          </p>
        </section>
        <section className="input-section">
          <input
            type="search"
            class="form-control search-input"
            placeholder="Search"
          ></input>
        </section>
      </header>
      <div>
        <EmployeesResults/>
      </div>
    </div>
  );
}

export default App;
