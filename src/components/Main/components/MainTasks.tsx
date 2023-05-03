import { useMutation, useQuery, useQueryClient } from 'react-query';
import { changeStatus, deleteAllCompletedTodo, getAllTodo } from '../../../API/requestHelpers';

import { EVariables, IRequestHelpers, TData, TFiltersObject } from '../../../variables/tsVariables';

import TaskItem from '../../TaskItem/TaskItem';

import emptyImage from '../../../image/empty-icon.svg';

interface IMainTask {
  filter: TFiltersObject;
  data?: IRequestHelpers | undefined;
}

const MainTasks: React.FC<IMainTask> = ({ filter }) => {
  const { data } = useQuery('todoData', getAllTodo, { refetchIntervalInBackground: true });

  const queryClient = useQueryClient();

  const handleUpdateAllStatus = useMutation({ mutationFn: changeStatus, onSuccess: () => queryClient.invalidateQueries('todoData') });

  const handleDeleteById = useMutation((arrayOfIds: string) => deleteAllCompletedTodo(arrayOfIds), {
    onSuccess: () => queryClient.invalidateQueries('todoData'),
  });


  const getFilteredTasks = (todoData: TData | undefined, filterValue: string) => {
    if (filterValue === EVariables.active || filterValue === EVariables.completed) {
      return todoData?.tasks?.filter((item: IRequestHelpers) => item.status === filterValue);
    }
    return todoData?.tasks || [];
  };

  const getTasks = getFilteredTasks(data, filter.value);

  // console.log('getTasks', getTasks);

  const handleDeleteCompleted = () => {
    const completedTasks = getTasks.map((task: TData) => task.id);
    const updated = JSON.stringify(completedTasks);

    handleDeleteById.mutate(updated);
  };

  const handleAllChangeStatus = (filter: string) => {
    const markingId = getTasks.map((item: { id: string }) => item.id);

    handleUpdateAllStatus.mutate({ ids: markingId, status: filter });
  };

  return (
    <div className="flex flex-col justify-center items-center bg-headerColor w-3/5 px-6 py-10 gap-8 rounded-lg">
      {!getTasks.length ? (
        <div className="flex flex-col justify-center items-center my-10">
          <img className="w-24 h-24" src={emptyImage} alt="" />
          <h3 className="mt-3 text-2xl font-normal">Tasks not found</h3>
        </div>
      ) : (
        <>
          {filter.value === EVariables.active && (
            <span
              className="flex justify-start w-full pl-3 text-s font-medium cursor-pointer ease-linear duration-200 hover:text-goldenYellow"
              onClick={() => handleAllChangeStatus(EVariables.completed)}
            >
              Mark all
            </span>
          )}

          {filter.value === EVariables.completed && (
            <span
              className="flex justify-start w-full pl-3 text-s font-medium cursor-pointer ease-linear duration-200 hover:text-goldenYellow"
              onClick={() => handleAllChangeStatus(EVariables.active)}
            >
              Unmark all
            </span>
          )}

          {getTasks?.map((task: IRequestHelpers) => {
            return <TaskItem key={task.id} taskData={task} />;
          })}

          {filter.value === EVariables.completed && <div className="flex justify-center w-full pl-3 text-s font-medium cursor-pointer ease-linear duration-200 hover:text-goldenYellow" onClick={handleDeleteCompleted}>Delete All Completed</div>}
        </>
      )}
    </div>
  );
};

export default MainTasks;
