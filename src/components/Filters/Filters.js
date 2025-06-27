import React, { useState } from "react";
import "./Filters.css";

const Filters = ({ setFilters }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    status: '',
    species: '',
    gender: ''
  });

  const speciesOptions = [
    'Human', 'Alien', 'Humanoid', 'Poopybutthole',
    'Mythological', 'Unknown', 'Animal', 'Disease',
    'Robot', 'Cronenberg', 'Planet'
  ];

  const handleFilterChange = (filterType, value) => {
    const newFilters = {
      ...selectedFilters,
      [filterType]: value.toLowerCase() 
    };
    setSelectedFilters(newFilters);
    setFilters(newFilters);
  };

  const clearFilters = () => {
    const resetFilters = {
      status: '',
      species: '',
      gender: ''
    };
    setSelectedFilters(resetFilters);
    setFilters(resetFilters);
  };

  return (
    <div className="filters-container">
      <div className="text-center fw-bold fs-4 mb-4">Filter</div>

      <div className="text-center mb-4">
        <button 
          className="clear-filters-btn"
          onClick={clearFilters}
        >
          🧹 Clear Filters 
        </button>
      </div>

      <div className="accordion" id="accordionExample">

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseStatus">
              Status
            </button>
          </h2>
          <div id="collapseStatus" className="accordion-collapse collapse show">
            <div className="accordion-body">
              {['Alive', 'Dead', 'Unknown'].map(status => (
                <div className="form-check" key={status}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="status"
                    id={`status-${status}`}
                    checked={selectedFilters.status === status.toLowerCase()}
                    onChange={() => handleFilterChange('status', status)}
                  />
                  <label className="form-check-label" htmlFor={`status-${status}`}>
                    {status}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSpecies">
              Species
            </button>
          </h2>
          <div id="collapseSpecies" className="accordion-collapse collapse">
            <div className="accordion-body">
              <div className="row">
                {speciesOptions.map(species => (
                  <div className="col-6 col-md-4" key={species}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="species"
                        id={`species-${species}`}
                        checked={selectedFilters.species === species.toLowerCase()}
                        onChange={() => handleFilterChange('species', species)}
                      />
                      <label className="form-check-label" htmlFor={`species-${species}`}>
                        {species}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseGender">
              Gender
            </button>
          </h2>
          <div id="collapseGender" className="accordion-collapse collapse">
            <div className="accordion-body">
              {['Female', 'Male', 'Genderless', 'Unknown'].map(gender => (
                <div className="form-check" key={gender}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id={`gender-${gender}`}
                    checked={selectedFilters.gender === gender.toLowerCase()}
                    onChange={() => handleFilterChange('gender', gender)}
                  />
                  <label className="form-check-label" htmlFor={`gender-${gender}`}>
                    
                    {gender}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;