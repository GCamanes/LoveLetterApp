import {put, takeLatest} from 'redux-saga/effects';
import {Actions} from 'react-native-router-flux';

import AppConstants from '../../../app/app.constants';
import FirestoreService from '../../../api/firestore';
import showAlert from '../../../utils/showAlert';
import {initHomeSaga} from '../home/init-home-saga';

export function* endGameSaga(action) {
  yield put({
    type: AppConstants.EVENTS.SET_LOADER,
    payload: {scene: AppConstants.ROUTES.END_GAME, loading: true},
  });
  try {
    let promisesPlayers = [];
    action.payload.forEach(player => {
      promisesPlayers.push(
        FirestoreService.updatePlayerScore(player, player.winner),
      );
    });
    yield Promise.all(promisesPlayers);
    yield put({
      type: AppConstants.EVENTS.SET_LOADER,
      payload: {scene: AppConstants.ROUTES.END_GAME, loading: false},
    });
    // Redirect
    Actions.reset(AppConstants.ROUTES.HOME);
    initHomeSaga();
  } catch (error) {
    console.log('error', error);
    yield put({
      type: AppConstants.EVENTS.SET_LOADER,
      payload: {scene: AppConstants.ROUTES.END_GAME, loading: false},
    });
    showAlert('Error while updating data from firebase', 'Error');
  }
}

/**
 * Watch event saga.
 *
 * @returns {IterableIterator<ForkEffect>}
 */
export default function* watch() {
  yield takeLatest(AppConstants.EVENTS.END_GAME_SAGA, endGameSaga);
}
