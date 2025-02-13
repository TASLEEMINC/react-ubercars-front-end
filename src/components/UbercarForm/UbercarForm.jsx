import { useState } from "react";

const UbercarForm = (props) => {
  const initialState = {
    model: "",
    year: "",
    make: "",
  };
  const [formData, setFormData] = useState(
    props.selected ? props.selected : initialState
  );

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (props.selected) {
      props.handleUpdateUbercar(formData, props.selected.id);
    } else {
      props.handleAddUbercar(formData);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="model"> Model </label>
        <input
          id="model"
          name="model"
          value={formData.model}
          onChange={handleChange}
          required
        />
        <label htmlFor="year"> Year </label>
        <input
          id="year"
          name="year"
          value={formData.year}
          onChange={handleChange}
          required
        />
        <label htmlFor="make"> Make </label>
        <input
          id="make"
          name="make"
          value={formData.make}
          onChange={handleChange}
        />
        <button type="submit">
          {props.selected ? "Update Ubercar" : "Add New Ubercar"}
        </button>
      </form>
    </div>
  );
};

export default UbercarForm;
