import {put, takeLatest} from 'redux-saga/effects';

import AppConstants from '../../../app/app.constants';
import {Actions} from 'react-native-router-flux';

export function* initNewGameSaga(action) {
  yield put({
    type: AppConstants.EVENTS.SET_LOADER,
    payload: {scene: AppConstants.ROUTES.NEW_GAME, loading: true},
  });
  try {
    Actions.jump(AppConstants.ROUTES.NEW_GAME);
  } catch (error) {
    console.log('error', error);
  }
  yield put({
    type: AppConstants.EVENTS.SET_LOADER,
    payload: {scene: AppConstants.ROUTES.NEW_GAME, loading: false},
  });
}

/**
 * Watch event saga.
 *
 * @returns {IterableIterator<ForkEffect>}
 */
export default function* watch() {
  yield takeLatest(AppConstants.EVENTS.INIT_NEW_GAME_PAGE, initNewGameSaga);
}
