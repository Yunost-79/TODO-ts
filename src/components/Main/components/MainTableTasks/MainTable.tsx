
import { getAllTodo } from '../../../../API/requestHelpers';
import TaskItem from '../../../TaskItem/TaskItem';
import { useQuery } from 'react-query';

const MainItemTable = () => {
  const queryData = useQuery('todoData', getAllTodo);
  const todoData = queryData.data;

  return (
    <>
      {todoData?.tasks.map((task: object) => {

        return <TaskItem taskData={task} />;
      })}
    </>
  );
};

export default MainItemTable;
