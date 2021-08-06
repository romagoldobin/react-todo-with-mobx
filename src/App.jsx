import React, { useState } from 'react';
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

const ToDoItem = ({ task, onChangeStatusHandler, onDeleteHandler }) => {
  const { name, isDone } = task;

  return (
    <Card className="ToDo__Item" variant="outlined">
      <CardContent className="ToDo__Text">
        <Typography component="p">
          {name}
        </Typography>
      </CardContent>
      <CardActions>
        <Checkbox color="secondary" size="small" checked={isDone} onChange={onChangeStatusHandler} inputProps={{ 'aria-label': 'to do checked/unchecked' }} />
        <IconButton color="secondary" onClick={onDeleteHandler}>
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

const ToDoForm = ({ onAddToDoHandler }) => {
  const [text, setText] = useState('');
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onAddToDoHandler({
      id: Date.now(),
      name: text,
      isDone: false,
    });
    setText('');
  };

  return (
    <footer className="ToDo__Footer">
      <form className="Form" onSubmit={onSubmitHandler}>
        <TextField className="TextField FullWidth" placeholder="Type your ToDo here..." value={text} onChange={(e) => { setText(e.target.value); }} color="primary" variant="standard" />
        <Button className="Button" variant="contained" type="submit" color="primary">
          Add ToDo
        </Button>
      </form>
    </footer>
  );
};

const App = observer(() => {
  const addToDoHandler = (task) => {
    toDo.addToDo(task);
  };

  const changeStatusHendler = (item) => {
    toDo.changeStatus(item);
  };

  const deleteToDoHandler = (id) => {
    toDo.deleteToDo(id);
  };

  return (
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
              <ToDoItem
                task={task}
                key={task.id}
                onChangeStatusHandler={() => changeStatusHendler(task)}
                onDeleteHandler={() => deleteToDoHandler(task.id)}
              />
            ))}
          </ToDoList>
          <ToDoForm onAddToDoHandler={addToDoHandler} />
        </Paper>
      </Container>
    </>
  );
});

ToDoList.propTypes = {
  children: PropTypes.node.isRequired,
};

ToDoItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    isDone: PropTypes.bool,
  }).isRequired,
  onChangeStatusHandler: PropTypes.func.isRequired,
  onDeleteHandler: PropTypes.func.isRequired,
};

ToDoForm.propTypes = {
  onAddToDoHandler: PropTypes.func.isRequired,
};

export default App;
