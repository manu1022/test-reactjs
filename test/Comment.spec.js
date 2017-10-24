import React from 'react';
import Comment from '../src/components/Comment';
import CommentList from '../src/components/CommentsList';
import { spy } from 'sinon';
import { expect } from 'chai';
import sinon from 'sinon';
import { mount, render, shallow } from 'enzyme';

describe('Comment item', () => {
  const wrapper = shallow(<Comment />);

  it('should be a list item', () => {
    expect(wrapper.type()).to.eql('li');
  });
  
  it('renders the custom comment text', () => {
  wrapper.setProps({ comment: 'sympathetic ink' });
  expect(wrapper.contains('sympathetic ink')).to.equal(true);
  });
  
  it('has a class name of "comment-item"', () => {
    expect(wrapper.find('li.comment-item')).to.have.length(1);
  });

  it('calls componentDidMount', () => {
	spy(CommentList.prototype, 'componentDidMount');

    const wrapper = mount(<CommentList />);
    expect(CommentList.prototype.componentDidMount.calledOnce).to.equal(true);
  });

});
