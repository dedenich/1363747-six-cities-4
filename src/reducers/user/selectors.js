import NameSpace from '../namespace.js';

const NAME_SPACE = NameSpace.USER;

const getAuthorizationStatus = (state) => state[NAME_SPACE].authorizationStatus;
const getAuthorizationInfo = (state) => state[NAME_SPACE].authInfo;

export {getAuthorizationStatus,
  getAuthorizationInfo
};
