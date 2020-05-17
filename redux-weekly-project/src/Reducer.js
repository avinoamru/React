const globalState = {
  counter: 0,
};

const Reducer = (state = globalState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        counter: state.counter + action.payload,
      };

    default:
      return state;
  }
};
export default Reducer;
