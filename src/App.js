import './App.css';
import * as React from "react";
import DecisionList from "./components/DecisionList";
import CreateDecisionForm from "./components/CreateDecisionForm";

const decisions = [
  {name: 'bicicleta', description: 'cadou pentru parinti'},
  {name: 'storcator fructe', description: 'cadou pentru buni'},
  {name: 'rachete tenis', description: 'de la mama Crinei'}
];

class App extends React.Component {

  render() {
    return (
      <div style={{backgroundColor: "darkolivegreen", padding: 50}}>
        <h1 style={{color: "whitesmoke"}}>Decision Maker Application</h1>
        <CreateDecisionForm />
        <DecisionList decisions={decisions}/>
        <h3 style={{color: "whitesmoke"}}>footer</h3>
      </div>
    );
  }
}

export default App;
