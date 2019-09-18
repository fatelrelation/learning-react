import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons : [
      {
        name: 'AAA',
        age : 28
      },
      {
        name: 'BBB',
        age : 21
      },
      {
        name: 'CCC',
        age : 51
      }
    ]
  }

  switchNameHandler = () =>{
    let newState = this.state.persons;
    let firstPerson = newState.shift();
    newState.push(firstPerson);
    this.setState({
      persons : [
        {
          name: newState[0].name,
          age : newState[0].age
        },
        {
          name: newState[1].name,
          age : newState[1].age
        },
        {
          name: newState[2].name,
          age : newState[2].age
        }
      ]
    })
  }

  nameChangedHandler = (event) => {
    let newState = this.state.persons;
    let firstPerson = newState.pop();
    firstPerson.name = event.target.value;
    newState.push(firstPerson);
    this.setState({
      persons : [
        {
          name: newState[0].name,
          age : newState[0].age
        },
        {
          name: newState[1].name,
          age : newState[1].age
        },
        {
          name: newState[2].name,
          age : newState[2].age
        }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hello World.</h1>
        <button 
          style={style}
          onClick={this.switchNameHandler}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler}
          changed={this.nameChangedHandler}>My Hobby : ABC</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;


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
