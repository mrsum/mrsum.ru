// ------------------------------
// Depends
// ------------------------------
import { ActionTypes } from '_shared/constants/tweets';
import axios from 'axios';

/**
 * Get all topics
 * @param  {Object} params
 * @return {[type]}
 */
export const getTweets = (params = {}) => ({
  type: ActionTypes.REQUEST_TWEETS,
  payload: axios.get('https://mrsum.ru/api/user_timeline.json', {
    params: Object.assign({
      screen_name: 'me_mrsum',
      count: 50
    }, params)
  }).then(res => res.data)
});


/**
 * Get topic by ID
 * @param  {number} id
 * @param  {Object} [params={}]
 * @return {Promise}
 */
export const getTrackById = (id, params = {}) => ({
  type: ActionTypes.REQUEST_TRACK,
  payload: axios.get(`http://api.soundcloud.com/tracks/${id}`, {
    params: Object.assign({
      client_id: '04a0e1708f413b9e335d4b13ea98c253'
    }, params)
  }).then(res => res.data)
});
