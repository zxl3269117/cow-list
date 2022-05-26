import React from 'react';

class CreateCow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    if (event.target.id === 'name') {
      this.setState({
        name: event.target.value
      })
    }

    if(event.target.id === 'description') {
      this.setState({
        description: event.target.value
      })
    }
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={() => {this.props.handleCreateCow (this.state)}}>
          <h4>Add A Cow!</h4>
          <label>
            Name:
            <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Description
            <textarea
              id="description"
              value={this.state.description}
              onChange={this.handleChange}
              placeholder="describe your cow"
              cols="40" rows="10"
            ></textarea>
          </label>
          <input type="submit" value="Create" />
        </form>
      </div>
    )
  }
}

export default CreateCow;