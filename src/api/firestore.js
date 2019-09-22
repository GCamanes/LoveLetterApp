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
        id: item.id,
        name: item._data.name,
        victory: item._data.victory,
        game: item._data.game,
        rate:
          item._data.game !== 0
            ? Number(((item._data.victory / item._data.game) * 100).toFixed(0))
            : 0,
        selected: false,
      };
    });
    return players.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0,
    );
  }

  static async addPlayer(name) {
    await firebase
      .firestore()
      .collection(AppConstants.FIRESTORE.PLAYERS_COLLECTION)
      .add({name: name, game: 0, victory: 0});
  }

  static async updatePlayerScore(player, victory = false) {
    await firebase
      .firestore()
      .collection(AppConstants.FIRESTORE.PLAYERS_COLLECTION)
      .doc(player.id)
      .set({
        game: player.game + 1,
        name: player.name,
        victory: player.victoryView + (victory ? 1 : 0),
      });
  }
}

export default FirestoreService;
