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

import AppConstants from '../../app/app.constants';
import assets from '../../assets';
import styles from './newGamePage.styles';
import {AppColors, AppSizes, AppStyles} from '../../theme';

class NewGamePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  /**
   * Render function to display component.
   */
  render() {
    const {loadingStatus} = this.props;
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
        <ScrollView style={styles.playerSelectionView}>

        </ScrollView>
        <TouchableOpacity style={styles.newGameTouchableView}>
          <Image source={assets.plus} style={styles.imagePlay} />
          <Text style={styles.textPlay}>Play</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

NewGamePage.propTypes = {
  connectivity: PropTypes.bool.isRequired,
  loadingStatus: PropTypes.object,
};

NewGamePage.defaultProps = {
  loadingStatus: {loading: false},
};

const mapStateToProps = state => ({
  connectivity: state.app.connectivity,
  loadingStatus: state.app[AppConstants.ROUTES.NEW_GAME],
});

export default connect(
  mapStateToProps,
  null,
)(NewGamePage);
