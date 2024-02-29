import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import meta from '../data/recipes.json';

function HeroSection() {
  const [data, setData] = useState(meta);
  const [searchOptions, setSearchOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const term = e.target.value.toLowerCase();
    const filteredOptions = meta.filter((d) =>
      d.name.toLowerCase().includes(term)
    );
    setSearchOptions(filteredOptions);
    setSearchTerm(term);
    setShowOptions(term !== '' && filteredOptions.length > 0);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      navigate(`/recipe-app/search/${searchTerm}`);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchOptions([]);
    setShowOptions(false);
  };

  return (
    <>
      <div className='container-fluid hero-section'>
        <div className='row'>
          <div className='col'>
            <h1 className='hero-heading playfair-display  mt-auto mb-auto'>
              Unlock the Flavors of Home: Explore Our Recipe Collection
            </h1>
            <div
              className='container text-center my-3 mt-5'
              style={{ position: 'relative' }}
            >
              <input
                id='search'
                type='text'
                placeholder='Type some text'
                className='searchFilter'
                onChange={handleChange}
                value={searchTerm}
                onKeyPress={handleKeyPress}
              />{' '}
              {searchTerm && (
                <i
                  className='fa-solid fa-circle-xmark'
                  onClick={clearSearch}
                ></i>
              )}
              {showOptions && (
                <div className='drop d-block'>
                  <ul className='optionList'>
                    {searchOptions.map((element, id) => (
                      <li key={id}>
                        <Link to={`/recipes/${id}`}>{element.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
