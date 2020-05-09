import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import "./pages/homepage/homepage.styles.scss";

// test component
const SkinCare = () => <h1>Skincare Page</h1>;

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop/skincare" component={SkinCare} />
        </Switch>
      </div>
    );
  }
}

export default App;
