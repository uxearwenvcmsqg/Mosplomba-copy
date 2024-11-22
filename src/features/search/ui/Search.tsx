import React from 'react';
import searchLogo from '../../../../public/search.svg'

function Search() {
  return (
    <div>
			<img src={searchLogo} alt="search-logo" />
      <input type="text" placeholder="поиск" />
    </div>
  );
}

export default Search;
