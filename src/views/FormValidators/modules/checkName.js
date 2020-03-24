import * as errors from '../errors';

function checkNameValidity(name) {
  if (name.length === 0) {
    return errors.FIELD_EMPTY;
  } else if (name.length > 30) {
    return errors.FIELD_TOO_LONG;
  } else if (name.length < 4) {
    return errors.FIELD_TOO_SHORT;
  } else return
}

export default checkNameValidity;