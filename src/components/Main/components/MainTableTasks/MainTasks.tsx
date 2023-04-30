import { useQuery } from 'react-query';
import { getAllTodo } from '../../../../API/requestHelpers';
import TaskItem from '../../../TaskItem/TaskItem';
import MainEmpty from './components/MainEmpty';

interface IMainTask {
  filter: string;
}

const MainTasks: React.FC<IMainTask> = ({ filter }) => {
  const queryData = useQuery('todoData', getAllTodo, { refetchIntervalInBackground: true });
  const todoData = queryData.data;

  const renderMainByFilter = (filter: string) => {
    // if (filter === 'All') {
    //   return todoData;
    // }
    if (filter === 'Active') {
      const activeTodoData = todoData?.tasks?.filter((item: object) => {
        // console.log('item', item);

        return item.status === 'active';
      });
      console.log('activeTodoData', activeTodoData);

      return activeTodoData;
    }
    console.log('todoData', todoData);

    return todoData?.tasks || [];
  };

  console.log('renderPath', renderMainByFilter(filter));

  const renderPath = renderMainByFilter(filter);

  return (
    <div className="flex flex-col justify-center items-center bg-headerColor w-3/5 px-6 py-10 gap-8 rounded-lg">
      {!todoData?.tasks.length ? (
        <MainEmpty />
      ) : (
        <>
          {renderPath?.map((task: object) => {
            return <TaskItem key={task.id} taskData={task} />;
          })}
          {/* {
            <div className="flex mt-1 cursor-pointer ease-linear duration-200 hover:text-goldenYellow" onClick={deleteAllTodo}>
              Delete all
            </div>
          } */}
        </>
      )}
    </div>
  );
};

export default MainTasks;
