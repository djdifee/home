import Enzyme from 'enzyme'; // eslint-disable-line
import Adapter from 'enzyme-adapter-react-16'; // eslint-disable-line

/* At the moment, Enzyme requires a version specific adapter
 * If you upgrade React to a version higher than 16, you will probably need to get a new adapter
  * https://github.com/airbnb/enzyme/tree/master/packages/enzyme-adapter-react-16
  * */
Enzyme.configure({ adapter: new Adapter() });
