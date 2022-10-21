import * as AppActions from '../../actions';
import ACTION_TYPE from '../../actions/globalAction';
const INITIAL_STATE = {
  all_todo: [],
};

export default addTodoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AppActions.ACTION_TYPE.ADD_TODO:
      return {
        ...state,
        all_todo: [...all_todo, action.payload],
      };
    default:
      return state;
  }
};
