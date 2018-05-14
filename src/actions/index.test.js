import * as actions from './index';
import { categories } from '../data/fixtures';

describe('action', () => {
  it('creates a action to set categories', () => {
    const expectedAction = {
      type: actions.SET_CATEGORIES,
      categories
    };

    expect(actions.setCategories(categories)).toEqual(expectedAction);
  })
})
