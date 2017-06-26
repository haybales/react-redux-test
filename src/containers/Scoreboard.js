import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import * as PlayerActionCreators from '../actions/player';
import { connect } from 'react-redux';
import '../App.css';
import Player from '../components/Player';
import Header from '../components/Header';
import AddPlayerForm from '../components/AddPlayerForm';
import PlayerDetail from '../components/PlayerDetail';


class Scoreboard extends Component{

  static propTypes = {
    players: PropTypes.array.isRequired
  }

  render(){


    const playerComponents = this.props.players.map((player, index) => (
      <Player
        index={index}
        name={player.name}
        score={player.score}
        key={player.name}
        selectPlayer={this.props.actions.selectPlayer}
        updatePlayerScore={this.props.actions.updatePlayerScore}
        removePlayer={this.props.actions.removePlayer} />
    ));

    return(
      <div className="scoreboard">
        <Header players={this.props.players} />

        <div className="players">
          {playerComponents}
        </div>
        <AddPlayerForm addPlayer={this.props.actions.addPlayer}/>
        <PlayerDetail selectedPlayer={this.props.players[this.props.selectedPlayerIndex]}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.players,
    selectedPlayerIndex: state.selectedPlayerIndex
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(PlayerActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scoreboard);
