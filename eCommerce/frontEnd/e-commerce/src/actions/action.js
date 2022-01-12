export const addToCart = (data) => {
  console.log(data, "In action");
  return {
    type: "GET_COUNT",
    payload: data
  }
}
