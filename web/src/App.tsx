import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// Components
const Header = React.lazy(() =>  import("./components/Header"));
const  Home = React.lazy(() =>  import("./routes/Home"));
const Menus = React.lazy(() =>  import("./routes/Menus"));
const Gallery = React.lazy(() =>  import("./routes/Gallery"));
const ScrollToTop  = React.lazy(() =>  import("./components/ScrollToTop"));
const Footer  = React.lazy(() =>  import("./components/Footer"));
const NotFound = React.lazy(() =>  import("./routes/NotFound"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <Header />
        <ScrollToTop />
        <Switch>
              <Route exact path="/" component={Home} />
             <Route exact path="/menus" component={Menus} />
            <Route exact path="/menus/:type" component={Menus} />
            <Route path="/gallery" component={Gallery} />
            <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
      </Suspense>
    </Router>
  );
}

export default App;
