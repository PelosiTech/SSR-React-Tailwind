import { useEffect, useState } from "react";
import axios from 'axios';
import Card from "./Card";

const CoffeeStores = () => {
  const [coffeeStores, setCoffeeStores] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value) {
      axios.get(`/api/search?q=${event.target.value}`)
        .then(response => setCoffeeStores(response.data))
        .catch(error => console.error('Error fetching search results:', error));
    } else {
      // if search term is empty, load all coffee stores
      axios.get('/api/coffeeStores')
        .then(response => setCoffeeStores(response.data))
        .catch(error => console.error('Error fetching coffee stores:', error));
    }
  }

  useEffect(() => {
    axios.get('/api/coffeeStores')
      .then(response => setCoffeeStores(response.data))
      .catch(error => console.error('Error fetching coffee stores:', error));
  }, []);

  return (
    <div className="flex flex-wrap">
      <input 
        type="text"
        placeholder="Search coffee stores..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {coffeeStores.map((store, index) => (
        <Card
          key={index}
          header={store.header}
          subHeader={store.subHeader}
          description={store.description}
        />
      ))}
    </div>
  );
};

export default CoffeeStores;
