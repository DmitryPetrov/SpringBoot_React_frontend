import React from 'react';

class NameInputField extends React.Component {
  render() {
    return (
      <div>
        <label>User Name:</label>
        <input type="text" name="userName" value="Name" />
      </div>
    )
  }
}

export default NameInputField;
