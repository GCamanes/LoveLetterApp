import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import assets from '../assets';
import * as PlayerActions from '../redux/actions/player-actions';
import {AppColors, AppFonts, AppSizes} from '../theme';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  addPlayerView: {
    flex: 1,
    marginRight: 10,
  },
  image: {
    height: AppSizes.screen.width * 0.1,
    width: AppSizes.screen.width * 0.1,
  },
});

const AddPlayer = ({showAddingPlayerView}) => (
  <TouchableOpacity style={styles.addPlayerView} onPress={() => showAddingPlayerView(true)}>
    <Image source={assets.plus} style={styles.image} />
  </TouchableOpacity>
);

AddPlayer.propTypes = {
  showAddingPlayerView: PropTypes.func.isRequired,
};

export default connect(
  null,
  PlayerActions,
)(AddPlayer);
