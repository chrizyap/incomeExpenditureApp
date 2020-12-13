// import logo from './logo.svg';
import "./App.css";

function EIResults(props) {
  return (
    <div>
      <div>
        <h5>Your Disposable Income is £{props.disposableIncome}</h5>
        <h5>Your Income-Expenditure Ratio is: {props.ieRatio}%</h5>
        <h5>Your IE Rating is: {props.iegrade}</h5>
      </div>
    </div>
  );
}

export default EIResults;
