import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Slider from '@react-native-community/slider';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  SectionList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';

import AppConstants from '../../app/app.constants';
import PlayerSelectItem from '../../components/PlayerSelectItem';
import SectionListTitle from '../../components/SectionListTitle';
import assets from '../../assets';
import styles from './newGamePage.styles';
import * as PlayerActions from '../../redux/actions/player-actions';
import {AppColors, AppSizes, AppStyles} from '../../theme';
import showAlert from '../../utils/showAlert';

class NewGamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckSize: 4,
    };
  }

  componentDidMount() {}

  onSelectPlayer = player => {
    const {players, updatePlayerSelected} = this.props;
    const numberOfPlayersSelected = players.filter(player => player.selected).length;
    if (
      !player.selected &&
      numberOfPlayersSelected === AppConstants.GAME.MAX_NUMBER_PLAYERS
    ) {
      showAlert('Max number of players : 8');
    } else {
      updatePlayerSelected(player);
      const newNumberOfPlayersSelected = player.selected
        ? numberOfPlayersSelected - 1
        : numberOfPlayersSelected + 1;
      if (
        newNumberOfPlayersSelected <= AppConstants.GAME.MIN_DECK_PLAYER_STYLE
      ) {
        this.setState({deckSize: AppConstants.GAME.MIN_DECK_PLAYER_STYLE});
      } else {
        this.setState({deckSize: newNumberOfPlayersSelected});
      }
    }
  }

  onMinusPress = () => {
    const {deckSize} = this.state;
    this.setState({deckSize: deckSize - 1});
  }

  onPlusPress = () => {
    const {deckSize} = this.state;
    this.setState({deckSize: deckSize + 1});
  }

  onPlayPress = () => {
    const {players} = this.props;
    const numberOfPlayersSelected = players.filter(player => player.selected).length;
    if (numberOfPlayersSelected < AppConstants.GAME.MIN_NUMBER_PLAYERS) {
      showAlert('Min number of players : 2');
    } else {
      console.log('GO PLAY');
    }
  }

  /**
   * Render function to display component.
   */
  render() {
    const {loadingStatus, players} = this.props;
    const {deckSize} = this.state;
    if (loadingStatus.loading) {
      return (
        <View style={AppStyles.loadingView}>
          <ActivityIndicator
            size="large"
            color={AppColors.palette.main.secondary}
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
              title: 'Selected',
              data: players.filter(player => player.selected),
            },
            {
              title: 'Not selected',
              data: players.filter(player => !player.selected),
            },
          ]}
        />
        <View style={styles.bottomView}>
          <View style={{flexDirection: 'row', width: AppSizes.screen.width * 0.8, alignItems: 'center', marginTop: 5}}>
            {deckSize > AppConstants.GAME.MIN_DECK_PLAYER_STYLE && (
              <TouchableOpacity onPress={this.onMinusPress}>
                <Image source={assets.minus} style={styles.imagePlay} />
              </TouchableOpacity>
            )}
            {deckSize === AppConstants.GAME.MIN_DECK_PLAYER_STYLE && (
              <View style={styles.imagePlay} />
            )}
            <Text style={styles.textPlay}>
              {`Deck style : ${deckSize} players`}
            </Text>
            {deckSize < AppConstants.GAME.MAX_DECK_PLAYER_STYLE && (
              <TouchableOpacity onPress={this.onPlusPress}>
                <Image source={assets.plus} style={styles.imagePlay} />
              </TouchableOpacity>
            )}
            {deckSize === AppConstants.GAME.MAX_DECK_PLAYER_STYLE && (
              <View style={styles.imagePlay} />
            )}
          </View>
          <TouchableOpacity style={styles.playTouchableView} onPress={this.onPlayPress}>
            <Image source={assets.play} style={styles.imagePlay} />
            <Text style={styles.textPlay}>Play</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

NewGamePage.propTypes = {
  connectivity: PropTypes.bool.isRequired,
  loadingStatus: PropTypes.object,
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
  updatePlayerSelected: PropTypes.func.isRequired,
};

NewGamePage.defaultProps = {
  loadingStatus: {loading: false},
};

const mapStateToProps = state => ({
  connectivity: state.app.connectivity,
  loadingStatus: state.app[AppConstants.ROUTES.NEW_GAME],
  players: state.player.players,
});

export default connect(
  mapStateToProps,
  PlayerActions,
)(NewGamePage);
