const articleReducer = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_ARTICLE':
        return action.payload;
      default:
        return state;
    }
};

export default articleReducer;