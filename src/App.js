import './App.css';
import * as React from "react";
import DecisionList from "./components/DecisionList";
import CreateDecisionForm from "./components/CreateDecisionForm";
import axios from "axios";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {decisions: []};
    this.loadDecisions()
  }

  loadDecisions = () => {
    axios.get("http://localhost:7733/dm-api/v1/decisions")
      .then(response => {
        this.setState(prevState => ({
          decisions: response.data.items
        }))
      }, error => {
        alert(`failed to grab decisions: ${error}`);
      });
  }

  render() {
    return (
      <div style={{backgroundColor: "darkolivegreen", padding: 50}}>
        <h1 style={{color: "whitesmoke"}}>Decision Maker Application</h1>
        <CreateDecisionForm onDecisionCreated={this.loadDecisions} />
        <DecisionList decisions={this.state.decisions} />
        <h3 style={{color: "whitesmoke"}}>footer</h3>
      </div>
    );
  }
}

export default App;
