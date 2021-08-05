import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

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
import toDo from './store/toDo';

const ToDoItem = ({ task }) => {
  const { name, done } = task;
  return (
    <Card className="ToDo__Item" variant="outlined">
      <CardContent className="ToDo__Text">
        <Typography component="p">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Checkbox color="secondary" size="small" checked={done} inputProps={{ 'aria-label': 'to do checked/unchecked' }} />
        <IconButton color="secondary">
          <DeleteOutlineIcon fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  );
};

const ToDoList = ({ children }) => (
  <Box className="ToDo__Body">
    {children}
  </Box>
);

const ToDoForm = () => (
  <footer className="ToDo__Footer">
    <form className="Form">
      <TextField className="TextField FullWidth" placeholder="Type your ToDo here..." color="primary" variant="standard" />
      <Button className="Button" variant="contained" type="submit" color="primary">
        Add ToDo
      </Button>
    </form>
  </footer>
);

const App = observer(() => (
  <>
    <AppBar color="primary">
      <Toolbar>
        <Typography variant="h6">
          My React & Material-UI ToDo App
        </Typography>
      </Toolbar>
    </AppBar>
    <Container className="Container" maxWidth="xs">
      <Paper className="ToDo">
        <ToDoList>
          {toDo.toDoList.map((task) => (
            <ToDoItem task={task} key={task.id} />
          ))}
        </ToDoList>
        <ToDoForm />
      </Paper>
    </Container>
  </>

));

ToDoList.propTypes = {
  children: PropTypes.element.isRequired,
};

ToDoItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    done: PropTypes.bool,
  }).isRequired,
};
export default App;
