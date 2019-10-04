import React from "react";

const PlayerCard = props => {
  console.log("playerCard Props", props.player);
  const { name, country, searches, id } = props.player;
  return (
    <div data-testid="player-card" className="player-card" key={id}>
      <h2>{name}</h2>
      <p>{country}</p>
      <p>Searches: {searches}</p>
    </div>
  );
};

export default PlayerCard;
