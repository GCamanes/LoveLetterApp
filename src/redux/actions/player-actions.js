import AppConstants from '../../app/app.constants';

export function updatePlayerSelected(player) {
  return {
    type: AppConstants.EVENTS.UPDATE_SELECTED_PLAYER_REDUX,
    payload: player,
  };
}

export function showAddingPlayerView(show) {
  return {
    type: AppConstants.EVENTS.SHOW_ADDING_PLAYER_VIEW,
    payload: show,
  };
}

/* export function addPlayer(name) {
  return {
    type: AppConstants.EVENTS.UPDATE_SELECTED_PLAYER_REDUX,
    payload: name,
  };
} */
