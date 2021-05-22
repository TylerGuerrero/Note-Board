import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './pages/Create';
import Notes from './pages/Notes';
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { purple } from '@material-ui/core/colors/purple'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fefefe"
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route path="/create">
            <Create />
        </Route>  
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
