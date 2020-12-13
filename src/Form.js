import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import FormResults from "./formResults.js";
import EIResults from "./EIResults";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

toast.configure();
function FormPage() {
  const notify = () => {
    toast.success("Data Saved Sucessfully", {
      autoClose: 3000,
    });
  };
  const [input, setInput] = React.useState({
    name: "",
    email: "",
    phonenumber: "",
    dob: "",
    address: "",
    salary: "",
    otherIncome: "",
    mortgage: "",
    rent: "",
    utilities: "",
    travel: "",
    food: "",
    otherExpenditure: "",
    loans: "",
    creditcards: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  function handleClick(event) {
    event.preventDefault();
    notify();
    console.log(input);

    const newUser = {
      name: input.name,
      email: input.email,
      phonenumber: input.phonenumber,
      dob: input.dob,
      address: input.address,
      disposableIncome: disposableIncome(),
      incomeExpenditureRatio: eIRatio(),
      grade: calcGrade(),
    };

    axios.post("http://localhost/3000/create", newUser).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  function totalIncome() {
    var totalIncome = parseInt(input.salary) + parseInt(input.otherIncome);

    return totalIncome;
  }

  function totalExpenditure() {
    var totalExpenditure =
      parseInt(input.mortgage) +
      parseInt(input.rent) +
      parseInt(input.utilities) +
      parseInt(input.travel) +
      parseInt(input.food) +
      parseInt(input.otherExpenditure) +
      parseInt(input.loans) +
      parseInt(input.creditcards);

    return totalExpenditure;
  }

  function disposableIncome() {
    var disposableIncome = 0;

    disposableIncome = totalIncome() - totalExpenditure();
    if (disposableIncome < 0) {
      disposableIncome = 0;
    }
    // console.log(`disposable income is ${disposableIncome}`);

    return disposableIncome;
  }

  function eIRatio() {
    var eIRatio = (totalExpenditure() / totalIncome()) * 100;

    // console.log(`expenditure-to-income ratio is  ${eIRatio} %`);

    var ratio = parseInt(eIRatio);
    return ratio;
  }

  function calcGrade() {
    let grade = "B";
    if (eIRatio() >= 50) {
      // console.log(`I am greater than 50`);
      grade = "D";
    } else if (50 > eIRatio() && eIRatio() >= 30) {
      // console.log(`I am between 30 and 50`);
      grade = "C";
    } else if (30 > eIRatio() && eIRatio() >= 10) {
      // console.log(`I am between 10 and 29`);
      grade = "B";
    } else {
      // console.log(`I am less than 10`);
      grade = "A";
    }
    // console.log(`My grade is ${grade}`);
    return grade;
  }

  return (
    <div>
      {/* <Rating name={input.name} /> */}
      <div className="form">
        <div className="table">
          <h1>Tell us about you.</h1>

          <form className="form-group row">
            <label
              htmlFor="example-text-input"
              className="col-2 col-form-label"
            >
              Name
            </label>
            <div className="col-10">
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
                className="form-control"
                placeholder="James Harden"
                autoComplete="off"
              />
            </div>
            <label htmlFor="example-text" className="col-2 col-form-label">
              Email
            </label>
            <div className="col-10">
              <input
                type="text"
                name="email"
                value={input.email}
                onChange={handleChange}
                className="form-control"
                placeholder="james@harden.com"
                autoComplete="off"
              />
            </div>
            <label htmlFor="example-text" className="col-2 col-form-label">
              Phone Number
            </label>

            <div className="col-10">
              <input
                type="tel"
                name="phonenumber"
                value={input.phonenumber}
                onChange={handleChange}
                className="form-control"
                placeholder="07085214839"
                autoComplete="off"
              />
            </div>

            <label htmlFor="example-text" className="col-2 col-form-label">
              Date of Birth
            </label>

            <div className="col-10">
              <input
                type="date"
                name="dob"
                value={input.dob}
                onChange={handleChange}
                className="form-control"
                placeholder="07085214839"
                autoComplete="off"
              />
            </div>

            <label htmlFor="example-text" className="col-2 col-form-label">
              Address
            </label>

            <div className="col-10">
              <input
                type="text"
                name="address"
                value={input.address}
                onChange={handleChange}
                className="form-control"
                placeholder="Buckingham Palace"
                autoComplete="off"
              />
            </div>
            <div className="little-padding"></div>
          </form>
        </div>
        <div>
          <div>
            <h1>Income Expenditure Statement</h1>

            <table className="table table-bordered table-hover">
              <tr>
                <th className="">Income</th>
                <th className="">Amount</th>
                <th className="col-md-4">Expenditure</th>
                <th className="col-md-4">Amount</th>
              </tr>
              <tr>
                <td>Salary</td>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="2800"
                  name="salary"
                  value={input.salary}
                />
                <td>Mortgage</td>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="500"
                  name="mortgage"
                  value={input.mortgage}
                />
              </tr>
              <tr>
                <td>Other</td>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="300"
                  name="otherIncome"
                  value={input.otherIncome}
                />
                <td>Rent</td>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="0"
                  name="rent"
                  value={input.rent}
                />
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>Utilities</td>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="150"
                  name="utilities"
                  value={input.utilities}
                />
              </tr>
              <tr>
                <td></td>

                <td></td>
                <td>Travel</td>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="150"
                  name="travel"
                  value={input.travel}
                />
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>Food</td>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="500"
                  name="food"
                  value={input.food}
                />
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>Other</td>

                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="256"
                  name="otherExpenditure"
                  value={input.otherExpenditure}
                />
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td></td>
                <td></td>
                <td>Debt Payments</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>Loans</td>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="1000"
                  name="loans"
                  value={input.value}
                />
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td>Credit Cards</td>
                <input
                  onChange={handleChange}
                  type="text"
                  placeholder="400"
                  name="creditcards"
                  value={input.creditcards}
                />
                <td></td>
              </tr>
            </table>
            <h6>
              Note: All fields must be filled for calculation to be made. (If no
              amount, type "0".)
            </h6>

            <div className="little-padding"></div>

            <h2></h2>
          </div>

          <div className="little-padding">
            <h1>Summary</h1>
          </div>
          <FormResults
            name={input.name}
            email={input.email}
            phonenumber={input.phonenumber}
            dob={input.dob}
            address={input.address}
          />
          <div className="little-padding"></div>
          <EIResults
            disposableIncome={disposableIncome()}
            disposableIncome={disposableIncome()}
            ieRatio={eIRatio()}
            iegrade={calcGrade()}
          />
          {/* <EIResults disposableIncome={0} /> */}
          <div className="little-padding">
            <button
              className="btn btn-primary  btn-block"
              onClick={handleClick}
            >
              Submit Data
            </button>
            {/* <div className="little-padding"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPage;
