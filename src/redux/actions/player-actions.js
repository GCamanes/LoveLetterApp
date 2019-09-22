import AppConstants from '../../app/app.constants';

export function updatePlayerSelected(player) {
  return {
    type: AppConstants.EVENTS.UPDATE_SELECTED_PLAYER_REDUX,
    payload: player,
  };
}
