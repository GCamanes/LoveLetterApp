import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import { AppColors, AppFonts, AppSizes } from '../theme';
import assets from '../assets';
import AppConstants from '../app/app.constants';

const styles = StyleSheet.create({
  cardView: {
    height: AppSizes.screen.width * 0.36,
    width: AppSizes.screen.width * 0.22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.palette.main.tertiary,
    margin: 5,
  },
  carImage: {
    width: AppSizes.screen.width * 0.22,
    height: AppSizes.screen.width * 0.29,
  },
  countView: {
    width: AppSizes.screen.width * 0.22,
    flex: 1,
    justifyContent: 'center',
  },
  countText: {
    textAlign: 'center',
    fontSize: AppFonts.t18.size,
    fontWeight: 'bold',
    paddingVertical: 0,
    color: AppColors.palette.white,
  },
});

const GameCard = ({cardName, count, onPress}) => (
  <TouchableOpacity style={styles.cardView}>
    <Image
      source={assets.card[AppConstants.CARD[cardName]]}
      style={styles.carImage}
    />
    <View style={styles.countView}>
      <Text style={styles.countText}>{count}</Text>
    </View>
  </TouchableOpacity>
);

GameCard.propTypes = {
  cardName: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

export default GameCard;
