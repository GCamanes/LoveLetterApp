import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import AppConstants from '../../app/app.constants';
import assets from '../../assets';
import PlayerScoreItem from '../../components/PlayerScoreItem/PlayerScoreItem';
import * as HomeActions from '../../redux/actions/home-actions';
import * as NewGameActions from '../../redux/actions/new-game-actions';
import { AppColors, AppStyles } from '../../theme';
import styles from './homePage.styles';


class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { initHomePage } = this.props;
    initHomePage();
  }

  onPressNewGame = () => {
    const { initNewGamePage } = this.props;
    initNewGamePage();
  };

  /**
   * Render function to display component.
   */
  render() {
    const { loadingStatus, players, orderLeaderboardBy } = this.props;

    const sortedPlayers = [...players];
    const sort = (a, b) => {
      if (orderLeaderboardBy === AppConstants.RANKING.ORDER_BY_RATIO) {
        return b.rate - a.rate || b.victory - a.victory;
      } else {
        return b.victory - a.victory || b.rate - a.rate
      }
    }

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
          <Text style={styles.scoreTitleView}>Ranked by {orderLeaderboardBy}</Text>
          {sortedPlayers
            .filter((player) => player.game >= AppConstants.RANKING.MIN_GAME_BEFORE_RANK)
            .sort((a, b) => sort(a, b))
            .map((player, index) => (
              <PlayerScoreItem
                player={player}
                rank={index + 1}
                key={player.name}
              />
            ))}
          <Text style={styles.scoreTitleView}>Unranked</Text>

          {sortedPlayers
            .filter((player) => player.game < AppConstants.RANKING.MIN_GAME_BEFORE_RANK)
            .map((player, index) => (
              <PlayerScoreItem
                player={player}
                rank="N/A"
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
  loadingStatus: { loading: false },
};

const mapStateToProps = state => ({
  connectivity: state.app.connectivity,
  loadingStatus: state.app[AppConstants.ROUTES.HOME],
  players: state.player.players,
  orderLeaderboardBy: state.home.orderLeaderboardBy
});

export default connect(
  mapStateToProps,
  { ...HomeActions, ...NewGameActions },
)(HomePage);
