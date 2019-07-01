import React from 'react';
import NameInputField from './NameInputField.js'
import SubmitButton from './SubmitButton.js'

class WelcomeWindow extends React.Component {
  render() {
    return (
      <div className="WelcomeWindow">
        <form action="index.html" method="post">
          <NameInputField />
          <SubmitButton />
        </form>
      </div>
    )
  }
}

export default WelcomeWindow;
