import React from 'react';
import { mount } from 'enzyme';
import { Category } from './Category'
import { categories, clues } from '../data/fixtures';
import { fakeServer } from 'sinon';

const props = { category: categories[0] }

describe('Category', () => {
  beforeEach(() => {
    const server = fakeServer.create();

    server.respondWith(
      'GET',
      `http://jservice.io/api/clues?category=${props.category.id}`,
      [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify(clue);
      ]
    )
  })
  const category = mount(<Category { ...props }/>)
})
