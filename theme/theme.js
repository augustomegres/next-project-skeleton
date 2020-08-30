import { createMuiTheme } from '@material-ui/core/styles';

//Outras cores
//Material table icons: #7179ad

const theme = createMuiTheme({
  zIndex: {
    modal: 1000000000,
    snackbar: 1000000001,
  },
  palette: {
    primary: {
      dark: '#401797',
      main: '#5c22d8',
      light: '#7c4edf',
      contrastText: '#fff',
    },
    secondary: {
      dark: '#b240a8',
      main: '#ff5cf0',
      light: '#ff7cf3',
      contrastText: '#fff',
    },
  },
});

export default theme;
