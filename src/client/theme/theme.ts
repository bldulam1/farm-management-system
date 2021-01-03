import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

/**
 * https://kinsta.com/wp-content/uploads/2020/07/colormind-pallete-generator.png
 */

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#efbc75',
    },
    secondary: {
      main: '#c1e1a7',
    },
    background: {
      paper: '#1a4a5a',
      default: '#0e2c40',
    },
  },
  typography: {
    fontFamily: "'Heebo','Helvetica','Arial', sans-serif",
  },
});
