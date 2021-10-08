import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import AddTask from './components/AddTask';
import * as C from './components/Container';
import { Tasks } from './components/Tasks';
import Header from './components/Header';
import TaskDetails from './components/TaskDetails';

const App = () => {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        title: 'Estudar Programação',
        completed: false,
      },
      {
        id: 2,
        title: 'Pesquisar para o TCC',
        completed: true,
      },
      {
        id: 3,
        title: 'Procurar o que fazer',
        completed: true,
      },
    ]
  );

  useEffect (() => {
    const fetchTasks = async () => {
      const { data } = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10");
      setTasks(data);
    };

    fetchTasks();
  }, []);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId)
        return { ...task, completed: !task.completed }

      return task;
    });

    setTasks(newTasks);

  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks, {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);

  };

  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  };

  return ( 
    <Router>
      <C.ContainerStyled>
        <Header />
        {/* O exact serve para filtrar baseado no path, caso não tenha esse filtro, tudo dentro do Route continuará sendo mostrado como se fosse a "home". */}
        <Route path="/" exact render={() => (
          <>
            <AddTask handleTaskAddition={handleTaskAddition} />
            <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete} />
          </>
        )} />
        <Route path="/:taskTitle" exact component={TaskDetails} />
      </C.ContainerStyled>
    </Router>
  );
};

export default App;