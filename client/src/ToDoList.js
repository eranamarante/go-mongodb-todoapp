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
      })
      .catch(err => console.error(err))
  }

  const completeTask = (id) => {
    axios.put(`${endpoint}/api/task/${id}`, null, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then( _ => {
        getTasks();
      })
      .catch(err => console.error(err))
  }

  const undoTask = (id) => {
    axios.put(`${endpoint}/api/undoTask/${id}`, null, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then( _ => {
        getTasks();
      })
      .catch(err => console.error(err))
  }

  const deleteTask = (id) => {
    axios.delete(`${endpoint}/api/deleteTask/${id}`, null, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then( _ => {
        getTasks();
      })
      .catch(err => console.error(err))
  }

  const onSubmit = () => {
    if (!task) {
      alert("enter task");
      return
    } 

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

  const onChange = (event) => {
    setTask(event.target.value)
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
            value={task}
            onChange={onChange}
          />
        </Form>
      </div>
      <div className="row" style={{marginTop: '2rem'}}>
        <Card.Group>
          {tasks?.length > 0 ? (
            tasks.map(t => (
              <ToDoCard 
                key={t._id}
                item={t}
                completeTask={completeTask}
                undoTask={undoTask}
                deleteTask={deleteTask}
              />
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

