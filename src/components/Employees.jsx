import "./Employees.css"


function Employees(props) {

    return (
      <>
        <main className="container">
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col" onClick={() => sortedEmployee('name')}>Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><img alt="thumbnail" className="img-fluid" src={props.image}/></th>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.dob}</td>
    </tr>
  </tbody>
</table>
      </main>
      </>
    );
  };

export default Employees;