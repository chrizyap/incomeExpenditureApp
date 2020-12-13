// import logo from './logo.svg';
import "./App.css";

function FormResults(props) {
  return (
    <div>
      <div>
        <h5>Full Name: {props.name}</h5>
        <h5>Email: {props.email}</h5>
        <h5>Phone Number: {props.phonenumber}</h5>
        <h5>Date of Birth: {props.dob}</h5>
        <h5>Address: {props.address}</h5>
      </div>
    </div>
  );
}

export default FormResults;
