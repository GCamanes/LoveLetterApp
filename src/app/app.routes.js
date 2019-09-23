/**
 * App Navigation
 */
import React from 'react';
import {Actions, Scene} from 'react-native-router-flux';
import AddPlayer from '../components/AddPlayer';
import AppConfig from './app.config';
import AppConstants from './app.constants';
import EndGamePage from '../pages/EndGamePage/EndGamePage';
import GamePage from '../pages/GamePage/GamePage';
import HomePage from '../pages/HomePage/HomePage';
import LogoutButton from '../components/LogoutButton';
import NewGamePage from '../pages/NewGamePage/NewGamePage';
import UserLoginPage from '../pages/UserLoginPage/UserLoginPage';

/* Routes */
const AppRoutes = Actions.create(
  <Scene key="root" {...AppConfig.sceneProps}>
    <Scene
      key={AppConstants.ROUTES.HOME}
      title="Love Letter"
      component={HomePage}
      renderLeftButton={<LogoutButton />}
    />
    <Scene key={AppConstants.ROUTES.END_GAME} title="End game" component={EndGamePage} />
    <Scene key={AppConstants.ROUTES.GAME} title="Game" component={GamePage} />
    <Scene
      key={AppConstants.ROUTES.NEW_GAME}
      title="New Game"
      component={NewGamePage}
      renderRightButton={<AddPlayer />}
    />
    <Scene
      key={AppConstants.ROUTES.USER_LOGIN}
      component={UserLoginPage}
      hideNavBar
      initial
    />
  </Scene>,
);

export default AppRoutes;
