/* eslint-disable no-useless-concat */
import React from 'react';
import './App.css';
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Checkbox,
  Container,
  Paper,
  TextField,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const App = () => (
  <>
    <AppBar color="primary">
      <Toolbar>
        <Typography variant="h6">
          My React & Material-UI ToDo App
        </Typography>
      </Toolbar>
    </AppBar>
    <Container className="Container" maxWidth="xs">
      <Box className="Wrapper">
        <Paper className="ToDo">
          <Box className="ToDo__Body">
            <Card className="ToDo__Item" variant="outlined">
              <CardContent className="ToDo__Text">
                <Typography component="p">
                  toDotoDotoDotoDotoDotoDotoDotoDotoDotoDotoDotoDotoDotoDotoDotoDo
                </Typography>
              </CardContent>
              <CardActions>
                <Checkbox color="secondary" size="small" inputProps={{ 'aria-label': 'to do checked/unchecked' }} />
                <IconButton color="secondary">
                  <DeleteOutlineIcon fontSize="small" />
                </IconButton>
              </CardActions>
            </Card>
          </Box>
          <footer className="ToDo__Footer">
            <form className="Form">
              <TextField className="TextField FullWidth" placeholder="Type your ToDo here..." color="primary" variant="standard" />
              <Button className="Button" variant="contained" type="submit" color="primary">
                Add ToDo
              </Button>
            </form>
          </footer>
        </Paper>
      </Box>
    </Container>
  </>

);
export default App;
