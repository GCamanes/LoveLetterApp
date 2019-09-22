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
import * as NewGameActions from '../../redux/actions/new-game-actions';
import {AppColors, AppSizes, AppStyles} from '../../theme';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {initHomePage} = this.props;
    initHomePage();
  }

  onPressNewGame = () => {
    const {initNewGamePage} = this.props;
    initNewGamePage();
  };

  /**
   * Render function to display component.
   */
  render() {
    const {loadingStatus, players} = this.props;

    const sortedPlayers = [...players];

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
          {sortedPlayers
            .sort((a, b) => b.victory - a.victory || b.rate - a.rate)
            .map((player, index) => (
              <PlayerScoreItem
                player={player}
                rank={index + 1}
                key={player.name}
              />
            ))}
        </ScrollView>
        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.newGameTouchableView} onPress={this.onPressNewGame}>
            <Image source={assets.plus} style={styles.imagePlus} />
            <Text style={styles.textNewGame}>New game</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

HomePage.propTypes = {
  connectivity: PropTypes.bool.isRequired,
  initHomePage: PropTypes.func.isRequired,
  initNewGamePage: PropTypes.func.isRequired,
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
  {...HomeActions, ...NewGameActions},
)(HomePage);
