import {put, takeLatest} from 'redux-saga/effects';
import {Actions} from 'react-native-router-flux';

import AppConstants from '../../../app/app.constants';

export function* launchGameSaga(action) {
  yield put({
    type: AppConstants.EVENTS.SET_LOADER,
    payload: {scene: AppConstants.ROUTES.GAME, loading: true},
  });
  Actions.jump(AppConstants.ROUTES.GAME, {
    players: action.payload.players,
    deck: {},
  });
  yield put({
    type: AppConstants.EVENTS.SET_LOADER,
    payload: {scene: AppConstants.ROUTES.GAME, loading: false},
  });
}

/**
 * Watch event saga.
 *
 * @returns {IterableIterator<ForkEffect>}
 */
export default function* watch() {
  yield takeLatest(AppConstants.EVENTS.LAUNCH_GAME, launchGameSaga);
}
