import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
//import Radium, { StyleRoot } from 'radium';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor.');
  }

  state = {
    persons : [
      {id: 'qwer001', name: 'AAA', age : 28 },
      {id: 'qwer002', name: 'BBB', age : 21 },
      {id: 'qwer003', name: 'CCC', age : 51 }
    ],
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps.',props,state);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount.');
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] shouldComponentUpdate.');
    return true;
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate')
  }

  switchNameHandler = () =>{
    let newState = [...this.state.persons];
    let firstPerson = newState.shift();
    newState.push(firstPerson);
    this.setState({
      persons : newState
    })
  }

  nameChangedHandler = (id,event) => {
    const editedPersonIndex = this.state.persons.findIndex((person) => {
      return id === person.id;
    });

    const editedPerson = {...this.state.persons[editedPersonIndex]};
    editedPerson.name = event.target.value;
    
    let newState = [...this.state.persons];
    newState[editedPersonIndex] = editedPerson;

    this.setState({
      persons : newState
    });
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  render() {
    console.log('[App.js] render.');
    let persons = null;
    
    if(this.state.showPersons){
      persons = (
        <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
      );
      
      
    }

    return (
      //<StyleRoot>
        <div className={classes.App}>
          <button 
            onClick={() => {
              this.setState({ showCockpit : !this.state.showCockpit});
            }}>
            Toggle Cockpit</button>
          { this.state.showCockpit ? 
          <Cockpit 
            title={this.props.appTitle}
            showPersons = {this.state.showPersons}
            personsLength = {this.state.persons.length}
            clicked={this.togglePersonHandler}/>
          : null}
          {persons}
        </div>
      //</StyleRoot>
    );
  }
}

export default App;
//export default Radium(App);

// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person'

// const app = props => {
//   const [personState, setPersonsState ] = useState({
//     persons : [
//       {
//         name: 'AAA',
//         age : 28
//       },
//       {
//         name: 'BBB',
//         age : 21
//       },
//       {
//         name: 'CCC',
//         age : 51
//       }
//     ]
//   });

//   const switchNameHandler = () =>{
//     let newState = personState.persons;
//     let firstPerson = newState.shift();
//     newState.push(firstPerson);
//     setPersonsState({
//       persons : [
//         {
//           name: newState[0].name,
//           age : newState[0].age
//         },
//         {
//           name: newState[1].name,
//           age : newState[1].age
//         },
//         {
//           name: newState[2].name,
//           age : newState[2].age
//         }
//       ]
//     })
//   }

//     return (
//       <div className="App">
//         <h1>Hello World.</h1>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
//         <Person name={personState.persons[1].name} age={personState.persons[1].age} >My Hobby : ABC</Person>
//         <Person name={personState.persons[2].name} age={personState.persons[2].age} />
//       </div>
//     );
//   }

// export default app;
