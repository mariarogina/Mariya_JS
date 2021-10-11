const initialItem = [];

const moveItems = (state = initialItem, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
      break;

    case "DEL_ITEM":
      
      return state = state.filter((x) => x.id !== action.payload.id)

      break;

    default:
      return state;
      break;
  }
};

export default moveItems;
