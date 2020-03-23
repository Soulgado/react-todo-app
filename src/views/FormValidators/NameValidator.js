import React from 'react';

function NameValidator(props) {
  function checkValidity() {
    switch (props.errors) {
      case 'short':
        return <p>You must set the name!</p>
      case 'long':
        return <p>The name must be no longer than 30 symbols.</p>
      default:
        return
    }
  }

  return (
    <div className='errors'>{checkValidity()}</div>
  )
}

export default NameValidator;