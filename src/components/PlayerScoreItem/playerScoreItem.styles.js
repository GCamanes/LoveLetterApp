import {StyleSheet} from 'react-native';
import {AppColors, AppFonts, AppSizes} from '../../theme';

const styles = StyleSheet.create({
  playerScoreView: {
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 5,
    marginTop: 5,
    backgroundColor: AppColors.palette.main.quaternary,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: AppColors.palette.main.secondary,
    alignItems: 'center',
  },
  rankView: {
    width: AppSizes.screen.width * 0.13,
    height: AppSizes.screen.width * 0.13,
    backgroundColor: AppColors.palette.white,
    borderRadius: 5,
    margin: 5,
    justifyContent: 'center',
  },
  rankText: {
    textAlign: 'center',
    fontSize: AppFonts.t18.size,
    fontWeight: 'bold',
    color: AppColors.palette.main.tertiary,
  },
  playerView: {
    flex: 1,
    margin: 3,
  },
  text: {
    flex: 1,
    paddingHorizontal: 5,
    fontSize: AppFonts.t18.size,
    fontWeight: 'bold',
    color: AppColors.palette.main.primary,
  },
  trophyView: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  trophyImage: {
    height: AppSizes.screen.width * 0.07,
    width: AppSizes.screen.width * 0.07,
  },
  victoryView: {
    width: AppSizes.screen.width * 0.12,
    height: AppSizes.screen.width * 0.12,
    borderRadius: 5,
    margin: 5,
    justifyContent: 'center',
  },
  rateView: {
    width: AppSizes.screen.width * 0.12,
    height: AppSizes.screen.width * 0.12,
    backgroundColor: AppColors.palette.white,
    borderRadius: 5,
    margin: 5,
    justifyContent: 'center',
  },
});

export default styles;
