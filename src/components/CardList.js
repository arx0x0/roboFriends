import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (  
    <div>
        {
        robots.map((user, i) => {
        return (
        <Card 
        key={i} 
        id={robots[i].id} 
        name={robots[i].name} 
        email={robots[i].email}
        />
        );
      })
      } 
    </div>

  );
}

export default CardList;

//We need a card import because for each card we have the Card module is connected to CardList as the Card model is passed to the CardList module and used within each card, then after the Card is passed stuff like id, name, email are just for assigning values to the Card template
//The CardList goes through the items it gets from Card.js and then it retrieves the destructured robots to be equal to the properties of each robot object entry, and then AT EACH CARD id="..." IT CALLS UPON CARD.JS AND CARD.JS APPLIES THE HTML ELEMENTS TO IT AND THEN SENDS IT BACK TO CARDLIST WHICH FINALLY: gets exported to index.js, and then in index.js it gets rendered to our index.html file


//Must wrap JS variables in {} so JSX knows to evaluate it