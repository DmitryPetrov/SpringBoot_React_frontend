import React from 'react';

class WelcomeWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.textFieldHandler = this.textFieldHandler.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
    this.actionCreatorInputFrom = this.actionCreatorInputFrom.bind(this);
  }

  textFieldHandler(event) {
    this.setState({value: event.target.value});
  }

  buttonHandler(event) {
    event.preventDefault();
    let action = this.actionCreatorInputFrom();
    this.props.store.dispatch(action);
  }

  actionCreatorInputFrom() {
    return {
      type: "NEW_NAME",
      name: this.state.value
    }
  }

  render() {
    return (
      <div className="WelcomeWindow">
        <form action="index.html" method="post" onSubmit={this.buttonHandler}>
          <label>User Name:</label>
          <input type="text" onChange={this.textFieldHandler}/>
          <input type="submit" value="Отправить" />
        </form>
      </div>
    )
  }
}

export default WelcomeWindow;
