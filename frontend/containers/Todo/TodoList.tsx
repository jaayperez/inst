import React, { Fragment } from "react";
import Todo from "./TodoItem";
import { TodoType } from "./TodoType";

export const TodoList = ({ todos }: { todos: TodoType[] }) => {
  return (
    <Fragment>
      {todos.map((todo: TodoType, index: number) => (
        <Todo todo={todo} index={index} key={todo.id} />
      ))}
    </Fragment>
  );
};

React.memo<any>(TodoList);
