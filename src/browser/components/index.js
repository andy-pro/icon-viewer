/* browser components */
import Helmet from 'react-helmet';
import { Route, withRouter } from 'react-router-dom';

import Footer from './Footer';
// import Icon from './icons';
import FlatList from './FlatList';
import SectionList from './SectionList';
import Link from './Link';
import DropdownMenu from './DropdownMenu';

// import HeaderBar from '../HeaderBar';
// import Match from '../Match'
// import Checkbox from '../Checkbox';
// import FormWrapper from '../FormWrapper';
// import Footer from '../Footer';
// import TwistedView from '../TwistedView'
// import IconLink from './IconLink';
import ListView from './ListView';
// import MenuLink from './MenuLink';
// import Picker from './Picker'
// import DatePicker from './DatePicker'
import { View } from './fela';

// Picker,
export {
  Text,
  Form,
  Button,
  TextInput,
  FileInput,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Image,
  Svg,
  G,
  Path,
} from './fela';

export { View, View as Drawer };

const Alert = {
  alert: (hdr, msg, btns) => {
    if (msg) hdr = hdr + '\n' + msg;
    if (!btns) alert(hdr);
    else if (confirm(hdr)) btns[1].onPress();
  },
  prompt: (hdr, msg) => prompt(hdr, msg),
};

export {
  Footer,
  // Icon,
  FlatList,
  SectionList,
  Link,
  DropdownMenu,
  Helmet,
  // AppText,
  // TextContainer,
  Route,
  withRouter,
  // HeaderBar,
  // Match,
  // Checkbox,
  ListView,
  // IconLink,
  Alert,
  // MenuLink,
  // Picker,
  // FormWrapper,
  // Footer,
  // TwistedView,
  // DatePicker,
};
