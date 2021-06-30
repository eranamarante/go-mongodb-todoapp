import React from 'react';
import {
  Card,
  Icon
} from "semantic-ui-react"

const ToDoCard = ({item, completeTask, undoTask, deleteTask}) => {
  return (
    <Card color={item.status ? "green" : "yellow"} fluid>
      <Card.Content>
        <Card.Header textAlign="left">
          <div style={{ wordWrap: "break-word" }}>{item.task}</div>
        </Card.Header>

        <Card.Meta textAlign="right">
          <Icon
            name="check circle"
            color="green"
          />
          <span 
            onClick={() => completeTask(item._id)}
            style={{ paddingRight: 10, cursor: 'pointer' }}>
              Done
          </span>
          <Icon
            name="undo"
            color="yellow"
          />
          <span 
            onClick={() => undoTask(item._id)}
            style={{ paddingRight: 10, cursor: 'pointer' }}>
              Undo
          </span>
          <Icon
            name="delete"
            color="red"
          />
          <span 
            onClick={() => deleteTask(item._id)}
            style={{ paddingRight: 10, cursor: 'pointer' }}>
              Delete
          </span>
        </Card.Meta>
      </Card.Content>
    </Card>
  )
}

export default ToDoCard;
