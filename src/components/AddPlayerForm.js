import React, { Component, PropTypes } from 'react';

export default class AddPlayerForm extends Component{
  static propTypes: {
    addPlayer: PropTypes.func.isRequired,
  };

  state = {
      value: '',
  };

  handleChange = (e) => {
    return(this.setState({value: e.target.value}));
  };

  addPlayer = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.state.value);
    this.setState({value: ''});
  };

  render(){
    return(
      <div className="add-player-form">
        <form onSubmit={this.addPlayer}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
  };
}
