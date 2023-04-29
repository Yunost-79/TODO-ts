import React from 'react';

import { getAllTodo } from '../../../../../API/requestHelpers';
import TaskItem from '../../../../TaskItem/TaskItem';
import { useQuery } from 'react-query';

const MainItemTable: React.FC = () => {
  const queryData = useQuery('todoData', getAllTodo);
  const todoData = queryData.data;
  console.log('todoData', todoData);

  return (
    <>
      <TaskItem todoData={todoData} />
    </>
  );
};

export default MainItemTable;
