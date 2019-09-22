import {put, takeLatest} from 'redux-saga/effects';

import AppConstants from '../../../app/app.constants';
import FirestoreService from '../../../api/firestore';
import showAlert from '../../../utils/showAlert';

export function* initHomeSaga(action) {
  yield put({
    type: AppConstants.EVENTS.SET_LOADER,
    payload: {scene: AppConstants.ROUTES.HOME, loading: true},
  });
  try {
    const players = yield FirestoreService.getPlayers();
    yield put({
      type: AppConstants.EVENTS.SET_PLAYERS_REDUX,
      payload: players,
    });
  } catch (error) {
    console.log('error', error);
    showAlert('Error while getting data from firebase', 'Error');
  }
  yield put({
    type: AppConstants.EVENTS.SET_LOADER,
    payload: {scene: AppConstants.ROUTES.HOME, loading: false},
  });
}

/**
 * Watch event saga.
 *
 * @returns {IterableIterator<ForkEffect>}
 */
export default function* watch() {
  yield takeLatest(AppConstants.EVENTS.INIT_HOME_PAGE_SAGA, initHomeSaga);
}
