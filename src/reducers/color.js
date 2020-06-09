const initialState = {
  current: "white",
  available: ["white", "black", "red"],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, current: action.newColor };
    default:
      return state;
  }
};
export default reducer;
