import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// Components
import Header from "./components/Header";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
