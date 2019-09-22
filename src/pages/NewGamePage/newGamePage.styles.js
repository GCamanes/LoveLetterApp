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
  bottomView: {
    width: AppSizes.screen.width,
    backgroundColor: AppColors.palette.main.tertiary,
    borderTopWidth: 2,
    borderColor: AppColors.palette.main.secondary,
    alignItems: 'center',
  },
  playTouchableView: {
    flexDirection: 'row',
    width: AppSizes.screen.widthHalf,
    height: AppSizes.screen.width * 0.15,
    margin: 5,
    paddingHorizontal: 4,
    alignItems: 'center',
    backgroundColor: AppColors.palette.main.quaternary,
    borderRadius: 50,
    borderColor: AppColors.palette.main.secondary,
    borderWidth: 2,
  },
  textPlay: {
    flex: 1,
    color: AppColors.palette.main.primary,
    fontSize: AppFonts.t16.size,
    textAlign: 'center',
  },
  imagePlay: {
    height: AppSizes.screen.widthQuarter / 2.2,
    width: AppSizes.screen.widthQuarter / 2.2,
  },
});

export default styles;
