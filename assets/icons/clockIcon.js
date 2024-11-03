import * as React from "react";
import Svg, { Path } from "react-native-svg";


const ClockIcon = (props) => (
  <Svg
    width={26}
    height={26}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5.46863 9.32378L2.74932 9.15823C4.69854 4.01349 10.2949 1.08323 15.7512 2.54013C21.5627 4.09186 25.0146 10.0328 23.4612 15.8096C21.9079 21.5865 15.9376 25.0116 10.1261 23.4599C5.8112 22.3077 2.79707 18.7358 2.16666 14.6081"
      stroke="#FEFEFE"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13 8.66667V13L15.1667 15.1667"
      stroke="#FEFEFE"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ClockIcon;
