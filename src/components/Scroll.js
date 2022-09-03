import React from 'react';

//The below function is an example of children 
const Scroll = (props) => {
  return (
    //Making a scrollable component, wrapping it in div with style (meaning JSX) having overflowY axis of scroll and then borders and then a height to dictate how much of the underflow element we see.
    //React is a view layer as we pass the value of say searchfield at an instance from the constructor as a prop at each instance into SearchBox, CardList, etc.
    <div style={{overflowY: 'scroll', border: '5px solid black', height: '500px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;