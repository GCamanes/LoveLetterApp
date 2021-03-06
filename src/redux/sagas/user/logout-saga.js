import {put, takeLatest} from 'redux-saga/effects';
import {Actions} from 'react-native-router-flux';

import AppConstants from '../../../app/app.constants';

export function* logoutSaga() {
  yield put({type: AppConstants.EVENTS.LOGOUT_REDUX});
  yield put({type: AppConstants.EVENTS.CLEAR_PLAYER_REDUCER});
  Actions.reset(AppConstants.ROUTES.USER_LOGIN);
}

/**
 * Watch event saga.
 *
 * @returns {IterableIterator<ForkEffect>}
 */
export default function* watch() {
  yield takeLatest(AppConstants.EVENTS.LOGOUT_SAGA, logoutSaga);
}
