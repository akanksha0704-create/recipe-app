import React from 'react';
import { useState } from 'react';
import data from '../data/recipes.json';
import { v4 as uuidv4 } from 'uuid';

function ContributePage() {
  const currentDate = new Date();
  const formattedDate = `${currentDate.getFullYear()}-${String(
    currentDate.getMonth() + 1
  ).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;

  const [formData, setFormData] = useState({
    id: uuidv4(),
    name: '',
    isSaved: false,
    categories: [],
    url: '',
    description: '',
    author: '',
    ingredients: [],
    method: [],
    date: formattedDate,
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleCategoryChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        categories: [...prevFormData.categories, name],
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        categories: prevFormData.categories.filter((cat) => cat !== name),
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'ingredients' || name === 'method') {
      const lines = value.split('\n').map((line) => line.trim());
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: lines,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    data.push(formData);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      setFormData({
        id: uuidv4(),
        name: '',
        isSaved: false,
        categories: [],
        url: '',
        description: '',
        author: '',
        ingredients: [],
        method: [],
        date: formattedDate,
      });
    }, 3000);
  };

  return (
    <>
      {/* Popup message */}
      {showPopup && (
        <div className='popup' style={{ top: '0' }}>
          Recipe saved!
        </div>
      )}
      <div className='contributeParentDiv'>
        <form className='contributeForm' onSubmit={handleSubmit}>
          <div class='row'>
            <div class='col'>
              {/* Recipe name input */}
              <div className='mb-3'>
                <label for='recipeName' className='form-label'>
                  Recipe Name
                </label>
                <input
                  onChange={handleChange}
                  name='name'
                  type='text'
                  required
                  className='form-control'
                  id='recipeName'
                />
              </div>
            </div>
            <div class='col'>
              {/* Author */}
              <div className='mb-3'>
                <label for='authorName' className='form-label'>
                  Author Name
                </label>
                <input
                  onChange={handleChange}
                  name='author'
                  type='text'
                  className='form-control'
                  id='authorName'
                />
              </div>
            </div>
          </div>

          {/* Image link */}
          <div className='mb-3'>
            <label for='imageURL' className='form-label'>
              Image Link
            </label>
            <input
              onChange={handleChange}
              name='url'
              type='text'
              className='form-control'
              id='imageURL'
            />
          </div>

          {/* Ingredients */}
          <div class='mb-3'>
            <label for='Ingredients' className='form-label'>
              Ingredients
            </label>
            <textarea
              onChange={handleChange}
              name='ingredients'
              class='form-control'
              required
              id='Ingredients'
              rows='5'
            ></textarea>
          </div>

          {/* Recipe Method */}
          <div class='mb-3'>
            <label for='recipeMethod' className='form-label'>
              Recipe Direction
            </label>
            <textarea
              onChange={handleChange}
              name='method'
              class='form-control'
              required
              id='recipeMethod'
              rows='5'
            ></textarea>
          </div>

          <div className='row'>
            <div className='col'>
              {/* Categories */}
              <div class='mb-3'>
                <label className='form-label'>Categories</label>
                <br />
                <div class='form-check form-check-inline'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    id='category1'
                    name='dessert'
                    onChange={handleCategoryChange}
                  />
                  <label class='form-check-label' for='category1'>
                    Dessert
                  </label>
                </div>
                <div class='form-check form-check-inline'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    id='category2'
                    name='veg'
                    onChange={handleCategoryChange}
                  />
                  <label class='form-check-label' for='category2'>
                    Veg
                  </label>
                </div>
                <div class='form-check form-check-inline'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    id='category3'
                    name='nonveg'
                    onChange={handleCategoryChange}
                  />
                  <label class='form-check-label' for='category3'>
                    Non-veg
                  </label>
                </div>
                {/* Add more checkboxes for other categories as needed */}
              </div>
            </div>
          </div>

          <button type='submit' className='btn btn-primary submit-btn'>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default ContributePage;
