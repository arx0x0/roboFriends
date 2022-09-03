import React from 'react';

const Card = ({name, email, id}) => {

  return (
    <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt='robots' src= {`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;

//Wrapping in {} because it is a JS expression aka it is from the robots.js file, so props AKA properties represents each new item that is specified in index.js and it for each of them creates a card, with the props representing item at each specified index in index.js */