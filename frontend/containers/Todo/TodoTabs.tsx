import React, { useState } from 'react';
import TodoApp from './TodoApp';
import TodoProvider from './TodoContext';
import { Button } from 'baseui/button';
import { Block } from 'baseui/block';

export default function TodoTab() {
  const [status, setStatus] = useState<string>('all');

  return (
    <TodoProvider>
      <Button
        onClick={() => setStatus('all')}
        kind={status === 'all' ? 'primary' : 'secondary'}
        overrides={{
          BaseButton: {
            style: ({ $theme }) => {
              return {
                ...$theme.typography.font350,
              };
            },
          },
        }}
      >
        All
      </Button>
      <Button
        onClick={() => setStatus('done')}
        kind={status === 'done' ? 'primary' : 'secondary'}
        overrides={{
          BaseButton: {
            style: ({ $theme }) => {
              return {
                ...$theme.typography.font350,
              };
            },
          },
        }}
      >
        Done
      </Button>
      <Button
        onClick={() => setStatus('pending')}
        kind={status === 'pending' ? 'primary' : 'secondary'}
        overrides={{
          BaseButton: {
            style: ({ $theme }) => {
              return {
                ...$theme.typography.font350,
              };
            },
          },
        }}
      >
        Pending
      </Button>

      <Block paddingTop="10px">
        <TodoApp status={status} />
      </Block>
    </TodoProvider>
  );
}
