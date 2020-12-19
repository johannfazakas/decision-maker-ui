import Decision from "./Decision";
import * as React from "react";

class DecisionList extends React.Component {

  render() {
    return (
      <div>
        <ul style={{padding: 50}}>
          {this.props.decisions.map(decision => <li><Decision {...decision}/></li>)}
        </ul>
      </div>
    )
  }
}

export default DecisionList;
