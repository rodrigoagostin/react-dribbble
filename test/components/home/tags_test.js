import { renderComponent , expect } from '../../test_helper';
import App from '../../../src/components/home/tags.js';

describe('Tags' , () => {
  let component;

  beforeEach(() => {
    let props = { tags : [] }
    component = renderComponent(App, props);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('tags description exists', () => {
    expect(component.find('.tags-description')).to.exit;
  });

  it('tags description list exists', () => {
    expect(component.find('.tags-description ul')).to.exit;
  });

});
