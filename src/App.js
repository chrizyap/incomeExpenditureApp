// import logo from './logo.svg';
import "./App.css";
import FormPage from "./Form";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <FormPage></FormPage>
      </div>
    </Router>
  );
}

export default App;
