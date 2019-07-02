import React from 'react';

class WelcomeWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.textFieldHandler = this.textFieldHandler.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
  }

  textFieldHandler(event) {
    this.setState({value: event.target.value});
  }

  buttonHandler(event) {
    console.log(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="WelcomeWindow">
        <form action="index.html" method="post" onSubmit={this.buttonHandler}>
          <label>User Name:</label>
          <input type="text" value={this.state.value} onChange={this.textFieldHandler}/>

          <input type="submit" value="Отправить" />
        </form>
      </div>
    )
  }
}

export default WelcomeWindow;
