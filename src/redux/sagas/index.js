import exitSaga from './user/exit-saga';
import initHomeSaga from './home/init-home-saga';
import initNewGameSaga from './new-game/init-new-game-saga';
import loginSaga from './user/login-saga';
import logoutSaga from './user/logout-saga';
import {all} from 'redux-saga/effects';

const sagas = [
  exitSaga(),
  initHomeSaga(),
  initNewGameSaga(),
  loginSaga(),
  logoutSaga(),
];

function* rootSaga() {
  yield all(sagas);
}

export default rootSaga;
