import React, { useState } from 'react';
import Cards from './Cards';
import meta from '../data/recipes.json';
import HeroSection from './HeroSection';

function CardList() {
  const [data, setData] = useState(meta);
  const [selectedValue, setSelectedValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(8);

  const handleFilter = (e) => {
    const filteredData = meta.filter((d) =>
      d.catgories.includes(e.target.value)
    );
    setData(filteredData);
  };

  const handleSelectChange = (e) => {
    const filter = e.target.value;
    setSelectedValue(filter);
    const sortedData = [...data];

    if (filter == 'date') {
      sortedData.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (filter == 'random') {
      sortedData.sort(() => Math.random() - 0.5);
    }

    setData(sortedData);
  };

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <HeroSection />

      <div className='container filter my-5'>
        <div
          class='btn-group-horizontal'
          role='group'
          aria-label='Vertical radio toggle button group'
        >
          <select
            value={selectedValue}
            className={`btn btn-outline-danger custom-select ${
              selectedValue ? 'selected' : ''
            }`}
            onChange={handleSelectChange}
          >
            <option value=''>Select an option</option>
            <option className='filterOptions' value='date'>
              Date
            </option>
            <option className='filterOptions' value='random'>
              Random
            </option>
            <option className='filterOptions' value='newest'>
              Newest
            </option>{' '}
          </select>
          <input
            type='radio'
            class='btn-check'
            name='vbtn-radio'
            id='vbtn-radio1'
            autocomplete='off'
            value='veg'
            onClick={handleFilter}
          />
          <label class='btn btn-outline-danger' for='vbtn-radio1'>
            Veg
          </label>
          <input
            type='radio'
            class='btn-check'
            name='vbtn-radio'
            id='vbtn-radio2'
            autocomplete='off'
            value='nonveg'
            onClick={handleFilter}
          />
          <label class='btn btn-outline-danger' for='vbtn-radio2'>
            Non-veg
          </label>
          <input
            type='radio'
            class='btn-check'
            name='vbtn-radio'
            id='vbtn-radio3'
            autocomplete='off'
            value='dessert'
            onClick={handleFilter}
          />
          <label class='btn btn-outline-danger' for='vbtn-radio3'>
            Dessert
          </label>
        </div>
      </div>

      <div className='cardList'>
        {currentCards.map((e) => (
          <Cards
            key={e.id}
            id={e.id}
            name={e.name}
            image={e.url}
            description={e.description}
          />
        ))}
      </div>

      <nav>
        <ul className='cards-pagination my-5'>
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <a
              onClick={() => paginate(currentPage - 1)}
              className='page-link'
              href='#'
            >
              <i className='fa-solid fa-angles-left fa-xs'></i>
            </a>
          </li>
          {Array.from(
            { length: Math.ceil(data.length / cardsPerPage) },
            (_, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
              >
                <a onClick={() => paginate(i + 1)} className='page-link'>
                  {i + 1}
                </a>
              </li>
            )
          )}
          <li
            className={`page-item ${
              currentPage === Math.ceil(data.length / cardsPerPage)
                ? 'disabled'
                : ''
            }`}
          >
            <a
              onClick={() => paginate(currentPage + 1)}
              className='page-link'
              href='#'
            >
              <i className='fa-solid fa-angles-right fa-xs'></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default CardList;
