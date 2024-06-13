import React from 'react';
import './index.css';

// Dummy data for categories
const categories = [
  {
    id: 1,
    name: "Restaurants & Bars",
    subcategories: [
      "African & Pacific Cuisine",
      "Bars & Cafes",
      "Chinese & Korean Cuisine",
      "European Cuisine",
      "General Restaurants",
      "Japanese Cuisine",
      "Mediterranean Cuisine",
      "Middle Eastern Cuisine",
      "North & South American",
      "Southeast Asian Cuisine",
      "Takeaways"
    ]
  },
  {
    id: 2,
    name: "Category 1",
    subcategories: [
      "Subcategory 1",
      "Subcategory 2",
      "Subcategory 3"
    ]
  },
  {
    id: 3,
    name: "Category 2",
    subcategories: [
      "Subcategory A",
      "Subcategory B",
      "Subcategory C"
    ]
  }
  // Add more categories as needed
];

const Category = () => {
  return (
    <div className="app">
      <h1>Categories</h1>
      <input type="text" placeholder="Company title, Keyword..." />
      <button className="search-btn">Search</button>
      <div className="categories-container">
        {categories.map((category) => (
          <div key={category.id} className="category">
            <button>
              {category.name}
            </button>
            {category.subcategories.length > 0 && (
              <div className="subcategory-list">
                {category.subcategories.map((sub, index) => (
                  <div key={index} className="subcategory">
                    {sub}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
