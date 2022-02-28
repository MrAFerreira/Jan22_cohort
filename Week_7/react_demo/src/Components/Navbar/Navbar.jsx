import React, { Component } from 'react';
import Button from '../Button/Button';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <h1>{this.props.message}</h1>
        <Button link="https://google.com" text="Visit Google" />
        <Button link="https://ironfootball.herokuapp.com/" text="Visit IronFootbal" />
        <Button link="https://reactjs.org" text="Visit Rweact Docs" />
      </nav>
    );
  }
}
export default Navbar;
