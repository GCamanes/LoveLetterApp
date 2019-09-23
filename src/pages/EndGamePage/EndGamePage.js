import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { ActivityIndicator, Image, SectionList, Text, TouchableOpacity, View } from 'react-native';
import {connect} from 'react-redux';

import AppConstants from '../../app/app.constants';
import PlayerSelectItem from '../../components/PlayerSelectItem';
import SectionListTitle from '../../components/SectionListTitle';
import assets from '../../assets';
import styles from '../NewGamePage/newGamePage.styles';
import * as GameActions from '../../redux/actions/game-actions';
import { AppColors, AppStyles } from '../../theme';
import showAlert from '../../utils/showAlert';

class EndGamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [...props.players],
    };
  }
  componentDidMount() {}

  onSelectPlayer = winner => {
    const {players} = this.state;
    let newPlayers = players.map(player => {
      let p = {...player};
      if (p.id !== winner.id) {
        delete p.winner;
      } else {
        p.winner = true;
      }
      return p;
    });
    this.setState({
      players: newPlayers,
    });
  }

  onUpdateScorePress = () => {
    const {players} = this.state;
    const {endGame} = this.props;
    if (players.filter(player => player.winner).length > 0) {
      endGame(players);
    } else {
      showAlert('Please select a winner');
    }
  }

  /**
   * Render function to display component.
   */
  render() {
    const {loadingStatus} = this.props;
    const {players} = this.state;
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
      <View style={styles.newGameView}>
        <SectionList
          style={styles.playerSelectionView}
          initialNumToRender={30}
          keyExtractor={item => item.name}
          onEndReachedThreshold={30}
          renderItem={({item}) => <PlayerSelectItem player={item} onSelect={this.onSelectPlayer}/>}
          renderSectionHeader={({section: {title}}) => (
            <SectionListTitle title={title} />
          )}
          sections={[
            {
              title: 'Winner',
              data: players.filter(player => player.winner),
            },
            {
              title: 'Losers',
              data: players.filter(player => !player.winner),
            },
          ]}
        />
        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.playTouchableView} onPress={this.onUpdateScorePress}>
            <Image source={assets.next} style={styles.imagePlay} />
            <Text style={styles.textPlay}>Update score</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

EndGamePage.propTypes = {
  connectivity: PropTypes.bool.isRequired,
  endGame: PropTypes.func.isRequired,
  loadingStatus: PropTypes.object,
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
};

EndGamePage.defaultProps = {
  loadingStatus: {loading: false},
};

const mapStateToProps = state => ({
  connectivity: state.app.connectivity,
  loadingStatus: state.app[AppConstants.ROUTES.END_GAME],
});

export default connect(
  mapStateToProps,
  GameActions,
)(EndGamePage);
