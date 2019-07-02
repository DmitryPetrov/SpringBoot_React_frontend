import React from 'react';
import { createStore } from 'redux'
import axios from 'axios';

import WelcomeWindow from './WelcomeWindow.js'
import MessageFromServer from './MessageFromServer.js'

let store = createStore(reducerInputForm);


class WelcomeWindowContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
    };

    this.listenerInputForm = this.listenerInputForm.bind(this);
    store.subscribe(this.listenerInputForm);
  }

  listenerInputForm() {
    let name = store.getState().name;
    console.log(name);
    axios.get('/login?userName=' + name).then(response => {
      this.setState({message: response.data.userName});
    });
  }

  render() {
    return (
      <div>
        <WelcomeWindow store={store} />
        <br />
        <MessageFromServer message={this.state.message} />
      </div>
    )
  }
}

function reducerInputForm(state, action) {
  if (typeof state === 'undefined') {
    return {name: 'no name'}
  }

  if (action.type === "NEW_NAME") {
    return Object.assign({}, state, {name: action.name})
  }

  console.log(action);
}

export default WelcomeWindowContainer;
