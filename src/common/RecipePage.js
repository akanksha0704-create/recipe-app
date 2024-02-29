import React from 'react';
import data from '../data/recipes.json';
import { useParams } from 'react-router-dom';

function RecipePage() {
  const { id } = useParams();

  console.log(data);

  const recipe = data.find((recipe) => recipe.id === id);

  return (
    <>
      <div className='container recipe-page'>
        <h1 className='recipeHeading text-center playfair-display text-highlight my-5'>
          {recipe.name}
        </h1>
        <div className='row'>
          <h2 className='playfair-display text-highlight fs-2 mt-5'>
            INGREDIENTS :
          </h2>
          <div className='col-md-6 order-1 order-md-2 d-flex align-items-center justify-content-center'>
            {recipe.url ? (
              <img
                src={`/recipe-app/images/${recipe.url}`}
                alt=''
                className='recipeImg m-5'
              />
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                className='m-5'
                fill='#fff'
              >
                <path d='M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z' />
              </svg>
            )}
          </div>
          <div className='col-md-6 order-2 order-md-1'>
            <table className='table table-striped roboto-bold my-5'>
              <tbody>
                {recipe.ingredients.map((ing, index) => (
                  <tr key={index}>
                    <td className='d-flex'>
                      <input
                        type='checkbox'
                        class='form-check-input me-3'
                        id='exampleCheck1'
                      />
                      <span>{ing}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className='recipeMethod roboto-medium my-5'>
          <h2 className='playfair-display text-highlight fs-2 my-5'>
            METHOD :
          </h2>
          <ol>
            {recipe.method.map((ing) => {
              return <li> {ing} </li>;
            })}
          </ol>
        </p>
      </div>
    </>
  );
}

export default RecipePage;
