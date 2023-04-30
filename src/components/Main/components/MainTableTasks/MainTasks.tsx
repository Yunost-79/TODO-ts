import { useQuery } from 'react-query';
import { getAllTodo } from '../../../../API/requestHelpers';
import TaskItem from '../../../TaskItem/TaskItem';
import MainEmpty from './components/MainEmpty';

interface IMainTask {
  filter: object;
  value: string;
}

const MainTasks: React.FC<IMainTask> = ({ filter }) => {
  const queryData = useQuery('todoData', getAllTodo, { refetchIntervalInBackground: true });
  const todoData = queryData.data;

  const renderMainByFilter = (filterValue: string) => {
    if (filterValue === 'active') {
      const activeTodoData = todoData?.tasks?.filter((item: object) => item.status === 'active');

      return activeTodoData;
    }
    if (filterValue === 'completed') {
      const complitedTodoData = todoData?.tasks?.filter((item: object) => item.status === 'completed');

      return complitedTodoData;
    }

    return todoData?.tasks;
  };

  console.log('renderPath', renderMainByFilter(filter.value));

  const renderPath = renderMainByFilter(filter.value);

  return (
    <div className="flex flex-col justify-center items-center bg-headerColor w-3/5 px-6 py-10 gap-8 rounded-lg">
      {!todoData?.tasks.length ? (
        <MainEmpty />
      ) : (
        <>
          {renderPath?.map((task: object) => {
            return <TaskItem key={task.id} taskData={task} />;
          })}
        </>
      )}
    </div>
  );
};

export default MainTasks;
