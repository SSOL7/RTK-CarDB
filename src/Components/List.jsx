import { useSelector, useDispatch } from 'react-redux';
import { remove_car } from './store';

function List() {
  const dispatch = useDispatch();

  const cars = useSelector(({cars: {data, search_term}}) => {
    return data.filter((car) => {
      return car.name.toLowerCase().includes(search_term.toLowerCase());
    });
  });

  const handle_remove_car = (car) => {
    dispatch(remove_car(car.id));
  };

  const rendered_cars = cars.map((car) => {
    return (
      <div key={car.id}>
        <table>
          <thead>
            <tr>
              <th>Model</th>
              <th>Cost</th>
            </tr>
          </thead>
            <tbody>
              <tr key={car.id}>
                <td>{car.name}</td>
                <td>{car.cost}</td>
              </tr>
            </tbody>
        </table>
          <button className='delete' onClick={() => handle_remove_car(car)}>
            Delete
          </button>

      </div>
    );
  });

  return (
    <div>
      <h1>Cars List</h1>
      {rendered_cars}
    </div>
  );
}

export default List;
