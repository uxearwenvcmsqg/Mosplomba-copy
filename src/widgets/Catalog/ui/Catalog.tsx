import { useState, useEffect } from 'react';
import axios from 'axios';

function Catalog() {
  const [state, setState] = useState([]);

  const Products = async () => {
    await axios
      .get(`${baseUrl}/api/v1/store/category/get-all/`)
      .then((res) => {
        setState(res.data);
        console.log(res)
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  };

  useEffect(() => {
    Products();
  }, []);
  return (
    <div>
      {state.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {state.slice(0, 3).map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Catalog;
