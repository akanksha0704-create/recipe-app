import './App.css';
import bootstrap from 'bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './common/Navigation';
import Footer from './common/Footer';
import CardList from './common/CardList';
import RecipePage from './common/RecipePage';
import ContributePage from './common/ContributePage';
import Favorites from './common/Favorites';
import AboutUs from './common/AboutUs';
import SearchPage from './common/SearchPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/recipe-app/' element={<CardList />} />
          <Route path='/recipe-app/contribute' element={<ContributePage />} />
          <Route path='/recipe-app/favorites' element={<Favorites />} />
          <Route path='/recipe-app/about-us' element={<AboutUs />} />
          <Route path='/recipe-app/recipes/:id' element={<RecipePage />} />
          <Route
            path='/recipe-app/search/:searchTerm'
            element={<SearchPage />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
