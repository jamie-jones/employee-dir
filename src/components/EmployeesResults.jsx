import React, {Component} from "react";
import API from "../utils/API";
import Employees from "./Employees";


class EmployeesResults extends Component {

  state = {
    results: []
  };

  componentDidMount() {
    API.getEmployees()
    .then(res =>{this.setState({results:res.data.results});
  console.log(res);
}).catch(err=>console.log(err));
}
render() {
  return (
    <>
    <div>
    {this.state.results.map(employee => (
      <Employees
      image={employee.picture.thumbnail}
      name={employee.name.first + employee.name.last}
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