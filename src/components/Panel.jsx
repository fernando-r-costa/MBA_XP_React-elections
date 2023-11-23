import CardCandidate from "./CardCandidate";

export default function Panel({
  children: city,
  election,
  candidates,
  winner,
}) {
  const { name, votingPopulation, absence, presence } = city;

  const winnerCandidate = candidates.filter((candidate) =>
    candidate.id.includes(winner)
  );

  return (
    <div className="border-2 w-11/12 m-4 p-4 inline-block text-center leading-8 bg-gray-100 first:bg-gray-100">
      <h2 className="font-bold">Eleição em {name}:</h2>
      <ul className="flex justify-center gap-4">
        <li>
          <strong>Total de eleitores:</strong>{" "}
          {votingPopulation.toLocaleString("pr-BR")}
        </li>
        <li>
          <strong>Abstenção:</strong> {absence.toLocaleString("pr-BR")}
        </li>
        <li>
          <strong>Comparecimento:</strong> {presence.toLocaleString("pr-BR")}
        </li>
      </ul>
      <span className="font-semibold">{election.length} candidatos</span>
      <div className="flex m-4 p-4 font-bold text-xl text-green-500 justify-center items-center gap-4">
        CANDIDATO ELEITO:
        <img
          src={`./img/${winnerCandidate[0].username}.png`}
          alt=""
          className="w-16 rounded-full"
        ></img>
        <h3 className="font-extrabold text-3xl">{winnerCandidate[0].name}</h3>
      </div>
      <ul className="flex gap-4 flex-wrap justify-center">
        {election.map((cardCandidate, index) => {
          return (
            <CardCandidate
              key={index}
              candidates={candidates}
              presence={presence}
              winner={winner}
            >
              {cardCandidate}
            </CardCandidate>
          );
        })}
      </ul>
    </div>
  );
}
