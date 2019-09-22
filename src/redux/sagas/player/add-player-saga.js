import {put, takeLatest} from 'redux-saga/effects';

import AppConstants from '../../../app/app.constants';
import FirestoreService from '../../../api/firestore';

export function* addPlayerSaga(action) {
  yield put({
    type: AppConstants.EVENTS.SET_LOADER,
    payload: {scene: AppConstants.ROUTES.ADD_PLAYER, loading: true},
  });
  try {
    console.log('ADD PLAYER', action.payload);
    const players = yield FirestoreService.getPlayers;
    yield put({
      type: AppConstants.EVENTS.SHOW_ADDING_PLAYER_VIEW,
      payload: false,
    });
  } catch (error) {
    console.log('error', error);
  }
  yield put({
    type: AppConstants.EVENTS.SET_LOADER,
    payload: {scene: AppConstants.ROUTES.ADD_PLAYER, loading: false},
  });
}

/**
 * Watch event saga.
 *
 * @returns {IterableIterator<ForkEffect>}
 */
export default function* watch() {
  yield takeLatest(AppConstants.EVENTS.ADD_PLAYER_SAGA, addPlayerSaga);
}
