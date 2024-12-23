import React, { useState } from 'react';
import axios from 'axios';

function FoodSearch() {
  const [query, setQuery] = useState('');
  const [foodData, setFoodData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/food/search?query=${query}`);
      setFoodData(response.data);
    } catch (error) {
      console.error('Error fetching food data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for food"
      />
      <button onClick={handleSearch}>Search</button>

      {foodData && (
        <div>
          {foodData.hints.map((food, index) => (
            <div key={index}>
              <p>{food.food.label}</p>
              <p>{food.food.nutrients.ENERC_KCAL} kcal</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FoodSearch;
