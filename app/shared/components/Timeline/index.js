// ------------------------------
// Depends
// ------------------------------
import styles from './_styles.styl';
import React, { Component, PropTypes } from 'react';

import Tweet from '_shared/components/Tweet';

const Timeline = class Timeline extends Component {

  static defaultProps = {
    tweets: []
  };

  static propTypes = {
    tweets: PropTypes.array
  };

  renderPoints(tweets = []) {
    return tweets.map((item, index) => {
      return (
        <li
          className   = {styles.point}
          key         = {index}>

          <Tweet data = {item} />
        </li>
      );
    });
  }

  render() {
    const { tweets } = this.props;
    return (
      <section className={styles.timeline}>
        <h1>Last activity:</h1>
        <ul className={styles.flow}>
          { this.renderPoints(tweets) }
        </ul>
      </section>
    );
  }

};

export default Timeline;
