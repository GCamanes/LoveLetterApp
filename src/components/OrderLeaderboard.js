import PropTypes from 'prop-types';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import assets from '../assets';
import * as HomeActions from '../redux/actions/home-actions';
import { AppSizes } from '../theme';

const styles = StyleSheet.create({
  orderLeadeboardView: {
    flex: 1,
    marginRight: 10,
  },
  image: {
    height: AppSizes.screen.width * 0.1,
    width: AppSizes.screen.width * 0.1,
  },
});

const OrderLeadeboard = ({ toggleOrderLeaderboardView }) => (
  <TouchableOpacity style={styles.orderLeadeboardView} onPress={() => toggleOrderLeaderboardView()}>
    <Image source={assets.order} style={styles.image} />
  </TouchableOpacity>
);

OrderLeadeboard.propTypes = {
  toggleOrderLeaderboardView: PropTypes.func.isRequired,
};

export default connect(
  null,
  HomeActions,
)(OrderLeadeboard);
