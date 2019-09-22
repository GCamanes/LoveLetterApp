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

import assets from '../../assets';
import styles from './gamePage.styles';

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  /**
   * Render function to display component.
   */
  render() {
    const {deck, players} = this.props;
    console.log('DECK', deck);
    console.log('PLAYERS', players);
    return (
      <View style={styles.gameView}>
        <ScrollView style={styles.deckView}></ScrollView>

        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.endTouchableView} onPress={this.onPlayPress}>
            <Image source={assets.play} style={styles.imageEnd} />
            <Text style={styles.textEnd}>End</Text>
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
