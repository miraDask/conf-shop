import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import "./pages/homepage/homepage.styles.scss";

// test component
const Hats = () => <h1>Hats Page</h1>;

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop/hats" component={Hats} />
        </Switch>
      </div>
    );
  }
}

export default App;
