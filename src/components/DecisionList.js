import Decision from "./Decision";
import * as React from "react";
import axios from "axios";

class DecisionList extends React.Component {

  deleteDecision = (decisionId) => {
    const url = `http://localhost:7733/dm-api/v1/decisions/${decisionId}`;
    axios.delete(url)
      .then(() => {
        this.props.onDecisionDeleted()
      }, error => {
        alert(`error on delete decision with id ${decisionId}: ${error}`);
      });
  }

  render() {
    return (
      <div style={{padding: 50}}>
        <h3 style={{fontSize: "150%", color: "whitesmoke"}}>Existing decisions:</h3>
        <ul style={{listStyleType: "none"}}>
          {this.props.decisions.map(decision => (
            <li>
              <Decision
                key={decision.id}
                {...decision}
                onDeleteRequested={this.deleteDecision}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default DecisionList;
