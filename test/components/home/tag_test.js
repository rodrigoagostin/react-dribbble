import { renderComponent , expect } from '../../test_helper';
import App from '../../../src/components/home/tag.js';

describe('Tag' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('tag exists', () => {
    expect(component.find('.tag')).to.exit;
  });

});
