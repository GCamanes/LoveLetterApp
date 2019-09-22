import {put, select, takeLatest} from 'redux-saga/effects';

import AppConstants from '../../../app/app.constants';
import FirestoreService from '../../../api/firestore';
import showAlert from '../../../utils/showAlert';

export function* addPlayerSaga(action) {
  yield put({
    type: AppConstants.EVENTS.SET_LOADER,
    payload: {scene: AppConstants.ROUTES.ADD_PLAYER, loading: true},
  });
  try {
    // Get connected user from redux.
    const getPlayers = state => state.player.players;
    const playersStore = yield select(getPlayers);

    if (
      playersStore.filter(player => player.name === action.payload).length > 0
    ) {
      throw new Error('NAME_UNAVAILABLE');
    }
    yield FirestoreService.addPlayer(action.payload);
    const players = yield FirestoreService.getPlayers();
    yield put({
      type: AppConstants.EVENTS.SET_PLAYERS_REDUX,
      payload: players,
    });
    yield put({
      type: AppConstants.EVENTS.SHOW_ADDING_PLAYER_VIEW,
      payload: false,
    });
  } catch (error) {
    if (error.message === 'NAME_UNAVAILABLE') {
      showAlert('This name is not available', 'Error');
    } else {
      showAlert('Error when adding a player to firebase', 'Error');
    }
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
