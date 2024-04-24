
import React, { useState } from 'react';
import './App.css';

const generateRandomName = () => {
  const adjectives = ['Tasty', 'Delicious', 'Gourmet', 'Savory', 'Exquisite', 'Yummy', 'Flavorful', 'Scrumptious', 'Delectable', 'Mouthwatering'];
  const cuisines = ['Italian', 'Mexican', 'Indian', 'Japanese', 'French', 'Chinese', 'Thai', 'Greek', 'Spanish', 'American'];
  const nouns = ['Bistro', 'Cafe', 'Restaurant', 'Diner', 'Eatery', 'Brasserie', 'Tavern', 'Bakery', 'Grill', 'Pizzeria'];
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomCuisine = cuisines[Math.floor(Math.random() * cuisines.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${randomAdjective} ${randomCuisine} ${randomNoun}`;
};


const generateRestaurantData = () => {
  const restaurants = [];
  for (let i = 1; i <= 24; i++) {
    restaurants.push({
      id: i,
      name: generateRandomName(),
      cuisine: ['Italian', 'Mexican', 'Indian', 'Japanese', 'French', 'Chinese', 'Thai', 'Greek', 'Spanish', 'American'][Math.floor(Math.random() * 10)],
      location: ['New York', 'Los Angeles', 'San Francisco', 'Chicago', 'Miami', 'Boston', 'Seattle', 'Austin', 'Denver', 'Las Vegas'][Math.floor(Math.random() * 10)],
      rating: parseFloat((Math.random() * (5 - 3) + 3).toFixed(1)) // Random rating between 3 and 5
    });
  }
  return restaurants;
};

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState(generateRestaurantData());

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = generateRestaurantData().filter((restaurant) =>
      restaurant.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Restaurant Page</h1>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by restaurant name..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <button>Search</button>
        </div>
      </header>
      <main className="App-main">
        <section className="restaurant-list">
          <h2>Restaurant List</h2>
          <div className="restaurant-grid">
            {filteredRestaurants.map((restaurant) => (
              <div key={restaurant.id} className="restaurant-card">
                <h3>{restaurant.name}</h3>
                <p>Cuisine: {restaurant.cuisine}</p>
                <p>Location: {restaurant.location}</p>
                <p>Rating: {restaurant.rating}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
