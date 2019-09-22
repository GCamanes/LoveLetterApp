import firebase from 'react-native-firebase';
import AppConstants from '../app/app.constants';

class FirestoreService {
  static async getPlayers() {
    const playersData = await firebase
      .firestore()
      .collection(AppConstants.FIRESTORE.PLAYERS_COLLECTION)
      .get();
    const players = playersData._docs.map(item => {
      return {
        name: item.id,
        victory: item._data.victory,
        game: item._data.game,
        rate:
          item._data.game !== 0
            ? Number(((item._data.victory / item._data.game) * 100).toFixed(0))
            : 0,
        selected: false,
      };
    });
    return players.sort((a, b) => b.name - a.name);
  }
}

export default FirestoreService;
