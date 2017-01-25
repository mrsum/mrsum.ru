// ------------------------------
// Depends
// ------------------------------
import styles from './_styles.styl';
import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import Linkify from 'react-linkify';

const Tweet = class Tweet extends Component {

  static propTypes = {
    className: PropTypes.string,
    data: PropTypes.object
  }

  static defaultProps = {
    className: styles.navbar,
    data: {}
  }

  renderImage(data) {
    return data.entities && data.entities.media
      ? data.entities.media.map((item, index) => {
        return (
          <a  href      = {item.expanded_url}
              target    = '_blank'
              className = {styles.imageWrapper}
              key       = {index}>

            <div className={styles.image} style={{ backgroundImage: `url(${item.media_url_https})`}}/>
          </a>
          );
      }) : '';
  }

  renderText(data) {
    return (
      <p className={styles.text}>{ data.retweeted_status ? data.retweeted_status.text : data.text }</p>
    );
  }

  render() {
    const { className, data } = this.props;
    return (
      <div className={[className, styles.card].join(' ')}>
        <div className={styles.content}>
          <div className={styles.time}>{ moment(Date.parse(data.created_at)).format('Do MMM YYYY') }</div>
          { this.renderImage(data) }
          <Linkify properties={{ target: '_blank' }}>{ this.renderText(data) }</Linkify>
        </div>
      </div>
    );
  }
};

export default Tweet;
