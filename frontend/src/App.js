import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import React from "react";

import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Calendar from "./pages/Calendar";
import Main from "./components/layout/Main";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import LandingPage from "./pages/LandingPage";
import AboutUs from "./components/landingPage/AboutUs";
import ContactUs from "./components/landingPage/ContactUs";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/AboutUs" component={AboutUs} />
        <Route exact path="/ContactUs" component={ContactUs} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/sign-in" component={SignIn} />
        <Main>
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/tables" component={Tables} />
          <Route exact path="/billing" component={Billing} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/profile" component={Profile} />
        </Main>
        {/* <Redirect from="*" to="/My-Companion" /> */}
      </Switch>
    </div>
  );
}

export default App;
