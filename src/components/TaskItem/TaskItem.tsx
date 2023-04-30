import React, { useEffect, useState } from 'react';

import { useMutation, useQueryClient } from 'react-query';

import { deleteTodoById, editTodo, changeStatus } from '../../API/requestHelpers';

import EditItemText from './components/EditItemText';
import ItemText from './components/ItemText';

import { CommonCheckbox } from '../UI/Common/CommonCheckbox.styled';
import { CommonCloseIcon } from '../UI/Common/CommonCloseIcon.styled';
import { CommonCheckMarkIcon } from '../UI/Common/CommonCheckMarkIcon.styled';

interface ITaskItem {
  taskData: object;
}

const TaskItem: React.FC<ITaskItem> = ({ taskData }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isEditValue, setIsEditValue] = useState<string>('');

  const queryClient = useQueryClient();

  const handleStartEdit = (e: React.MouseEvent<HTMLHeadingElement>) => {
    e.preventDefault();
    if (e.detail === 2) {
      setIsEdit(true);
    }
  };

  const handleConfirmEdit = (id: string, edit: string, status: string) => {
    setIsEdit(false);
    if (isEditValue) {
      editTodo(id, edit, status);
    }
  };

  const handleChecked = (id: string, statusActive: string, statusCompleted: string) => {
    if (!isChecked) {
      mutationStatus.mutate({ ids: id, status: statusCompleted });
      setIsChecked(true);
      return;
    }
    if (isChecked) {
      mutationStatus.mutate({ ids: id, status: statusActive });
      setIsChecked(false);
    }
  };

  const mutationDeleteById = useMutation((id: string) => deleteTodoById(id), { onSuccess: () => queryClient.invalidateQueries('todoData') });

  const mutationStatus = useMutation({ mutationFn: changeStatus, onSuccess: () => queryClient.invalidateQueries('todoData') });

  return (
    <div className="flex justify-center items-center w-full h-2 gap-y-1.5">
      {/* ========== problem bug need double click ========== */}
      <div className="flex justify-center items-center flex-taskItem-5">
        <CommonCheckbox checked={taskData?.status === 'completed' && isChecked} onChange={() => handleChecked(taskData.id, 'active', 'completed')} />
      </div>
      <div className="flex justify-start items-center flex-taskItem-85 w-full">
        {isEdit ? (
          <EditItemText value={isEditValue} onChange={(e) => setIsEditValue(e.target.value)} />
        ) : (
          <ItemText
            isChecked={taskData?.status === 'completed' && isChecked}
            onClick={handleStartEdit}
            confirmEditedText={isEditValue}
            taskData={taskData}
          />
        )}
      </div>

      <div className="flex justify-center items-center flex-taskItem-10">
        <CommonCheckMarkIcon onClick={() => handleConfirmEdit(taskData.id, isEditValue, taskData.status)} />
      </div>
      <div className="flex justify-center items-center flex-taskItem-5">
        <CommonCloseIcon
          onClick={() => {
            mutationDeleteById.mutate(taskData.id);
          }}
        />
      </div>
    </div>
  );
};

export default TaskItem;
