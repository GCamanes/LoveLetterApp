const AppConstants = {
  CARD: {
    ASSASSIN: 'assassin',
    BARON: 'baron',
    BARONNE: 'baronne',
    COMPTESSE: 'comptesse',
    DOUBLE_GARDES: 'doubleGardes',
    ESCROC: 'escroc',
    FAUSSAIRE: 'faussaire',
    GARDE: 'garde',
    GENERAL: 'general',
    INTENDANT: 'intendant',
    PRETRE: 'pretre',
    PRINCE: 'prince',
    PRINCESSE: 'princesse',
    ROI: 'roi',
    SERVANTE: 'servante',
    TUEUR_A_GAGE: 'tueurAGage',
    VOYANTE: 'voyante',
  },
  DECKS: {
    4: {
      // 0
      ASSASSIN: 0,
      TUEUR_A_GAGE: 0,
      // 1
      GARDE: 5,
      FAUSSAIRE: 0,
      DOUBLE_GARDES: 0,
      GENERAL: 0,
      // 2
      PRETRE: 2,
      ESCROC: 0,
      // 3
      BARON: 2,
      BARONNE: 0,
      // 4
      SERVANTE: 2,
      INTENDANT: 0,
      //5
      PRINCE: 2,
      VOYANTE: 0,
      // 6+
      ROI: 1,
      COMPTESSE: 1,
      PRINCESSE: 1,
    },
    5: {
      // 0
      ASSASSIN: 1,
      TUEUR_A_GAGE: 0,
      // 1
      GARDE: 6,
      FAUSSAIRE: 0,
      DOUBLE_GARDES: 0,
      GENERAL: 0,
      // 2
      PRETRE: 2,
      ESCROC: 1,
      // 3
      BARON: 2,
      BARONNE: 1,
      // 4
      SERVANTE: 2,
      INTENDANT: 0,
      //5
      PRINCE: 2,
      VOYANTE: 0,
      // 6+
      ROI: 1,
      COMPTESSE: 1,
      PRINCESSE: 1,
    },
    6: {
      // 0
      ASSASSIN: 2,
      TUEUR_A_GAGE: 0,
      // 1
      GARDE: 6,
      FAUSSAIRE: 1,
      DOUBLE_GARDES: 0,
      GENERAL: 0,
      // 2
      PRETRE: 3,
      ESCROC: 1,
      // 3
      BARON: 2,
      BARONNE: 1,
      // 4
      SERVANTE: 2,
      INTENDANT: 1,
      //5
      PRINCE: 2,
      VOYANTE: 0,
      // 6+
      ROI: 1,
      COMPTESSE: 1,
      PRINCESSE: 1,
    },
    7: {
      // 0
      ASSASSIN: 2,
      TUEUR_A_GAGE: 0,
      // 1
      GARDE: 6,
      FAUSSAIRE: 2,
      DOUBLE_GARDES: 0,
      GENERAL: 0,
      // 2
      PRETRE: 4,
      ESCROC: 2,
      // 3
      BARON: 2,
      BARONNE: 1,
      // 4
      SERVANTE: 2,
      INTENDANT: 1,
      //5
      PRINCE: 2,
      VOYANTE: 1,
      // 6+
      ROI: 1,
      COMPTESSE: 1,
      PRINCESSE: 1,
    },
    8: {
      // 0
      ASSASSIN: 2,
      TUEUR_A_GAGE: 1,
      // 1
      GARDE: 6,
      FAUSSAIRE: 2,
      DOUBLE_GARDES: 1,
      GENERAL: 1,
      // 2
      PRETRE: 4,
      ESCROC: 2,
      // 3
      BARON: 3,
      BARONNE: 3,
      // 4
      SERVANTE: 2,
      INTENDANT: 1,
      //5
      PRINCE: 2,
      VOYANTE: 1,
      // 6+
      ROI: 1,
      COMPTESSE: 1,
      PRINCESSE: 1,
    },
  },
  EVENTS: {
    // login
    INIT_LOGIN_PAGE_SAGA: 'INIT_LOGIN_PAGE_SAGA',
    LOGIN_REDUX: 'LOGIN_REDUX',
    LOGIN_SAGA: 'LOGIN_SAGA',
    LOGOUT_REDUX: 'LOGOUT_REDUX',
    LOGOUT_SAGA: 'LOGOUT_SAGA',
    EXIT_APPLICATION: 'EXIT_APPLICATION',
    // router
    RESET_ROUTER_STATE: 'RESET_ROUTER_STATE',
    SET_LOADER: 'SET_LOADER',
    // connectivity
    UPDATE_CONNECTIVITY: 'UPDATE_CONNECTIVITY',
    // clear
    CLEAR_APP_REDUCER: 'CLEAR_APP_REDUCER',
    CLEAR_PLAYER_REDUCER: 'CLEAR_PLAYER_REDUCER',
    // player
    UPDATE_SELECTED_PLAYER_REDUX: 'UPDATE_SELECTED_PLAYER_REDUX',
    SET_PLAYERS_REDUX: 'SET_PLAYERS_REDUX',
    ADD_PLAYER_SAGA: 'ADD_PLAYER_SAGA',
    SHOW_ADDING_PLAYER_VIEW: 'SHOW_ADDING_PLAYER_VIEW',
    // pages
    INIT_HOME_PAGE_SAGA: 'INIT_HOME_PAGE_SAGA',
    INIT_NEW_GAME_PAGE: 'INIT_NEW_GAME_PAGE',
    // home
    TOGGLE_HOME_ORDER_LEADERBOARD_SAGA: 'TOGGLE_HOME_ORDER_LEADERBOARD_SAGA',
    // game
    END_GAME_SAGA: 'END_GAME_SAGA',
    LAUNCH_GAME_SAGA: 'LAUNCH_GAME_SAGA',
  },
  GAME: {
    MIN_NUMBER_PLAYERS: 2,
    MAX_NUMBER_PLAYERS: 8,
    MIN_DECK_PLAYER_STYLE: 4,
    MAX_DECK_PLAYER_STYLE: 8,
    MAX_LENGTH_PLAYER_NAME: 25,
  },
  RANKING: {
    MIN_GAME_BEFORE_RANK: 10,
    ORDER_BY_RATIO: 'ratio',
    ORDER_BY_WIN: 'win',
  },
  FIRESTORE: {
    PLAYERS_COLLECTION: 'players',
    PLAYERS_LIST_DOC: 'list',
  },
  ROUTES: {
    ADD_PLAYER: 'add_player',
    END_GAME: 'end_game',
    GAME: 'game',
    HOME: 'home',
    NEW_GAME: 'new_game',
    USER_LOGIN: 'user_login',
  },
};

export default AppConstants;
