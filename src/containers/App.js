import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

//App component is a smart component and it has 2 states, robots and searchfield, uses class before App to use constructor
//Smart components are components that have a state
class App extends Component {
    constructor() {
      super()
      this.state = {
        robots: [],
        searchfield: ''
      }
      console.log('constructor');
    }

    componentDidMount() {
      //Mounting's final phase is componentDidMount() and right after it goes to the Updating phase and renders again
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots: users}));
      //fetch is a tool to make request to servers, we make a request to get users and we change the response into a JSON file and then set robots to have a state of users.
    }


    //**Overview: Virtual DOM collects the robot and searchfield state and react uses them to render and then pass them down as props for SearchBox and CardList to use at that instance and then SearchBox and CardList render. Step 1: App is called when searchfield changes and it tells the App to run onSearchChange and to set searchfield to the value user enters. 2: Then the SearchBox communicates to the CardList to filter the robots field to only include what was entered into the searchfield, and then we pass filteredRobots as props to CardList*/

    onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value })
    }

    //Above means to set the state's searchfield to have the value of what the user typed in
    //Right below we are filtering robots object and returning the robots name if it is true, then we are also setting props to SearchBox call onSearchChange function to set the state to the name entered, then after that we pass filteredRobots as props to CardList which gives us back only a single card aka the card we searched for

    render() {     //Gets called everytime STATE changes
      const { robots, searchfield } = this.state;

      const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })
      //Ternary Operator:
      return (robots.length === 0) ? //If robots has not loaded yet
        <h1>Loading</h1> :
      (
         //Renders right after constructor then goes straight to componentDidMount()
  
        <div className="tc">
          <h1 className="f2 ">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>

      );
    }
  }



// Anytime SearchBox input changes we want to trigger onSearchChange function, this.onSearchChange, where this object is App, same as saying App.onSearchChange


export default App;

// STATE is an Object that describes your application, in this case it is the robot and whatever is entered in the search box. We are able to change the value of things like the SearchBox and the robots therefore they are/have a STATE, whereas props are simply things that come out of STATE, *a parent feeds STATE into a child component and once the child component receives it, it can never change that prop
//In order to use STATE we must make a class
//Up Above, our STATE is robots and it is passed down as props in CardList.js