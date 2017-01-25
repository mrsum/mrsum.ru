// ------------------------------
// Depends
// ------------------------------
import styles from './_styles.styl';
import React, { Component } from 'react';

const MainLayout = class MainLayout extends Component {

  render() {
    const date = new Date();

    return (
      <app id='mrsum-app' className={styles.app}>
        <div className={styles.content}>
          { this.props.children }
          <footer className={styles.footer}>
            <h1>{date.getFullYear()} mrsum.ru</h1>
          </footer>
        </div>
      </app>
    );
  }
};

export default MainLayout;
