import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import styles from './playerScoreItem.styles';
import assets from '../../assets';
import {AppColors, AppFonts, AppSizes} from '../../theme';

export class PlayerScoreItem extends Component {
  onDisconnectPress() {
    const {logout} = this.props;
    logout();
  }

  render() {
    const {player, rank} = this.props;
    return (
      <View style={styles.playerScoreView}>
        <View style={styles.rankView}>
          <Text style={styles.rankText}>{rank}</Text>
        </View>
        <View style={styles.playerView}>
          <Text style={styles.text}>{player.name}</Text>
          <View style={styles.trophyView}>
            <Image source={assets.trophy} style={styles.trophyImage} />
            <Text style={styles.text}>{player.victory}</Text>
          </View>
        </View>
        <ProgressCircle
          percent={player.rate}
          radius={AppSizes.screen.width * 0.08}
          borderWidth={AppSizes.screen.width * 0.015}
          color={AppColors.palette.main.tertiary}
          shadowColor={AppColors.palette.grey}
          bgColor={AppColors.palette.white}
          outerCircleStyle={{margin: 5}}
        >
          <Text style={{fontSize: AppFonts.t14.size}}>{`${player.rate}%`}</Text>
        </ProgressCircle>
      </View>
    );
  }
}

PlayerScoreItem.propTypes = {
  player: PropTypes.object.isRequired,
  rank: PropTypes.number.isRequired,
};

export default connect()(PlayerScoreItem);
