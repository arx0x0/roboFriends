import React from 'react';

const SearchBox = ( {searchfield, searchChange
} ) => {
    return (
      <div className="pa2">
        <input 
        className='pa3 ba b--blue-lightest-blue'
        type='search' 
        placeholder='search robots'
        onChange={searchChange}/> /
      </div>
  
    )
}

export default SearchBox;

//Everytime the onChange function is triggered call the searchChange, which is a prop, and is also the onSearchChange function in App.js. It keeps calling it and reinitializing it so that any new input keeps rendering in the browser and things like Lea showing the robots that match those first 3 characters can be accomplished, so almost like live rendering and constant calling of the function. Its a cycle, searchbox empty first then calls onSearcChange which sets state of searchfield as current input, then back to searchBox, etc.