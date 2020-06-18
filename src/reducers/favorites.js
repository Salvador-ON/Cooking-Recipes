const favorites = (state = false, action) => {
  switch (action.type) {
    case 'CHANGE_STATE':
      return action.payload;
    default:
      return state;
  }
};

export default favorites;