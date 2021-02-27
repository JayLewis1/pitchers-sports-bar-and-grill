import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// Components
import Header from "./components/Header";
import Home from "./routes/Home";
import Menus from "./routes/Menus";
import Gallery from "./routes/Gallery";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menus" component={Menus} />
          <Route exact path="/menus/:type" component={Menus} />
          <Route exact path="/gallery" component={Gallery} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
