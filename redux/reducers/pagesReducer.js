const pagesReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PAGES':
            return action.payload;
        default:
            return state;
    }
};

export default pagesReducer;