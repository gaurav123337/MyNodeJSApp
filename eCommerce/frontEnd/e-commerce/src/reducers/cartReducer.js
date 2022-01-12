const cartReducer = (state = "", action) => {
  switch (action.type) {
    case "GET_COUNT":
      console.log({ ...state, count: action.payload })
      return { ...state, count: action.payload };
    default:
      return state;
  }
}

export default cartReducer;
