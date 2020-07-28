import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/Userinput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'GAGA'
  }

  stateChangeHandler = (event) => {
    this.setState({ username: event.target.value })
  }
  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.stateChangeHandler}
          name={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="YURI" />
      </div>
    );
  }
}

export default App;
