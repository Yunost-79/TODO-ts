import React from 'react';

import { getAllTodo } from '../../../../../API/requestHelpers';
import TaskItem from '../../../../TaskItem/TaskItem';
import { useQuery } from 'react-query';

const MainItemTable = (setIsEmpty: React.SetStateAction<boolean>) => {
  const queryData = useQuery('todoData', getAllTodo);
  const todoData = queryData.data;
  // console.log('todoData', todoData);

  return (
    <>
      {todoData?.tasks.map((task: object) => {
        // console.log('task', task);

        return <TaskItem taskData={task} />;
      })}
    </>
  );
};

export default MainItemTable;
