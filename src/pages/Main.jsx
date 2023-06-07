import { useEffect, useState } from 'react';
import Card from '../components/Card';
import CoffeeStores from '../components/CoffeeStores';

function Main() {
  const [data, setData] = useState([]);

  return (
    <div className="p-4">
      <CoffeeStores />
    </div>
  );
}

export default Main;
