import React, { useState } from "react";
import FIELDS from "common/resources/fields";

function Form() {
  const [formPage, setFormPage] = useState(0);
  const [formData, setFormData] = useState({
    postcode: "",
    gardenSize: null,
    existingPlants: [],
    desiredSpecies: [],
    desiredPlants: []
  });

  return (
    <form>
      <label>
        Enter your postcode
        <input
          type="text"
          value={formData.postcode}
          onChange={event =>
            setFormData({ ...formData, postcode: event.target.value })
          }
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
