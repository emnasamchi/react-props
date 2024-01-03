import { players } from "../Players";
import Player from "./Player";

function PlayersList(props) {
  const myData = Object.values(props);
  return (
    <div
      style={{
        display: "flex",
        border: "1px solid black",
        marginTop:"200px"
      }}
    >
      {myData.map((e, i) => {
        return (
          <div
            style={{
              border: "1px solid black",
            }}
            key={i}
          >
            <Player
              name={e.name}
              age={e.age}
              nationality={e.nationality}
              jersey_number={e.jersey_number}
              team={e.team}
              image={e.image}
            />
          </div>
        );
      })}
    </div>
  );
}

PlayersList.defaultProps = players;
export default PlayersList;
