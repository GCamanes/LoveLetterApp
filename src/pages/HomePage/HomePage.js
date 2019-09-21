import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';

import AppConstants from '../../app/app.constants';
import PlayerScoreItem from '../../components/PlayerScoreItem/PlayerScoreItem';
import assets from '../../assets';
import styles from './homePage.styles';
import * as HomeActions from '../../redux/actions/home-actions';
import {AppColors, AppSizes, AppStyles} from '../../theme';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {initHomePage} = this.props;
    initHomePage();
  }

  /**
   * Render function to display component.
   */
  render() {
    const {loadingStatus, players} = this.props;
    if (loadingStatus.loading) {
      return (
        <View style={AppStyles.loadingView}>
          <ActivityIndicator
            size="large"
            color={AppColors.palette.main.tertiary}
          />
        </View>
      );
    }
    return (
      <View style={styles.homeView}>
        <ScrollView style={styles.scoresView}>
          {players.map((player, index) => (
            <PlayerScoreItem player={player} rank={index + 1} key={player.name}/>
          ))}
        </ScrollView>
        <TouchableOpacity style={styles.newGameTouchableView}>
          <Image source={assets.plus} style={styles.imagePlus} />
          <Text style={styles.textNewGame}>New game</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

HomePage.propTypes = {
  connectivity: PropTypes.bool.isRequired,
  initHomePage: PropTypes.func.isRequired,
  loadingStatus: PropTypes.object,
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
};

HomePage.defaultProps = {
  loadingStatus: {loading: false},
};

const mapStateToProps = state => ({
  connectivity: state.app.connectivity,
  loadingStatus: state.app[AppConstants.ROUTES.HOME],
  players: state.player.players,
});

export default connect(
  mapStateToProps,
  HomeActions,
)(HomePage);