import React, {PureComponent} from 'react';
import Person from './Person/Person'

class Persons extends PureComponent { //PureComponent is normal Component that implement shouldComponentUpdate with all props check.

    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js] getDerivedStateFromProps.',props,state);
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     if(nextProps.persons !== this.props.persons)
    //         return true;
    //     else
    //         return false;
    // }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message : 'Snapshot!'};
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log('[Person.js] componentWillUnmount');
    }

    render(){
    console.log('[Persons.js] rendering...');
    return (
        this.props.persons.map((person,index) => {
            return ( 
            <Person 
                name={person.name} 
                age={person.age} 
                key={person.id}
                click={this.props.clicked.bind(this,index)}
                
                changed={this.props.changed.bind(this,person.id)}/>
            )
        })
      ); 
    }
 };
//equvalent with => {return ();}

export default Persons;