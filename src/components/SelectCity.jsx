export default function SelectionCity({ children: cities, selectCity}) {

  const onSelectCity = (event) => {
    selectCity(event.target.value)
  }
  
  return (
    <form className="flex flex-col items-center gap-2">
      <label htmlFor="cities">Escolha o município:</label>
      <select
        name="cities"
        className="w-32 shadow-xl rounded-md p-1 bg-gray-100 cursor-pointer"
        onChange={onSelectCity}
      >
        {cities.map(({id, name}) => {
          return <option key={id}>{name}</option>;
        })}
      </select>
    </form>
  );
}
