import React from "react";
import "./styles/styles.css";
import { Dashboard } from "./components/Dashboard";
import { Navigation } from "./components/Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="flex">
      <Router>
        <Navigation />
        <Switch>
          <div className="bg-white h-screen w-full flex justify-center items-center p-16">
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
