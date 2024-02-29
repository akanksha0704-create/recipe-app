import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import data from '../data/recipes.json';

function Favorites() {
  const [savedIds, setSavedIds] = useState([]);

  useEffect(() => {
    const savedIdsString = localStorage.getItem('bookmarkedIds');
    if (savedIdsString) {
      setSavedIds(JSON.parse(savedIdsString));
    }
  }, []);

  return (
    <div className='container'>
      <h1 className='text-highlight favHeading my-5 text-center playfair-display'>
        YOUR COLLECTIONS
      </h1>
      <div className='cardList'>
        {savedIds.length > 0 ? (
          savedIds.map((id) => {
            const recipe = data.find((recipe) => recipe.id === id);
            return (
              <Cards
                key={id}
                id={recipe.id}
                name={recipe.name}
                image={`${recipe.url}`}
                description={recipe.description}
                isBookmarked={true}
              />
            );
          })
        ) : (
          <div className='text-center'>
            <p className='emptyPara roboto-regular'>
              "Uh-oh! This cookbook looks as empty as a plate after a delicious
              meal! 🍽️ How about filling it up with some mouthwatering recipes?
              Go ahead, save your favorite recipes and turn this cookbook into a
              culinary adventure!"
            </p>
            <i class='fa-solid fa-book-open-reader'></i>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
