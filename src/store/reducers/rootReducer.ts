import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
    counter:counterReducer.reducer
  });

  export default rootReducer;