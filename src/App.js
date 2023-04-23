import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contacts from "./containers/contact";
import MapsAndChart from "./containers/chartandmap";
import EditData from "./components/editdata";

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Contacts} exact />
        <Route path="/mapandchart" component={MapsAndChart} />
        <Route path="/edit/:id" component={EditData} />
      </Router>
    </>
  );
}

export default App;
