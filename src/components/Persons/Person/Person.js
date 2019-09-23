import React, {Component} from 'react';
import classes from './Person.css';
//import Radium from 'radium';
import Auxilliary from '../../../hoc/Auxilliary'

class Person extends Component {
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };

    // const rnd = Math.random();
    // if(rnd > 0.7){
    //     throw new Error('Sth went wrong!');
    // }

    render() {
    console.log('[Person.js] rendering...');

    return (
        <Auxilliary className={classes.Person}>
            <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} year old.</p>
            <p>{this.props.children}</p>
            <input type='text' onChange={this.props.changed} value={this.props.name} />
        </Auxilliary>
    );
}
}

export default Person;
//export default Radium(person);