import React, {Component} from "react";
import API from "../utils/API";
import Employees from "./Employees";
import "./EmployeesResults.css"



class EmployeesResults extends Component {

  state = {
    results: [],
    filteredResults: []
  };

  componentDidMount() {
    API.getEmployees()
    .then(res =>{this.setState({results:res.data.results, filteredResults:res.data.results});
  console.log(res);
}).catch(err=>console.log(err));
}

handleInputChange = event => {
  const value = event.target.value;
  const filteredResults = this.state.results.filter((employee) => 
    employee.name.first.toLowerCase().includes(value.toLowerCase())
  );
  this.setState({
    search: value,
    filteredResults: filteredResults
  })
}

sortEmployees = (event) => {
  const value = event.target.value;
  const filteredResults = this.state.results.sort(function(a, b) {
    var nameA = a.name.first.toUpperCase();
    var nameB = b.name.first.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0
  })
  this.setState({
    search: value,
    filteredResults: filteredResults,
  });
};

render() {
  return (
    <>
        <form>
      <section className="form-group input-section">
        <input
          onChange={this.handleInputChange}
          value={this.state.search}
          name="search"
          type="text"
          className="form-control search-input"
          placeholder="Search"
          id="search"
        />
      </section>
    </form>
    <button type="button" class="btn btn-outline-primary" onClick={this.sortEmployees}>Sort by Name</button>
    {/* <button onClick={this.sortEmployees}>Sort</button> */}
    <div>
    {this.state.filteredResults.map(employee => (
      <Employees
      image={employee.picture.thumbnail}
      name={employee.name.first + "" +employee.name.last}
      phone={employee.phone}
      email={employee.email}
      dob={employee.dob.date}
       />))}
      </div>
      </>
  )
}

}

export default EmployeesResults;