import NetInfo from '@react-native-community/netinfo';
import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';
import {BackHandler, SafeAreaView, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import androidBackHandler from '../utils/back-handler';
import * as AppActions from '../redux/actions/app-actions';

import {AppColors} from '../theme';
import AppConstants from '../app/app.constants';
import AddingPlayerView from './AddingPlayerView';

class AppContainer extends Component {
  componentDidMount() {
    const {updateConnectivity} = this.props;
    BackHandler.addEventListener('hardwareBackPress', androidBackHandler);
    NetInfo.addEventListener(state =>
      updateConnectivity(state.isInternetReachable),
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', androidBackHandler); // Remove listener
  }

  /**
   * Render function to display component.
   */
  render() {
    const {addingPlayer, children} = this.props;

    return (
      <Fragment>
        <StatusBar barStyle="light-content" backgroundColor={AppColors.palette.main.tertiary}/>
        <SafeAreaView style={{flex: 0, backgroundColor: AppColors.palette.black}} />
        <SafeAreaView style={{flex: 1, backgroundColor: AppColors.palette.black}}>
          {/* Main content */}
          {children}

          {addingPlayer && <AddingPlayerView />}
        </SafeAreaView>
      </Fragment>
    );
  }
}

AppContainer.propTypes = {
  addingPlayer: PropTypes.bool.isRequired,
  children: PropTypes.any,
  updateConnectivity: PropTypes.func.isRequired,
};

AppContainer.defaultProps = {
  children: [],
};

const mapStateToProps = state => ({
  addingPlayer: state.player.addingPlayer,
});

export default connect(
  mapStateToProps,
  AppActions,
)(AppContainer);
