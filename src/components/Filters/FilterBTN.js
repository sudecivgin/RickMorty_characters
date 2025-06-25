import React from 'react';

const FilterBTN = () => {
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="radioDefault"
          id="radioDefault1"
        />
        <label className="form-check-label" htmlFor="radioDefault1">
          Default radio
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="radioDefault"
          id="radioDefault2"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="radioDefault2">
          Default checked radio
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;