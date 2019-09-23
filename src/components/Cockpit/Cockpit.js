import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

    //initially, it run all the time that app re-render (like combine ComponentDidMonth and ComponentDidUpdate).
    useEffect(() => {
        console.log('[Cockpit.js] useEffect')
        return () => {
            console.log('[Cockpit.js] return useEffect');
        };//return function will run before the main use Effect runs, but after the (first) render cycle.
    },[props.persons]); //second parameter will use to control useEffect that should trigger or not by if changed it will trigger method.
    //pass an empty array will run only first time.

    //let classes = ['red','bold'].join(' '); //"red bold"
    let assignedClasses = [];
    let btnClass = '';
    if(props.personsLength <= 2){
      assignedClasses.push(classes.red);//classes = ['red']
    }
    if(props.personsLength <=1){
      assignedClasses.push(classes.bold);//classes = ['red','bold']
    }
    if(props.showPersons){
        btnClass = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
          <p className={assignedClasses.join(' ')}>This is actually work.</p>
          <button className={btnClass}
            onClick={props.clicked}>Toggle Person</button>
        </div>
    );
};

export default React.memo(cockpit);