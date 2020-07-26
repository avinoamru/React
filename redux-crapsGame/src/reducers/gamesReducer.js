export const crapReducer = (state = 100, action) => {
  switch (action.type) {
    case "WON":
      return (state = state + action.payload);
    case "LOST":
      return (state = state - action.payload);
    case "POINT":
      console.log(action.sum);
      break;
    default:
      return state;
  }
};
