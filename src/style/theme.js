export const breakpoints = {
  mobile: '576',
  mobileL: '768',
  tablet: '769',
  tabletL: '992',
  desktop: '993',
  desktopL: '1200'
}

export const theme = {
  colors: {
    primary: "#FFF",
    secondary: "#161616",
    font: "#444",
    fontLight: "#ccc",
  },
  size: {
    s: '10px',
    m: '12px',
    l: '14px',
    xl: '16px',
    xxl: '24px'
  },
  fonts: {},
  /* breakpoints: { // (max-width)
    huge: 1365,  // tablets in landscape, small monitors
    large: 1024, // tablets in portrait,
    medium: 768, // smartphones in landscape
    small: 420,  // smartphones in portrait
  }, */
  
  device: {
    mobile: /* `(min-width: ${breakpoints.mobileM}) and  */`(min-width: ${breakpoints.mobile})`,
    mobileL: /* `(min-width: ${breakpoints.mobileL}) and  */`(min-width: ${breakpoints.mobileL})`,
    tablet: /* `(min-width: ${breakpoints.tablet}) and  */`(min-width: ${breakpoints.tablet})`,
    tabletL: /* `(min-width: ${breakpoints.tablet}) and  */`(min-width: ${breakpoints.tabletL})`,
    desktop: /* `(min-width: ${breakpoints.desktop}) and  */`(min-width: ${breakpoints.desktop})`,
    desktopL: `(min-width: ${breakpoints.desktopL})`
  }
};