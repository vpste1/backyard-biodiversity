import React, { useState } from "react";
import FIELDS from "~/common/resources/fields";

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
    <div>
      <p>You clicked {formPage} times</p>
      <button onClick={() => setFormPage(formPage + 1)}>Click me</button>
    </div>
  );
}

export default Form;
