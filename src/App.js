import React from "react";
import "./App.css";

import HomePage from "./components/homepage/homepage.component";
import "./components/homepage/homepage.styles.scss"


class App extends React.Component {
  render() {
    return (
      <div>
        <HomePage categories={['Women', 'Men', 'Children']} />
      </div>
    );
  }
}

export default App;
