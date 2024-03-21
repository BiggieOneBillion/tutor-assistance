import React, { useState } from "react";

const RadioButtonExample = () => {
  // State to manage the selected radio button value
  const [selectedValue, setSelectedValue] = useState("");

  // Handler function to update the selected value
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <h2>Select your favorite color:</h2>
      <label className="flex gap-2">
        <input
          type="radio"
          value="red"
          checked={selectedValue === "red"}
          onChange={handleRadioChange}
        />
        Red
      </label>
      <label className="flex gap-2">
        <input
          type="radio"
          value="blue"
          checked={selectedValue === "blue"}
          onChange={handleRadioChange}
        />
        Blue
      </label>
      <label className="flex gap-2">
        <input
          type="radio"
          value="green"
          checked={selectedValue === "green"}
          onChange={handleRadioChange}
        />
        Green
      </label>
      <div>
        {selectedValue && <p>Your favorite color is: {selectedValue}</p>}
      </div>
    </div>
  );
};

export default RadioButtonExample;
