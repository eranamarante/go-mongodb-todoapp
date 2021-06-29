import React, { useEffect, useState } from 'react';
import { Card, Header, Form, Input } from "semantic-ui-react";
import ToDoCard from './ToDoCard';
import axios from 'axios';

const endpoint = "http://localhost:8080";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const getTasks = () => {
    axios.get(endpoint + '/api/task')
      .then(res => {
        setTasks(res.data);
        // console.log(res.data);
      })
      .catch(err => console.error(err))
  }

  const onSubmit = () => {
    axios.post(endpoint + '/api/task', { task }, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then( _ => {
        setTask("");
        getTasks();
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getTasks();
  }, [])

  return (
    <>
      <div className="row" style={{marginTop: '3rem'}}>
        <Header className="header" as="h2">
          TO DO LIST
        </Header>
      </div>
      <div className="row">
        <Form onSubmit={onSubmit}>
          <Input
            style={{marginTop: '1rem'}}
            type="text"
            name="task"
            fluid
            placeholder="Create Task"
            onChange={(event) => setTask(event.target.value)}
          />
          {/* <Button>Create Task</Button> */}
        </Form>
      </div>
      <div className="row" style={{marginTop: '2rem'}}>
        <Card.Group>
          {tasks?.length > 0 ? (
            tasks.map(t => (
              <ToDoCard key={t._id} item={t} />
            ))
          ) : (
            <p>No tasks found.</p>
          )
          }
        </Card.Group>
      </div>
    </>
  )
}

export default ToDoList;

