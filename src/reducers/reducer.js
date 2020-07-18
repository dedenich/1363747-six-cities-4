import {combineReducers} from 'redux';
import {reducer as offers} from './offers/offers.js';
import {reducer as user} from './user/user.js';
import NameSpace from './namespace.js';

const rootReducer = combineReducers({
  [NameSpace.OFFERS]: offers,
  [NameSpace.USER]: user,
});

export default rootReducer;
