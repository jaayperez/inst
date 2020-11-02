import React, { useContext, useState, Fragment } from 'react';
import { AiFillCloseSquare, AiOutlineEdit } from 'react-icons/ai';
import { Draggable } from 'react-beautiful-dnd';
import { Input } from 'baseui/input';
import { Button } from 'baseui/button';
import { Checkbox } from 'baseui/checkbox';
import { Grab } from 'baseui/icon';
import { Block } from 'baseui/block';
import { TodoType } from './TodoType';
import { TodoContext } from './TodoContext';
import {
  TodoItemWrapper,
  TodoItem,
  EditButton,
  RemoveButton,
} from './Todo.styled';

/**
 * Update Todo Component
 */
function UpdateTodo({
  todoItem,
  updateTodo,
  setShowInput,
}: {
  todoItem: TodoType;
  updateTodo: Function;
  setShowInput: any;
}) {
  const [value, setValue] = React.useState(todoItem.content);
  const updateTodoItem = () => {
    const updatedTodo = {
      ...todoItem,
      content: value,
    };
    updateTodo(updatedTodo);
    setShowInput(false);
  };
  return (
    <Block
      overrides={{
        Block: { style: { display: 'flex', alignItems: 'center' } },
      }}
    >
      <Input
        autoFocus={true}
        value={value}
        onChange={event => setValue(event.currentTarget.value)}
        placeholder="Enter Your Todo"
        overrides={{ Root: { style: { minHeight: '54px' } } }}
      />
      <Button
        overrides={{
          BaseButton: {
            style: ({ $theme }) => {
              return {
                ...$theme.typography.font250,
                minWidth: '80px',
                minHeight: '54px',
                '@media only screen and (min-width: 481px)': {
                  minWidth: '130px',
                },
              };
            },
          },
        }}
        onClick={() => updateTodoItem()}
      >
        Update
      </Button>
    </Block>
  );
}

function Todo({ todo, index }: { todo: TodoType; index: number }) {
  const { updateTodo, removeTodo } = useContext(TodoContext);
  const [showInput, setShowInput] = useState(false);
  const checked = todo.status === 'done' ? true : false;
  const updateTodoStatus = (status: boolean) => {
    const todoStatus = {
      ...todo,
      status: status === true ? 'done' : 'pending',
    };
    updateTodo(todoStatus);
  };
  return (
    <Fragment>
      {!showInput ? (
        <Draggable draggableId={todo.id} index={index}>
          {provided => (
            <TodoItem
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <TodoItemWrapper>
                <Block
                  overrides={{
                    Block: { style: { display: 'flex', alignItems: 'center' } },
                  }}
                >
                  <Grab size={24} color="#545454" />
                  <Checkbox
                    checked={checked}
                    onChange={() => updateTodoStatus(!checked)}
                    overrides={{
                      Root: {
                        style: {
                          paddingLeft: '10px',
                          paddingRight: '10px',
                          '@media only screen and (max-width: 480px)': {
                            alignItems: 'center',
                          },
                        },
                      },
                    }}
                  >
                    {todo.content}
                  </Checkbox>
                </Block>
                <Block
                  overrides={{
                    Block: { style: { display: 'flex', alignItems: 'center' } },
                  }}
                >
                  <EditButton
                    onClick={e => {
                      e.preventDefault();
                      setShowInput(!showInput);
                    }}
                  >
                    <AiOutlineEdit size={'24px'} />
                  </EditButton>
                  <RemoveButton
                    onClick={e => {
                      e.preventDefault();
                      removeTodo(todo.id);
                    }}
                  >
                    <AiFillCloseSquare size={'24px'} />
                  </RemoveButton>
                </Block>
              </TodoItemWrapper>
            </TodoItem>
          )}
        </Draggable>
      ) : (
        <UpdateTodo
          todoItem={todo}
          updateTodo={updateTodo}
          setShowInput={setShowInput}
        />
      )}
    </Fragment>
  );
}

export default Todo;
