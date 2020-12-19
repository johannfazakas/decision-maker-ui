import './App.css';
import * as React from "react";
import Decision from "./Decision";

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Decision Maker Application</h1>
        <ul>
          <li><Decision /></li>
          <li><Decision /></li>
        </ul>
      </div>
    );
  }
}

export default App;
