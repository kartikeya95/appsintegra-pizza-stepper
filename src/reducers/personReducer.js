const initPersonList = {};

export default (state = initPersonList, action) => {
  if (action.type === 'setPerson') {
    const newState = Object.assign({}, state);
    const personIndex = action.payload.personIndex;
    newState[`${personIndex}`] = action.payload.data;
    return newState;
  } else {
    return state;
  }
};