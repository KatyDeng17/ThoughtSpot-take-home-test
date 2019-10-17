import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Expert from "./components/Expert/Expert";
import ThankYouPage from "./components/ThankYouPage/Thank";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/expert" component={Expert}></Route>
        <Route path="/thankyoupage" component={ThankYouPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
