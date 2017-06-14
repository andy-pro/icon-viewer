import { REHYDRATE } from 'redux-persist/constants';
import mockData from '../__mockData'
import { cmdUpdateLocal } from '../__lib/utils';

const reducer = (state = [], action) => {

  switch (action.type) {

    case REHYDRATE:
      // load mock data for first run
      return action.payload.categories ? state : mockData.categories;

    case 'categories/UPDATED':
    case 'notify/categories/UPDATED':
      return cmdUpdateLocal(state, action)

    default:
      return state
  }
}

export default reducer
