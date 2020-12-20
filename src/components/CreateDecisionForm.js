import * as React from "react";

class CreateDecisionForm extends React.Component {

  state = {
    name: '',
    description: ''
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    alert(`decision created with name: ${this.state.name}`);
    this.setState({name: '', description: ''});
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
