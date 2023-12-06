import GitTest from "./GitHubCard";
import renderer from 'react-test-renderer';


test('renders a snapshot', () => {
    const tree = renderer.create(<GitTest/>).toJSON()
      expect(tree).toMatchSnapshot()
  })