import React from "react";
import "./App.css";
import EmployeesResults from "./components/EmployeesResults";
// import SearchForm from "./components/SearchForm";

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
        {/* <section>
          <SearchForm />
        </section> */}
      </header>
      <div>
        <EmployeesResults />
      </div>
    </div>
  );
}

export default App;
