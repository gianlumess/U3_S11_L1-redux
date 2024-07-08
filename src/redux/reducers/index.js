const intitialState = {
  preferiti: {
    content: [], //iniziamo con un array vuoto perchè riceveremo un array
  },
};

const mainReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        preferiti: {
          ...state.preferiti,
          content: [...state.preferiti.content, action.payload],
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
