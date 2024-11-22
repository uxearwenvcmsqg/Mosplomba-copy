import React from 'react';
import searchLogo from '../../../../public/search.svg'

function Search() {
  return (
    <div className='flex flex-row'>
			<img src={searchLogo} alt="search-logo"/>
      <input type="text" placeholder="поиск" className='text-lg'/>
    </div>
  );
}

export default Search;
