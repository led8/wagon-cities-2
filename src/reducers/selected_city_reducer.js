const selectCityReducer = (state = null, action) => {
  if(action.type === 'SELECT_CITY'){
    return action.payload
  }
  else {
    return state
  }
};

export default selectCityReducer;
