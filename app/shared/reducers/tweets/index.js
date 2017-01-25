// ------------------------------
// Import rest actions
// ------------------------------
import { ActionTypes } from '_shared/constants/tweets';
import { SUCCESS, PENDING } from '_shared/constants/global';

/**
 * @param  {Array}  state  [description]
 * @param  {Object} action [description]
 * @return {[type]}        [description]
 */
export default function(state = [], action = {}) {
  switch (action.type) {
    case ActionTypes.REQUEST_TWEET + PENDING:
    case ActionTypes.REQUEST_TWEETS + PENDING:
      return [];

    case ActionTypes.REQUEST_TWEET + SUCCESS:
    case ActionTypes.REQUEST_TWEETS + SUCCESS:
      return action.payload;

    default:
      return state;
  }
}
