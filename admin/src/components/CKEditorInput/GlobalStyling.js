import {createGlobalStyle} from "styled-components";
import { style as common } from "./styles/common";
import { style as light } from "./styles/light";
import { style as dark } from "./styles/dark";

export const getGlobalStyling = ( theme ) => {
  let themeStyle = null;
  switch ( theme ) {
    case 'dark':
      themeStyle = dark;
      break;
    case 'light':
      themeStyle = light;
      break;
  }

  return createGlobalStyle`
    ${ common }
    ${ themeStyle }
  `;
};
