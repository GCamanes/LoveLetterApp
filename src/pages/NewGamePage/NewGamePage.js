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
import {AppColors, AppSizes, AppStyles} from '../../theme';

class NewGamePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numberOfPalyers: props.players.filter(player => player.selected).length,
    };
  }

  componentDidMount() {}

  onSelectPlayer = player => {
    console.log(player.name);
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
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={4}
            maximumValue={8}
            minimumTrackTintColor={AppColors.palette.main.quaternary}
            maximumTrackTintColor={AppColors.palette.main.quaternary}
            step={1}
            thumbTintColor={AppColors.palette.main.secondary}
          />
          <TouchableOpacity style={styles.playTouchableView}>
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
  null,
)(NewGamePage);
