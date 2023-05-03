import React, { useState } from 'react';

import { useMutation, useQueryClient } from 'react-query';

import { deleteTodoById, changeStatus, updateTodo } from '../../API/requestHelpers';

import EditItemText from './components/EditItemText';
import ItemText from './components/ItemText';

import { CommonCheckbox } from '../UI/Common/CommonCheckbox.styled';
import { CommonCloseIcon } from '../UI/Common/CommonCloseIcon.styled';
import { CommonCheckMarkIcon } from '../UI/Common/CommonCheckMarkIcon.styled';
import { EVariables, IRequestHelpers } from '../../variables/tsVariables';

interface ITaskItem {
  taskData: TData;
}

const TaskItem: React.FC<ITaskItem> = ({ taskData }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>();
  const [isEditValue, setIsEditValue] = useState<string>('');

  const queryClient = useQueryClient();

  const handleStartEdit = (e: React.MouseEvent<HTMLHeadingElement>, text: string) => {
    setIsEditValue(text);
    if (e.detail === 2) {
      setIsEdit(true);
    }
  };

  const handleConfirmEdit = (id: string, edit: string, status: string) => {
    if (isEditValue && !/^ *$/.test(isEditValue)) {
      updateTodo(id, edit, status);
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

  const handleDeleteById = useMutation((id: string) => deleteTodoById(id), { onSuccess: () => queryClient.invalidateQueries('todoData') });


  const handleUpdateStatus = useMutation({ mutationFn: changeStatus, onSuccess: () => queryClient.invalidateQueries('todoData') });

  return (
    <div className="flex justify-center items-center w-full h-2 gap-y-1.5">
      <div className="flex justify-center items-center flex-taskItem-5">
        <CommonCheckbox
          checked={taskData?.status === EVariables.completed}
          onChange={() => handleChecked(taskData.id, EVariables.active, EVariables.completed)}
        />
      </div>
      <div className="flex justify-start items-center flex-taskItem-85 w-full">
        {isEdit ? (
          <EditItemText value={isEditValue} onChange={(e) => setIsEditValue(e.target.value)} />
        ) : (
          <ItemText
            isChecked={taskData?.status === EVariables.completed}
            onClick={(e) => handleStartEdit(e, taskData.text)}
            confirmEditedText={taskData.text}
            taskData={taskData}
          />
        )}
      </div>

      <div className="flex justify-center items-center flex-taskItem-10">
        <CommonCheckMarkIcon className={`${!isEdit && 'invisible'}`} onClick={() => handleConfirmEdit(taskData.id, isEditValue, taskData.status)} />
      </div>
      <div className="flex justify-center items-center flex-taskItem-5">
        <CommonCloseIcon
          onClick={() => {
            handleDeleteById.mutate(taskData.id);
          }}
        />
      </div>
    </div>
  );
};

export default TaskItem;
