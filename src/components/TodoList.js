import React from 'react'
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
    return (
      <TodoListBlock>
          <TodoItem text="Nodejs 공부하기" done={true} />
          <TodoItem text="Github 연동하기" done={true} />
          <TodoItem text="Context API 강의듣기" done={false} />
          <TodoItem text="자료구조 정리하기" done={false} />
      </TodoListBlock>
    )
}

export default TodoList
