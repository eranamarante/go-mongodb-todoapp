import React from 'react';
import {
  Card,
  Icon
} from "semantic-ui-react"

const ToDoCard = ({item}) => {
  console.log(item);
  return (
    <Card color="yellow" fluid>
      <Card.Content>
        <Card.Header textAlign="left">
          <div style={{ wordWrap: "break-word" }}>{item.task}</div>
        </Card.Header>

        <Card.Meta textAlign="right">
          <Icon
            name="check circle"
            color="green"
          />
          <span style={{ paddingRight: 10 }}>Done</span>
          <Icon
            name="undo"
            color="yellow"
          />
          <span style={{ paddingRight: 10 }}>Undo</span>
          <Icon
            name="delete"
            color="red"
          />
          <span style={{ paddingRight: 10 }}>Delete</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  )
}

export default ToDoCard;
