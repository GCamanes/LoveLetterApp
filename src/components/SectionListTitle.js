import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {AppColors, AppSizes} from '../theme';

const styles = StyleSheet.create({
  sectionTitleView: {
    height: AppSizes.screen.width * 0.15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.palette.white,
  },
  sectionTitleText: {
    width: AppSizes.screen.width * 0.4,
    textAlign: 'center',
    fontSize: 21,
    fontWeight: 'bold',
    marginStart: 5,
    marginEnd: 5,
    color: AppColors.palette.main.tertiary,
  },
  barView: {
    height: 2,
    width: AppSizes.screen.width * 0.15,
    borderRadius: 20,
    backgroundColor: AppColors.palette.main.secondary,
  },
});

const SectionListTitle = ({title}) => (
  <View style={styles.sectionTitleView}>
    <View style={styles.barView} />
    <Text style={styles.sectionTitleText}>{title}</Text>
    <View style={styles.barView} />
  </View>
);

SectionListTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionListTitle;
