import keyMirror from 'key-mirror';

/**
 * FETCH prefixes
 * @returns {Object<{REQUEST_TRACK: 'REQUEST_TRACK', REQUEST_TRACKS: 'REQUEST_TRACKS'}>}
 */
export const ActionTypes = keyMirror({
  REQUEST_TWEET: null,
  REQUEST_TWEETS: null
});
