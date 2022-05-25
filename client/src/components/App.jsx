import React from 'react';
import NameList from './NameList';

class App extends React.Component {
  // props should be the JSON data gotten back from the initial GET request from browser
  constructor(props) {
    super(props);
    this.state = {
      names: ['Add some cows!'],
      description: null
    }
  }

  componentDidMount() {

  }

  render() {
    console.log(this.props.cows);
    return (
    <div className="name-list">
      <NameList cows={this.props.cows} />
    </div>
    )
  }
}

export default App;