import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField'

import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import { orange, green } from '@material-ui/core/colors';
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography';

// stopped at 32 min

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    marginBottom:15, 
    borderRadius: 15,
    color: 'white',
    padding: '0 30px'
  }
})

/* This changes the primary color across all material-ui components
within wrapped theme */

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15
    }
  },
  palette: {
    primary: {
      main: orange[500]
    },
    secondary: {
      main: green[500]
    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = useState(true);
  return(
    <FormControlLabel
      control={<Checkbox
        checked={checked}
        icon={<DeleteIcon/>}
        checkedIcon={<SaveIcon/>}
        onChange={(e) => setChecked(e.target.checked )}
        color="secondary"
        inputProps={{
          'aria-label': 'secondary checkbox'
        }}
        />}
        label="Testing Checkbox"
    />

  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          {/* Makes this typography a div  */}
          <Typography variant="h2" component="div">
            Welcome to MUI
          </Typography>
          <Typography variant="subtitle1">
            Learn how to MUI
          </Typography>
          <ButtonStyled/> 
          <TextField
            variant="filled"
            color="secondary"
            type="email"
            label="The Time"
            placeholder ="test@test.com"
          />
          <CheckboxExample/>
          <ButtonGroup
            variant="contained" 
            color="primary"
          >
            <Button 
              startIcon={<SaveIcon/>}
              // endIcon={<SaveIcon/>}
              size="small"
              // style={{
              //   fontSize: 24
              // }}
            >
                Save
            </Button>
            <Button 
              startIcon={<DeleteIcon/>}
              size="small"
              color="secondary"
            >
                Discard
            </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
