import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {AppColors, AppFonts, AppSizes } from '../theme';

const styles = StyleSheet.create({
  mainView: {
    width: AppSizes.screen.width,
    alignItems: 'center',
  },
  playerView: {
    width: AppSizes.screen.widthTwoThirds,
    height: AppSizes.screen.width * 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.palette.main.quaternary,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: AppColors.palette.main.secondary,
    marginVertical: 2.5,
  },
  playerNameText: {
    textAlign: 'center',
    fontSize: AppFonts.t16.size,
    fontWeight: 'bold',
    marginStart: 5,
    marginEnd: 5,
    color: AppColors.palette.main.secondary,
  },
});

const PlayerSelectItem = ({onSelect, player}) => (
  <View style={styles.mainView}>
    <TouchableOpacity style={styles.playerView} onPress={() => onSelect(player)}>
      <Text style={styles.playerNameText}>{player.name}</Text>
    </TouchableOpacity>
  </View>
);

PlayerSelectItem.propTypes = {
  onSelect: PropTypes.func.isRequired,
  player: PropTypes.object.isRequired,
};

export default PlayerSelectItem;
