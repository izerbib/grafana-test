import defaultTheme, { commonColorsPalette } from './default';
import { GrafanaThemeType, GrafanaTheme } from '@grafana/data';

const basicColors = {
  ...commonColorsPalette,
  black: '#000000',
  white: '#ffffff',
  dark1: '#141414',
  dark2: '#161719',
  dark3: '#1f1f20',
  dark4: '#212124',
  dark5: '#222426',
  dark6: '#262628',
  dark7: '#292a2d',
  dark8: '#2f2f32',
  dark9: '#343436',
  dark10: '#424345',
  gray1: '#555555',
  gray2: '#8e8e8e',
  gray3: '#b3b3b3',
  gray4: '#d8d9da',
  gray5: '#ececec',
  gray6: '#f4f5f8', // not used in dark theme
  gray7: '#fbfbfb', // not used in dark theme
  grayBlue: '#212327',
  blueBase: '#42b6f6',
  blueShade: '#42b6f6',
  blueLight: '#5794f2',
  blueFaint: '#041126',
  redBase: '#e02f44',
  redShade: '#c4162a',
  greenBase: '#42b6f6',
  greenShade: '#42b6f6',
  blue: '#42b6f6',
  red: '#d44a3a',
  yellow: '#ecbb13',
  purple: '#9933cc',
  variable: '#32d1df',
  orange: '#1e90ff',
  orangeDark: '#ff780a',
};

const darkTheme: GrafanaTheme = {
  ...defaultTheme,
  type: GrafanaThemeType.Dark,
  isDark: true,
  isLight: false,
  name: 'Grafana Dark',
  colors: {
    ...basicColors,
    inputBlack: '#09090b',
    brandPrimary: basicColors.orange,
    brandSuccess: basicColors.greenBase,
    brandWarning: basicColors.orange,
    brandDanger: basicColors.redBase,
    queryRed: basicColors.redBase,
    queryGreen: '#74e680',
    queryPurple: '#fe85fc',
    queryKeyword: '#66d9ef',
    queryOrange: basicColors.orange,
    online: basicColors.greenBase,
    warn: '#f79520',
    critical: basicColors.redBase,
    bodyBg: basicColors.dark2,
    pageBg: basicColors.dark2,
    body: basicColors.gray4,
    text: basicColors.gray4,
    textStrong: basicColors.white,
    textWeak: basicColors.gray2,
    textEmphasis: basicColors.gray5,
    textFaint: basicColors.dark5,
    link: basicColors.gray4,
    linkDisabled: basicColors.gray2,
    linkHover: basicColors.white,
    linkExternal: basicColors.blue,
    headingColor: basicColors.gray4,
    pageHeaderBorder: basicColors.dark9,
    panelBg: basicColors.dark4,

    // Next-gen forms functional colors
    formLabel: basicColors.gray70,
    formDescription: basicColors.gray70,
    formLegend: basicColors.gray85,
    formInputBg: basicColors.gray15,
    formInputBgDisabled: basicColors.gray10,
    formInputBorder: basicColors.gray25,
    formInputBorderHover: basicColors.gray33,
    formInputBorderActive: basicColors.blue95,
    formInputBorderInvalid: basicColors.red88,
    formInputText: basicColors.gray85,
    formInputDisabledText: basicColors.gray70,
    formInputTextStrong: basicColors.gray85,
    formInputTextWhite: basicColors.white,
    formFocusOutline: basicColors.blueShade,
    formValidationMessageText: basicColors.white,
    formValidationMessageBg: basicColors.red88,
    formSwitchBg: basicColors.gray25,
    formSwitchBgActive: basicColors.blueLight,
    formSwitchBgHover: basicColors.gray33,
    formSwitchBgActiveHover: basicColors.blueBase,
    formSwitchBgDisabled: basicColors.gray25,
    formSwitchDot: basicColors.gray15,
    formCheckboxBg: basicColors.dark5,
    formCheckboxBgChecked: basicColors.blueLight,
    formCheckboxBgCheckedHover: basicColors.blueBase,
    formCheckboxCheckmark: basicColors.gray25,
  },
  background: {
    dropdown: basicColors.dark3,
    scrollbar: basicColors.dark9,
    scrollbar2: basicColors.dark9,
    pageHeader: `linear-gradient(90deg, ${basicColors.dark7}, ${basicColors.black})`,
  },
  shadow: {
    pageHeader: `inset 0px -4px 14px ${basicColors.dark3}`,
  },
};

export default darkTheme;
