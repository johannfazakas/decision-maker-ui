import * as React from "react";

class Decision extends React.Component {

  handleDelete = () => {
    this.props.onDeleteRequested(this.props.id)
  }

  render() {
    return (
      <div style={{margin: '2rem', backgroundColor: "darkgray", padding: 5}}>
        <div style={{fontSize: "150%"}}>{this.props.name}</div>
        <div>{this.props.description}</div>
        <button
          onClick={this.handleDelete}
          style={{color: "orangered"}}>
          Delete
        </button>
      </div>
    )
  }
}

export default Decision;
