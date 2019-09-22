import AppConstants from '../../app/app.constants';

export function launchGame(players, deckSize) {
  return {type: AppConstants.EVENTS.LAUNCH_GAME, payload: {players, deckSize}};
}
