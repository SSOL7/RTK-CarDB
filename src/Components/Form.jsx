import { useDispatch, useSelector } from "react-redux";
import { change_name, change_cost, add_car } from "./store";

function Form() {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((store) => {
    return {
      name: store.form.name,
      cost : store.form.cost
    }
  });

  const handle_name_change = (event) => {
    dispatch(change_name(event.target.value))
  }

  const handle_cost_change = (event) => {
    const car_cost = parseInt(event.target.value) || 0;
    dispatch(change_cost(car_cost))
  }

  const handle_submit = (event) => {
    event.preventDefault();
    dispatch(add_car({ name, cost }));
  }


  return (
    <div>
      <h3>Form</h3>

      <form onSubmit={handle_submit}>
        <label htmlFor="name">Car:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handle_name_change}
        />


        <label htmlFor="cost">Cost:</label>
        <input
          id="cost"
          name="cost"
          value={cost || ""}
          onChange={handle_cost_change}
          type="number"
        />
        <button>Submit</button>

      </form>
    </div>
  )
}

export default Form