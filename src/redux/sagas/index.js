import addPlayerSaga from './player/add-player-saga';
import endGameSaga from './game/end-game-saga';
import exitSaga from './user/exit-saga';
import initHomeSaga from './home/init-home-saga';
import initNewGameSaga from './new-game/init-new-game-saga';
import launchGameSaga from './game/launch-game-saga';
import loginSaga from './user/login-saga';
import logoutSaga from './user/logout-saga';
import {all} from 'redux-saga/effects';

const sagas = [
  addPlayerSaga(),
  endGameSaga(),
  exitSaga(),
  initHomeSaga(),
  initNewGameSaga(),
  launchGameSaga(),
  loginSaga(),
  logoutSaga(),
];

function* rootSaga() {
  yield all(sagas);
}

export default rootSaga;
