import AppConstants from '../../app/app.constants';

const initialState = {
  players: [],
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case AppConstants.EVENTS.SET_PLAYERS_REDUX:
      return {
        ...state,
        players: action.payload,
      };
    default:
      return state;
  }
};

export default playerReducer;
