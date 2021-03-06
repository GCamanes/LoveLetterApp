import AppConstants from '../../app/app.constants';

const initialState = {
  players: [],
  addingPlayer: false,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case AppConstants.EVENTS.SET_PLAYERS_REDUX:
      return {
        ...state,
        players: action.payload,
      };
    case AppConstants.EVENTS.UPDATE_SELECTED_PLAYER_REDUX:
      let newPlayer = {...action.payload};
      newPlayer.selected = !action.payload.selected;
      const others = state.players.filter(
        item => item.name !== action.payload.name,
      );
      return {
        ...state,
        players: [...others, newPlayer].sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0,
        ),
      };
    case AppConstants.EVENTS.SHOW_ADDING_PLAYER_VIEW:
      return {
        ...state,
        addingPlayer: action.payload,
      };
    case AppConstants.EVENTS.CLEAR_PLAYER_REDUCER:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default playerReducer;
