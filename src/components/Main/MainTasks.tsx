import { useQuery } from 'react-query';
import { getAllTodo } from '../../API/requestHelpers';
import { useMainTasks } from '../../hooks/useMainTasks';

import { EVariables } from '../../variables';

import { IRequestHelpers, TFiltersObject, TTasks } from '../../types/typesAndInterfaces';

import TaskItem from '../TaskItem/TaskItem';

import emptyImage from '../../image/empty-icon.svg';

interface IMainTask {
  filter: TFiltersObject;
  data?: IRequestHelpers;
}

const MainTasks: React.FC<IMainTask> = ({ filter }) => {
  const { data } = useQuery('todoData', getAllTodo, { refetchIntervalInBackground: true });

  const { getFilteredTasks, handleDeleteCompleted, handleAllChangeStatus } = useMainTasks();

  const allTasks = getFilteredTasks(data?.tasks, filter.value);

  return (
    <div className="flex flex-col justify-center items-center bg-headerColor w-3/5 px-6 py-10 gap-8 rounded-lg">
      {!allTasks.length ? (
        <div className="flex flex-col justify-center items-center my-10">
          <img className="w-24 h-24" src={emptyImage} alt="" />
          <h3 className="mt-3 text-2xl font-normal">Tasks not found</h3>
        </div>
      ) : (
        <>
          {filter.value !== EVariables.all && (
            <span
              className="flex justify-start w-full pl-3 text-s font-medium cursor-pointer ease-linear duration-200 hover:text-goldenYellow"
              onClick={() => handleAllChangeStatus(allTasks, filter.value === EVariables.active ? EVariables.completed : EVariables.active)}
            >
              {filter.value === EVariables.active ? 'Mark all' : 'Unmark all'}
            </span>
          )}

          {allTasks?.map((task: TTasks) => {
            return <TaskItem key={task.id} taskData={task} />;
          })}

          {filter.value === EVariables.completed && (
            <div
              className="flex justify-center w-full pl-3 text-s font-medium cursor-pointer ease-linear duration-200 hover:text-goldenYellow"
              onClick={() => handleDeleteCompleted(allTasks)}
            >
              Delete All Completed
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MainTasks;
