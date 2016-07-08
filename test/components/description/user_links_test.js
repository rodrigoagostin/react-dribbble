import { renderComponent , expect } from '../../test_helper';
import App from '../../../src/components/description/user_links';

describe('User Links' , () => {
  let component;

  beforeEach(() => {
    let props = { links: { twitter: '', web: '' }};
    component = renderComponent(App, props);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });

  it('user links exists', () => {
    expect(component.find('.user-links')).to.exit;
  });

  it('links list exists', () => {
    expect(component.find('.user-links ul')).to.exit;
  });

});
