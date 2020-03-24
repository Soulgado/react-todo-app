import React from 'react';
import * as errors from '../errors';

function NameValidator(props) {
  function checkValidity() {
    switch (props.error) {
      case errors.FIELD_EMPTY:
        return <p>You must set the name!</p>
      case errors.FIELD_TOO_LONG:
        return <p>The name must be no longer than 30 symbols.</p>
      case errors.FIELD_TOO_SHORT:
        return <p>The name is too short</p>
      default:
        return
    }
  }

  return (
    <div className='errors'>{checkValidity()}</div>
  )
}

export default NameValidator;