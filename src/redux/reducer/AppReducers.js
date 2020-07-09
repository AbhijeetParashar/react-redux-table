import {combineReducers} from 'redux';
import userReducer from './UserReducer';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */
const appReducerList = combineReducers({
    users:userReducer
});

const AppReducers = (state, action) => {
    return appReducerList(state, action)
  }
export default AppReducers
