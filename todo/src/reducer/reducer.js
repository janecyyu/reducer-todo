const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          item: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TOGO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "CLEAR_TOGO":
      const newState = state.filter((i) => i.completed === false);
      return newState;

    default:
      return state;
  }
};

export default reducer;
