import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cards({ id, name, image, description }) {
  const [isBookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const savedIdsString = localStorage.getItem('bookmarkedIds');
    if (savedIdsString) {
      const savedIds = JSON.parse(savedIdsString);
      setBookmarked(savedIds.includes(id));
    }
  }, [id]);

  const toggleClass = () => {
    const newStatus = !isBookmarked;
    setBookmarked(newStatus);

    const savedIdsString = localStorage.getItem('bookmarkedIds');
    const savedIds = savedIdsString ? JSON.parse(savedIdsString) : [];

    if (newStatus) {
      savedIds.push(id);
    } else {
      const index = savedIds.indexOf(id);
      if (index !== -1) {
        savedIds.splice(index, 1);
      }
    }

    localStorage.setItem('bookmarkedIds', JSON.stringify(savedIds));
  };

  return (
    <>
      <div className='card'>
        <div className='img-div'>
          <img
            src={`/recipe-app/images/${image}`}
            alt=''
            className='card-img-top'
          />
        </div>
        <i
          className={`fa-bookmark ms-auto me-3 fa-2x ${
            isBookmarked ? 'fa-solid' : 'fa-regular'
          }`}
          onClick={toggleClass}
        ></i>
        <div className='card-body'>
          <Link to={`/recipe-app/recipes/${id}`} key={id}>
            <h3 className='card-title playfair-display'>{name}</h3>
            <p className='card-content'> {description} </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Cards;
