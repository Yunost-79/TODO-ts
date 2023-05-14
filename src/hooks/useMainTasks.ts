import { useMutation, useQueryClient } from 'react-query';
import { changeStatus, deleteAllCompletedTodo } from '../API/requestHelpers';
import { TTasks } from '../types/typesAndInterfaces';
import { EVariables } from '../variables';

export const useMainTasks = () => {
  const queryClient = useQueryClient();

  const handleUpdateAllStatus = useMutation({ mutationFn: changeStatus, onSuccess: () => queryClient.invalidateQueries('todoData') });

  const handleDeleteById = useMutation((arrayOfIds: TTasks[]) => deleteAllCompletedTodo(arrayOfIds), {
    onSuccess: () => queryClient.invalidateQueries('todoData'),
  });

  const getFilteredTasks = (tasks: TTasks[], filterValue?: string) => {
    if (filterValue === EVariables.active || filterValue === EVariables.completed) {
      return tasks?.filter((item: TTasks) => item.status === filterValue);
    }
    return tasks || [];
  };

  const handleDeleteCompleted = (tasks: TTasks[]) => {
    const completedTasks = tasks.map((task: TTasks) => task.id);
    const updated = JSON.stringify(completedTasks);
    handleDeleteById.mutate(updated);
  };

  const handleAllChangeStatus = (tasks: TTasks[], filter: string) => {
    const markingId = tasks.map((item: TTasks) => item.id);
    handleUpdateAllStatus.mutate({ ids: markingId, status: filter });

    handleUpdateAllStatus.mutate({ ids: markingId, status: filter });
  };

  return {
    getFilteredTasks,
    handleDeleteCompleted,
    handleAllChangeStatus,
  };
};
