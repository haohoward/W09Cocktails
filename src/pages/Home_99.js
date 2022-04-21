import React from 'react';
import CocktailList from '../components/CocktailList_99';
import SearchForm from '../components/SearchForm_99';

const Home = () => {
  return (
    <main>
      <SearchForm/>
      <CocktailList/>
    </main>
  );
};

export default Home;
