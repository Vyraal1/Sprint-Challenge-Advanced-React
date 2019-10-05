import React, { Component } from "react";
import axios from "axios";

import PlayerCard from "./PlayerCard";

class playerList extends Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({ players: res.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { players } = this.state;
    return (
      <div className="playerList">
        {players.map(player => {
          console.log("playerProps from playerList", player);
          return <PlayerCard player={player} />;
        })}
      </div>
    );
  }
}

export default playerList;
