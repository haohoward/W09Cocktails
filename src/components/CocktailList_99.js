import React from 'react';
import Cocktail from './Cocktail_99';
import Loading from './Loading_99';
import { useGlobalContext } from '../context_99';

const CocktailList = () => {
  const {loading,cocktails}=useGlobalContext();
  if(loading){
    return <Loading/>
  }

  if(cocktails.lengh<1){
    return(
      <h2 className='section-title'>
        no cocktail matched your search criteria
      </h2>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>cocktail</h2>
      <div className='cocktails-center'>
      {
        cocktails.map((item) => {
          return <Cocktail key={item.id}{...item}/>
        })
      }
      </div>
    </section>
  );
};

export default CocktailList;
