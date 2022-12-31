import renderer from 'react-test-renderer';
import Layout from '../layout';

describe('Layout', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<Layout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
