import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { changeStatus, deleteTodoById, updateTodo } from '../API/requestHelpers';

export const useTaskItem = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>();
  const [editValue, setEditValue] = useState<string>('');

  const queryClient = useQueryClient();

  const handleDeleteById = useMutation((id: string) => deleteTodoById(id), { onSuccess: () => queryClient.invalidateQueries('todoData') });

  const handleUpdateStatus = useMutation({ mutationFn: changeStatus, onSuccess: () => queryClient.invalidateQueries('todoData') });

  const handleUpdateTask = useMutation({ mutationFn: updateTodo, onSuccess: () => queryClient.invalidateQueries('todoData') });

  const handleStartEdit = (text: string) => {
    setEditValue(text);

    setIsEdit(true);
  };

  const handleConfirmEdit = (id: string, edit: string, status: string) => {
    if (editValue && !/^ *$/.test(editValue)) {
      handleUpdateTask.mutate({ id, text: edit, status });

      setIsEdit(false);
    } else {
      handleDeleteById.mutate(id);
    }
  };

  const handleChecked = (ids: string, statusActive: string, statusCompleted: string) => {
    setIsChecked(false);
    if (!isChecked) {
      handleUpdateStatus.mutate({
        ids,
        status: statusCompleted,
      });
      setIsChecked(true);
      return;
    }

    handleUpdateStatus.mutate({
      ids,
      status: statusActive,
    });
  };

  return {
    isEdit,
    editValue,
    setEditValue,
    handleDeleteById,
    handleStartEdit,
    handleConfirmEdit,
    handleChecked,
  };
};
