import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const DiscoverIcon = ({stroke = '#14130E', ...props}) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M17.8001 2.1L7.87009 4.59C6.42009 4.95 4.95009 6.42 4.59009 7.87L2.10009 17.8C1.35009 20.8 3.19009 22.65 6.20009 21.9L16.1301 19.42C17.5701 19.06 19.0501 17.58 19.4101 16.14L21.9001 6.2C22.6501 3.2 20.8001 1.35 17.8001 2.1Z"
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default DiscoverIcon;
