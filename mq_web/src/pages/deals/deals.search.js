import React, { useState } from "react";
import "./index.css";

const DealSearch = () => {
  const [emirates, setEmirates] = useState({
    "Abu Dhabi": false,
    Dubai: false,
    Sharjah: false,
    Ajman: true,
    Fujairah: false,
    "Ras al-khaimah": false,
  });
  const [pricing, setPricing] = useState({ min: 90, max: 180 });
  const [discount, setDiscount] = useState(45);
  const [sortLowToHigh, setSortLowToHigh] = useState(true);

  const handleEmiratesChange = (emirate) => {
    setEmirates((prev) => ({ ...prev, [emirate]: !prev[emirate] }));
  };

  const handlePricingChange = (e) => {
    const { name, value } = e.target;
    setPricing((prev) => ({ ...prev, [name]: value }));
  };

  const handleDiscountChange = (e) => {
    setDiscount(e.target.value);
  };

  const handleSortChange = () => {
    setSortLowToHigh(!sortLowToHigh);
  };

  const resetFilters = () => {
    setEmirates({
      "Abu Dhabi": false,
      Dubai: false,
      Sharjah: false,
      Ajman: true,
      Fujairah: false,
      "Ras al-khaimah": false,
    });
    setPricing({ min: 90, max: 180 });
    setDiscount(45);
    setSortLowToHigh(true);
  };

  return (
    <div className="filter-card">
      <div className="filter-header">
        <h3>Filter</h3>
        <button onClick={resetFilters}>Reset</button>
      </div>
      <div className="filter-section">
        <h4>Emirates</h4>
        {Object.keys(emirates).map((emirate) => (
          <label key={emirate}>
            <input
              type="checkbox"
              checked={emirates[emirate]}
              onChange={() => handleEmiratesChange(emirate)}
            />
            {emirate}
          </label>
        ))}
      </div>
      <div className="filter-section">
        <h4>Pricing</h4>
        <input
          type="number"
          name="min"
          value={pricing.min}
          onChange={handlePricingChange}
        />{" "}
        -{" "}
        <input
          type="number"
          name="max"
          value={pricing.max}
          onChange={handlePricingChange}
        />{" "}
        AED
      </div>
      <div className="filter-section">
        <h4>Discount</h4>
        <input
          type="number"
          value={discount}
          onChange={handleDiscountChange}
        />{" "}
        % Off
      </div>
      <div className="filter-section">
        <label>
          <input
            type="checkbox"
            checked={sortLowToHigh}
            onChange={handleSortChange}
          />
          Show from low to high
        </label>
      </div>
    </div>
  );
};

export default DealSearch;
