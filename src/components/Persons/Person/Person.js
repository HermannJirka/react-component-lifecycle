import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';

class Person extends Component {

  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        <p key="pk1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
      </p>
        <p key="pk2">{this.props.children}</p>
        <input key="ip1" type="text" onChange={this.props.changed} value={this.props.name} />
      </Aux>
    );
  }
};

export default withClass(Person, classes.Person);
