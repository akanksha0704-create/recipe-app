import React, { useEffect, useState } from 'react';
import meta from '../data/recipes.json';
import { useParams } from 'react-router-dom';
import Cards from './Cards';

function SearchPage() {
  const [data, setData] = useState(meta);
  const { searchTerm } = useParams();

  useEffect(() => {
    const searchResults = () => {
      const term = searchTerm.toLowerCase();
      const filteredOptions = meta.filter((d) =>
        d.name.toLowerCase().includes(term)
      );
      setData(filteredOptions);
    };

    searchResults();
  }, [searchTerm]);

  return (
    <>
      <div>
        <h2 className='text-center roboto-medium my-3'>
          Search Term:{' '}
          <span className='text-highlight playfair-display '>
            "{searchTerm}"
          </span>
        </h2>

        <div className='cardList'>
          {data.map((e) => (
            <Cards
              key={e.id}
              id={e.id}
              name={e.name}
              image={e.url}
              description={e.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchPage;
