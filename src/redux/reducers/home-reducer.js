import AppConstants from '../../app/app.constants';

const initialState = {
  orderLeaderboardBy: AppConstants.RANKING.ORDER_BY_RATIO,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case AppConstants.EVENTS.TOGGLE_HOME_ORDER_LEADERBOARD_SAGA: {
      const orderLeaderboardBy = state.orderLeaderboardBy === AppConstants.RANKING.ORDER_BY_RATIO ? AppConstants.RANKING.ORDER_BY_WIN : AppConstants.RANKING.ORDER_BY_RATIO;
      return {
        ...state,
        orderLeaderboardBy
      };
    }
    default:
      return state;
  }
};

export default homeReducer;
