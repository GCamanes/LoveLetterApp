import PropTypes from 'prop-types';
import React, {Component} from 'react';
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

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: {...props.deck},
    };
  }

  componentDidMount() {}

  /**
   * Render function to display component.
   */
  render() {
    const {players} = this.props;
    const {deck} = this.state;
    console.log('DECK', deck);
    console.log('PLAYERS', players);
    return (
      <View style={styles.gameView}>
        <FlatList
          data={Object.keys(deck).filter(key => deck[key] > 0)}
          keyExtractor={item => item}
          numColumns={4}
          initialNumToRender={10}
          onEndReachedThreshold={10}
          renderItem={({item}) => (
            <GameCard cardName={item} count={deck[item]} key={item} />
          )}
        />

        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.touchableView}>
            <Image source={assets.previous} style={styles.imageBottom} />
            <Text style={styles.textBottom}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchableView}>
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
