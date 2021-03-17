import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { connect, ConnectedProps } from "react-redux";
// Components
const Header = React.lazy(() => import("./components/Header"));
const Home = React.lazy(() => import("./routes/Home"));
const Menus = React.lazy(() => import("./routes/Menus"));
const Gallery = React.lazy(() => import("./routes/Gallery"));
const ScrollToTop = React.lazy(() => import("./components/ScrollToTop"));
const Contact = React.lazy(() => import("./components/contact/Contact"));
const Footer = React.lazy(() => import("./components/Footer"));
const NotFound = React.lazy(() => import("./routes/NotFound"));

interface ApplicationProps {
  application: {
    toggle: boolean
  }
}

const mapState = (state: ApplicationProps) => ({
  toggle: state.application.toggle
})

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

function App({ toggle }: Props) {
  return (
    <Router>
      <Suspense fallback={
        <div id="loading-container">
          <span>
            <h2>Pitchers</h2>
            <p>Sports Bar & Grill</p>
            <img src="/assets/spinner/loading.gif" alt="Loading ..." />
          </span>
        </div>
      }>
        <div className="App" style={toggle === true ? { overflow: "hidden" } : { overflow: "none" }}>
          <Header />
          <ScrollToTop />
          {
            toggle === true && <Contact />
          }

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

export default connector(App);
