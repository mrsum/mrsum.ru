// ------------------------------
// Depends
// ------------------------------
import styles from './_styles.styl';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// ------------------------------
// Actions
// ------------------------------
import { getTweets } from '_shared/actions/tweets';

// ------------------------------
// Components
// ------------------------------
import Navbar from '_shared/components/Navbar';
import Timeline from '_shared/components/Timeline';

class IndexPage extends Component {

  static defaultProps = {
    tweets: []
  };

  static propTypes = {
    tweets: PropTypes.array
  };

  static fetchData(dispatch) {
    const promiseArr = [
      dispatch(getTweets({ count: 30 }))
    ];

    return Promise.all(promiseArr);
  }

  render() {
    const { tweets } = this.props;

    return (
      <div className={styles.container}>

        <Navbar className={styles.navbar}/>

        <section className={styles.intro} id='background'>
          <section className={styles.wrapper}>
            <h1>Hi there, it's Mike</h1>
            <h3>Follow me at:</h3>
            <a href='https://github.com/mrsum'>github</a>
            <span>&</span>
            <a href='https://twitter.com/me_mrsum'>twitter</a>
          </section>
        </section>

        <section className={styles.feed}>
          <Timeline tweets={tweets} />
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tweets: state.tweets
  };
}

export default connect(mapStateToProps)(IndexPage);
