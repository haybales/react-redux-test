import * as PlayerActionTypes from '../actiontypes/player'

const initialState = {
  players:[{
    name: 'Sam',
    score: 31,
    created: '11/8/2016',
    updated: '11/15/2016'
  },
  {
    name: 'Jeff',
    score: 20,
    created: '11/8/2016',
    updated: '11/15/2016'
  },
  {
    name: 'Sean',
    score: 50,
    created: '11/8/2016',
    updated: '11/15/2016'
  }],
  selectedPlayerIndex: -1
};

export default function Player(state=initialState, action) {
  switch(action.type){
    case PlayerActionTypes.ADD_PLAYER:
      var today = new Date();
      var currentDate = `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`
      return{
        players: [
          ...state.players,
          {
            name: action.name,
            score: 0,
            created: currentDate,
            updated: ''
          }
        ],
        selectedPlayerIndex: state.selectedPlayerIndex
      };

    case PlayerActionTypes.REMOVE_PLAYER:
      return{
        players: [
          ...state.players.slice(0, action.index),
          ...state.players.slice(action.index+1)
        ],
        selectedPlayerIndex: -1
      }

    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
      var today = new Date();
      var currentDate = `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`
      return {
        players: state.players.map((player, index) => {
          if(index === action.index){
            return{
              ...player,
              score: player.score + action.score,
              updated: currentDate
            };
          }
          return player;
        }),
        selectedPlayerIndex: state.selectedPlayerIndex
      }


      case PlayerActionTypes.SELECT_PLAYER:
        return{
          players: state.players,
          selectedPlayerIndex: action.index
        };

    default:
      return state;
  }
}
