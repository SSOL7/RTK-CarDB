import { useSelector } from 'react-redux';

function Value() {
  const total_cost = useSelector(({ cars: { data, search_term } }) =>
    data
      .filter((car) =>
        car.name.toLowerCase().includes(search_term.toLowerCase())
      )
      .reduce((accumulator, car) => accumulator + car.cost, 0)
  );

  return (
    <div>
      <h3>Total cost: €{total_cost}</h3>
    </div>
  );
}

export default Value;
