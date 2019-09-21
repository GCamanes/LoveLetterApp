import {StyleSheet} from 'react-native';
import {AppColors, AppFonts, AppSizes} from '../../theme';

const styles = StyleSheet.create({
  newGameView: {
    flex: 1,
    backgroundColor: AppColors.palette.white,
    alignItems: 'center',
  },
  playerSelectionView: {
    flex: 1,
    width: AppSizes.screen.width,
  },
  playTouchableView: {
    flexDirection: 'row',
    width: AppSizes.screen.widthHalf,
    height: AppSizes.screen.widthQuarter / 2,
    margin: 10,
    alignItems: 'center',
    backgroundColor: AppColors.palette.main.quaternary,
    borderRadius: 50,
    borderColor: AppColors.palette.main.secondary,
    borderWidth: 2,
  },
  textPlay: {
    color: AppColors.palette.main.primary,
    fontSize: AppFonts.t16.size,
    marginLeft: 5,
  },
  imagePlay: {
    height: AppSizes.screen.widthQuarter / 2.2,
    width: AppSizes.screen.widthQuarter / 2.2,
  },
});

export default styles;
