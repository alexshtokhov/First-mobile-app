import * as React from "react";
import Svg, { Path } from "react-native-svg";


const BackArrow = (props) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16.7416 3.25842C17.0548 3.57167 17.0833 4.06187 16.827 4.40729L16.7416 4.50626L9.13059 12.1176L16.7416 19.729C17.0548 20.0423 17.0833 20.5325 16.827 20.8779L16.7416 20.9768C16.4283 21.2901 15.9381 21.3186 15.5927 21.0623L15.4937 20.9768L7.25843 12.7416C6.94518 12.4283 6.9167 11.9381 7.173 11.5927L7.25843 11.4937L15.4937 3.25842C15.8383 2.91384 16.397 2.91384 16.7416 3.25842Z"
      fill="#FEFEFE"
    />
  </Svg>
);
export default BackArrow;