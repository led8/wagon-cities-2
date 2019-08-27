const citiesReducer = (state = [], action) => {
  if(action.type === 'DISPLAY_CITIES'){
    return action.payload
  }
  else {
    return state
  }
};

export default citiesReducer;
