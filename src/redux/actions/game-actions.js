import AppConstants from '../../app/app.constants';

export function launchGame(players, deckSize) {
  return {type: AppConstants.EVENTS.LAUNCH_GAME_SAGA, payload: {players, deckSize}};
}

export function endGame(players) {
  return {type: AppConstants.EVENTS.END_GAME_SAGA, payload: players};
}
