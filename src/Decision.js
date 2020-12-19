import * as React from "react";

class Decision extends React.Component {

  render() {
    return (
      <div style={{ margin: '2rem', backgroundColor: "darkgray", padding: 5 }}>
        <div style={{fontSize: "150%"}}>{this.props.name}</div>
        <div>{this.props.description}</div>
      </div>
    )
  }
}

export default Decision;
