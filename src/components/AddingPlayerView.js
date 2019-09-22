import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';

import * as PlayerActions from '../redux/actions/player-actions';
import { AppColors, AppFonts, AppSizes, AppStyles } from '../theme';
import showAlert from '../utils/showAlert';
import AppConstants from '../app/app.constants';

const styles = StyleSheet.create({
  main_container: {
    height: '100%',
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: 'transparent',
  },
  addingPlayerView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: AppSizes.screen.width * 0.8,
    height: AppSizes.screen.widthThird,
    backgroundColor: AppColors.palette.main.tertiary,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: AppColors.palette.main.secondary,
  },
  input: {
    width: AppSizes.screen.width * 0.65,
    height: 40,
    paddingVertical: 0,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: AppColors.palette.main.tertiary,
    backgroundColor: AppColors.palette.main.primary,
    borderColor: AppColors.palette.main.secondary,
    borderRadius: 20,
    borderWidth: 2,
    fontSize: AppFonts.t16.size,
    textAlignVertical: 'center',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: AppSizes.screen.width * 0.65,
  },
  touchableView: {
    height: 40,
    width: AppSizes.screen.width * 0.3,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: AppColors.palette.main.secondary,
    backgroundColor: AppColors.palette.main.quaternary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: AppColors.palette.main.primary,
    fontSize: AppFonts.t16.size,
    fontWeight: 'bold',
  },
});

class AddingPlayerView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  onAddPress = () => {
    const {addPlayer, connectivity} = this.props;
    const {name} = this.state;
    if (connectivity) {
      if (name === '') {
        showAlert('Please enter a player name');
      } else if (name.length > AppConstants.GAME.MAX_LENGTH_PLAYER_NAME) {
        showAlert(
          `max name length ${
            AppConstants.GAME.MAX_LENGTH_PLAYER_NAME
          } (current ${name.length})`,
        );
      } else {
        addPlayer(name);
      }
    } else {
      showAlert('No internet connection');
    }
  }

  onCancelPress = () => {
    const {showAddingPlayerView} = this.props;
    showAddingPlayerView(false);
  }

  /**
   * Render function to display component.
   */
  render() {
    const {loadingStatus} = this.props;
    const {name} = this.state;
    return (
      <View style={styles.main_container}>
        {loadingStatus.loading && (
          <View style={styles.addingPlayerView}>
            <ActivityIndicator
              size="large"
              color={AppColors.palette.main.quaternary}
            />
          </View>
        )}
        {!loadingStatus.loading && (
          <View style={styles.addingPlayerView}>
            <TextInput
              value={name}
              onChangeText={name => this.setState({name})}
              placeholder="Name"
              selectionColor={AppColors.palette.main.secondary}
              style={styles.input}
              autoCapitalize="none"
            />
            <View style={styles.buttonView}>
              <TouchableOpacity style={styles.touchableView} onPress={this.onAddPress}>
                <Text style={styles.text}>Add</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.touchableView} onPress={this.onCancelPress}>
                <Text style={styles.text}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }
}

AddingPlayerView.propTypes = {
  addPlayer: PropTypes.func.isRequired,
  connectivity: PropTypes.bool.isRequired,
  loadingStatus: PropTypes.object,
  showAddingPlayerView: PropTypes.func.isRequired,
};

AddingPlayerView.defaultProps = {
  loadingStatus: {loading: false},
};

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  connectivity: state.app.connectivity,
  loadingStatus: state.app[AppConstants.ROUTES.ADD_PLAYER],
});

export default connect(
  mapStateToProps,
  PlayerActions,
)(AddingPlayerView);
