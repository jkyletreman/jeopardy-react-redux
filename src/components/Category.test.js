import React from 'react';
import { mount } from 'enzyme';
import { Category } from './Category'
import { categories, clues } from '../data/fixtures';
import { fakeServer } from 'sinon';

const props = { category: categories[0] }

describe('Category', () => {
  let server;

  beforeEach(() => {
    server = fakeServer.create();

    server.respondWith(
      'GET',
      `http://jservice.io/api/clues?category=${props.category.id}`,
      [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify(clues)
      ]
    )
  })

  describe("when creating a new category", () => {
    let category;
    // done is a optional parameter for handling async code
    beforeEach(done => {
      category = mount(<Category { ...props }/>)

      server.respond();

      setTimeout(done);
    })


    it('logs the category', () => {
      category.update();
      // console.log(category.debug())
    })

    it('initializes the clues in the state', () => {
      // console.log(category.state())
      expect(category.state().clues).toEqual(clues);
    });

    it('renders the cateogy title', () => {
      expect(category.find('h2').text()).toEqual(props.category.title)
    })

    it('renders the correct number of clues', () => {
      expect(category.update().find('Clue').length).toEqual(clues.length)
    })
  })
})
