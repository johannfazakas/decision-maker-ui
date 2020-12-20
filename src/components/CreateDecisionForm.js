import * as React from "react";
import axios from "axios";

class CreateDecisionForm extends React.Component {

  state = {
    name: '',
    description: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.createDecision();
    this.setState({name: '', description: ''})
  }

  createDecision = () => {
    const data = {name: this.state.name, description: this.state.description};
    const url = "http://localhost:7733/dm-api/v1/decisions";
    axios.post(url, data)
      .then(() => {
        this.props.onDecisionCreated()
      }, error => {
        alert(`failed to create decision: ${error}`)
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{padding: 50, fontSize: "150%"}}>
        <h3 style={{color: "whitesmoke"}}>Create a new decision:</h3>
        <input
          type="text"
          value={this.state.name}
          onChange={event => this.setState({name: event.target.value})}
          placeholder="name"
          required
        />
        <br />
        <input
          type="text"
          value={this.state.description}
          onChange={event => this.setState({description: event.target.value})}
          placeholder="description"
        />
        <br />
        <button>Create Decision</button>
      </form>
    );
  }
}

export default CreateDecisionForm;
