import { useState } from 'react';

const UbercarForm = (props) => {
  const [formData, setFormData] = useState({
    model: '',
    year: '',
    make: '',
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.model]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddUbercar(formData);
    // Right now, if you add a Ubercar and submit the form,
    // the data entered will stay on the page. We'll fix this soon.
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="model"> Model </label>
        <input
          id="model"
          model="model"
          value={formData.model}
          onChange={handleChange}
          required
        />
        <label htmlFor="year"> Year </label>
        <input
          id="year"
          model="year"
          value={formData.year}
          onChange={handleChange}
          required
        />
        <label htmlFor="make"> Make </label>
        <input
          id="make"
          model="make"
          value={formData.make}
          onChange={handleChange}
        />
        <button type="submit">Add New Ubercar</button>
      </form>
    </div>
  );
};

export default UbercarForm;
