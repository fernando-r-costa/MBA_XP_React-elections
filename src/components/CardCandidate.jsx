export default function CardCandidate({
  children: cardCandidate,
  candidates,
  presence,
  winner,
}) {
  const filterCandidates = candidates.filter((candidate) =>
    candidate.id.includes(cardCandidate.candidateId)
  );

  const candidate = { ...filterCandidates[0] };

  console.log()

  return (
    <li className="grid grid-cols-2 grid-rows-3 w-48 h-36 shadow-lg bg-white rounded-md">
      <span className="row-span-2 flex justify-center items-center">
        <img
          src={`./img/${candidate.username}.png`}
          alt={candidate.username}
          className="w-12 rounded-full"
        ></img>
      </span>
      <p className={`mt-2 font-semibold ${ (cardCandidate.candidateId === winner) ? 'text-green-800' : 'text-yellow-500'}`}>
        {(cardCandidate.votes / presence).toLocaleString("pt-BR", {
          style: "percent",
          maximumFractionDigits: "2",
          minimumFractionDigits: "2",
        })}
      </p>
      <p className="col-start-2 text-xs font-semibold">
        {cardCandidate.votes.toLocaleString("pr-BR")} votos
      </p>
      <h3 className="col-span-2 font-semibold">{candidate.name}</h3>
      <p className={`col-span-2 text-sm p-2 font-semibold ${ (cardCandidate.candidateId === winner) ? 'text-green-800' : 'text-yellow-500'}`}>
        Eleito
      </p>
    </li>
  );
}
