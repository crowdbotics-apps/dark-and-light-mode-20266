import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard28101432Reducer from '../features/Dashboard28101432/redux/reducers'
import SignUp24101355Reducer from '../features/SignUp24101355/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard28101432: Dashboard28101432Reducer,
SignUp24101355: SignUp24101355Reducer,

});