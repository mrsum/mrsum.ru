// ------------------------------
// Depends
// ------------------------------
import styles from './_styles.styl';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const Navbar = class Navbar extends Component {

  static propTypes = {
    className: PropTypes.string
  }

  static defaultProps = {
    className: styles.navbar
  }

  render() {
    const { className } = this.props;
    return (
      <div className={[className, styles.navbar].join(' ')}>
        <ul className={styles.links}>
          <li>mike timeline</li>
          <li><a href='https://s.mrsum.ru'>Slides</a></li>
          <li><a href='https://mrsum.ru/cvcard.pdf'>CV Card</a></li>
        </ul>
      </div>
    );
  }
};

export default Navbar;
