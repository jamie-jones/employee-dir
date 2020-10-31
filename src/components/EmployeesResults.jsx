import React, {Component} from "react";
import API from "../utils/API";
import Employees from "./Employees";



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

// sortedNames() {
//   const sortedEmployee = employee.sort(function(a, b) {
//     var nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     var nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1; //nameA comes first
//     }
//     if (nameA > nameB) {
//       return 1; // nameB comes first
//     }
//     return 0;  // names must be equal
//   });
// }


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