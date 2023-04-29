import { useQuery } from 'react-query';
import { getAllTodo } from '../../../../API/requestHelpers';
import TaskItem from '../../../TaskItem/TaskItem';
import MainEmpty from './MainEmpty';

const MainTasks = () => {
  const queryData = useQuery('todoData', getAllTodo, { enabled: true, refetchIntervalInBackground: true });
  const todoData = queryData.data;

  return (
    <div className="flex flex-col justify-center items-center bg-headerColor w-3/5 px-6 py-10 gap-8 rounded-lg">
      {!todoData?.tasks.length ? (
        <MainEmpty />
      ) : (
        <>
          {todoData?.tasks.map((task: any) => {
            // console.log('task', task);

            return <TaskItem key={task.id} taskData={task} />;
          })}
        </>
      )}
    </div>
  );
};

export default MainTasks;
