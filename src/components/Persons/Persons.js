import React, { PureComponent } from 'react';

import Person from './Person/Person';

class Persons extends PureComponent {

  static getDerivedStateFromProps(props, state) {
    console.log('[Persons.js] - getDerivedStateFromProps');
    return state;
  }

  // componentWillReceiveProps(props){
  //   console.log('[Persons.js] - shouldComponentUpdate',props);

  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] - shouldComponentUpdate');
  //   if (nextProps.state.persons !== this.props.persons
  //     || nextProps.state.clicked !== this.props.clicked
  //     || nextProps.state.changed !== this.props.changed
  //     ) {
  //     return true
  //   } else {
  //     return true;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {

    console.log('[Persons.js] - getSnapshotBeforeUpdate');
    return { message: 'snapshopt!' };
  }

  componentDidUpdate(prevProps, prevState, snapshopt) {
    console.log('[Persons.js] - componentWillUpdate');
    console.log(snapshopt);
  }

  componentWillUnmount() {
    console.log('[Person.js] - componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
};

export default Persons;
