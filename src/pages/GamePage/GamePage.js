import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Actions} from 'react-native-router-flux';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';

import assets from '../../assets';
import styles from './gamePage.styles';
import GameCard from '../../components/GameCard';
import showAlert from '../../utils/showAlert';
import AppConstants from '../../app/app.constants';

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: {...props.deck},
      gameTrack: [],
    };
  }

  componentDidMount() {}

  onCardPress = cardName => {
    const {deck, gameTrack} = this.state;
    let newDeck = {...deck};
    let newGameTrack = [...gameTrack];
    newDeck[cardName] = deck[cardName] - 1;
    newGameTrack.push(cardName);
    this.setState({
      deck: newDeck,
      gameTrack: newGameTrack,
    });
  };

  onCancelPress = () => {
    const {deck, gameTrack} = this.state;
    if (gameTrack.length === 0) {
      showAlert('No action to cancel');
    } else {
      let previousDeck = {...deck};
      let previousGameTrack = [...gameTrack];
      const cardGame = previousGameTrack.pop();
      previousDeck[cardGame] = deck[cardGame] + 1;
      this.setState({
        deck: previousDeck,
        gameTrack: previousGameTrack,
      });
    }
  };

  onEndPress = () => {
    const {players} = this.props;
    Actions.jump(AppConstants.ROUTES.END_GAME, {players: players});
  }

  /**
   * Render function to display component.
   */
  render() {
    const {deck} = this.state;
    return (
      <View style={styles.gameView}>
        <FlatList
          data={Object.keys(deck).filter(key => deck[key] > 0)}
          keyExtractor={item => item}
          numColumns={4}
          initialNumToRender={10}
          onEndReachedThreshold={10}
          renderItem={({item}) => (
            <GameCard
              cardName={item}
              count={deck[item]}
              key={item}
              onPress={this.onCardPress}
            />
          )}
        />

        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.touchableView} onPress={this.onCancelPress}>
            <Image source={assets.previous} style={styles.imageBottom} />
            <Text style={styles.textBottom}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableView} onPress={this.onEndPress}>
            <Image source={assets.next} style={styles.imageBottom} />
            <Text style={styles.textBottom}>End</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

GamePage.propTypes = {
  deck: PropTypes.object.isRequired,
  players: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect()(GamePage);
