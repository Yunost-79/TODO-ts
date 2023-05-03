import { useQuery } from 'react-query';
import { getAllTodo } from '../../../API/requestHelpers';

import { EVariables, IRequestHelpers, TData, TFiltersObject } from '../../../variables/tsVariables';

import TaskItem from '../../TaskItem/TaskItem';

import emptyImage from '../../../image/empty-icon.svg';

interface IMainTask {
  filter: TFiltersObject;
  data?: IRequestHelpers | undefined;
}

const MainTasks: React.FC<IMainTask> = ({ filter }) => {
  const { data } = useQuery('todoData', getAllTodo, { refetchIntervalInBackground: true });
  // const data = queryData.data;

  console.log('data', data);

  const getFilteredTasks = (todoData: TData | undefined, filterValue: string) => {
    if (filterValue === EVariables.active || filterValue === EVariables.completed) {
      return todoData?.tasks?.filter((item: IRequestHelpers) => item.status === filterValue);
    }
    return todoData?.tasks || [];
  };

  // console.log('getFilteredTasks', getFilteredTasks(data, filter.value));

  const getTasks = getFilteredTasks(data, filter.value);

  return (
    <div className="flex flex-col justify-center items-center bg-headerColor w-3/5 px-6 py-10 gap-8 rounded-lg">
      {!data?.tasks.length ? (
        <div className="flex flex-col justify-center items-center my-10">
          <img className="w-24 h-24" src={emptyImage} alt="" />
          <h3 className="mt-3 text-2xl font-normal">Tasks not found</h3>
        </div>
      ) : (
        <>
          {getTasks?.map((task: IRequestHelpers) => {
            return <TaskItem key={task.id} taskData={task} />;
          })}
        </>
      )}
    </div>
  );
};

export default MainTasks;
