import AppConstants from '../../app/app.constants';

export function initHomePage() {
  return { type: AppConstants.EVENTS.INIT_HOME_PAGE_SAGA };
}

export function toggleOrderLeaderboardView() {
  return { type: AppConstants.EVENTS.TOGGLE_HOME_ORDER_LEADERBOARD_SAGA }
}