import ACTION_TYPE from '../globalAction';

/**Action to Add Todo ***/
const addTodoReducer = todo_data => dispatch => {
  dispatch({
    type: ACTION_TYPE.ADD_TODO,
    payload: todo_data,
  });
};
export default addTodoReducer;
