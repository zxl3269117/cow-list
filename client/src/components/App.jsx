import React from 'react';
import NameList from './NameList';
import Description from './Description';
import CreateCow from './CreateCow';
import requests from '../requests';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowsList: [{
        id: 0,
        name: 'Add your first cow!',
        description: 'Add your first cow!'
      }],
      description: null
    }
  }

  componentDidMount() {
    requests.getAllCows((cowsData) => {
      if (!cowsData.length) {
        this.setState({
          cowsList: ['Add your first cow!']
        })
      }

      this.setState({
        cowsList: cowsData
      })
    })
  }

  handleNameClick (cow) {
    this.setState({
      description: cow.description
      })
  }

  handleCreateCow (requestObj) {
    event.preventDefault();
    requests.createCow(requestObj, (cowsData) => {
      this.setState({
        cowsList: cowsData
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome To Cows List!</h1>
        <div className="description">
          <Description description={this.state.description} />
        </div>
        <CreateCow handleCreateCow={this.handleCreateCow.bind(this)} />
        <div className="name-list">
          <NameList cows={this.state.cowsList} handleNameClick={this.handleNameClick.bind(this)}/>
        </div>
      </div>
    )
  }
}

export default App;