import Decision from "./Decision";
import * as React from "react";

class DecisionList extends React.Component {

  render() {
    return (
      <div style={{padding: 50}}>
        <h3 style={{fontSize: "150%", color: "whitesmoke"}}>Existing decisions:</h3>
        <ul style={{listStyleType: "none"}}>
          {this.props.decisions.map(decision => <li><Decision {...decision}/></li>)}
        </ul>
      </div>
    )
  }
}

export default DecisionList;
