const intitialState = {
  preferiti: {
    content: [], //iniziamo con un array vuoto perchè riceveremo un array
  },
};

const mainReducer = (state = intitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default mainReducer;
