import './App.css';
import * as React from "react";
import Decision from "./Decision";

class App extends React.Component {

  render() {
    return (
      <div style={{backgroundColor: "darkolivegreen", padding: 50}}>
        <h1 style={{color: "whitesmoke"}}>Decision Maker Application</h1>
        <ul style={{padding: 50}}>
          <li><Decision /></li>
          <li><Decision /></li>
        </ul>
        <h3 style={{color: "whitesmoke"}}>footer</h3>
      </div>
    );
  }
}

export default App;
