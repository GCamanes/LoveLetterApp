import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
  StyleSheet,
  Text, TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';

import * as PlayerActions from '../redux/actions/player-actions';
import {AppColors, AppFonts, AppSizes} from '../theme';

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
    backgroundColor: AppColors.palette.main.tertiary,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: AppColors.palette.main.secondary,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  input: {
    width: AppSizes.screen.width * 0.65,
    height: 40,
    marginBottom: 15,
    paddingVertical: 0,
    paddingHorizontal: 10,
    color: AppColors.palette.main.tertiary,
    backgroundColor: AppColors.palette.main.primary,
    borderColor: AppColors.palette.main.secondary,
    borderRadius: 20,
    borderWidth: 2,
    fontSize: AppFonts.t16.size,
    textAlignVertical: 'center',
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
    marginHorizontal: 5,
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

  onCancelPress = () => {
    const {showAddingPlayerView} = this.props;
    showAddingPlayerView(false);
  }

  /**
   * Render function to display component.
   */
  render() {
    const {name} = this.state;
    return (
      <View style={styles.main_container}>
        <View style={styles.addingPlayerView}>
          <TextInput
            value={this.state.userMail}
            onChangeText={userMail => this.setState({name})}
            placeholder="Name"
            selectionColor={AppColors.palette.main.secondary}
            style={styles.input}
            autoCapitalize="none"
          />
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.touchableView}>
              <Text style={styles.text}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableView} onPress={this.onCancelPress}>
              <Text style={styles.text}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

AddingPlayerView.propTypes = {};

export default connect(
  null,
  PlayerActions,
)(AddingPlayerView);
