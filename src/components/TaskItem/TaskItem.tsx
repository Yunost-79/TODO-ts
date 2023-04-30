import React, { useState } from 'react';
import EditItemText from './components/EditItemText';
import ItemText from './components/ItemText';

import { CommonCheckbox } from '../UI/Common/CommonCheckbox.styled';
import { CommonCloseIcon } from '../UI/Common/CommonCloseIcon.styled';
import { CommonCheckMarkIcon } from '../UI/Common/CommonCheckMarkIcon.styled';
import { changeStatus, deleteTodoById, editTodo } from '../../API/requestHelpers';
import { useMutation, useQueryClient } from 'react-query';

interface ITaskItem {
  taskData: any;
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

  // const handleEndEdit = (e: React.MouseEvent<SVGSVGElement>) => {
  //   e.preventDefault();
  //   setIsEdit(false);
  //   setIsEditValue('');
  //   setConfirmEditedText('');
  // };

  const handleConfirmEdit = (e: React.MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    setIsEdit(false);
    if (isEditValue) {
      editTodo(taskData.id, isEditValue);
    }
  };

  const handleChecked = (id: string) => {
    setIsChecked(!isChecked);

    if (!isChecked) {
      changeStatus(taskData.id, 'completed');
    } else {
      changeStatus(taskData.id, 'active');
    }

    // setIsChecked(taskData?.status ? true : !isChecked);
    // console.log(taskData);
    console.log(taskData);
  };

  const mutationDeleteById = useMutation((id: string) => deleteTodoById(id), { onSuccess: () => queryClient.invalidateQueries('todoData') });
  // const mutationEditTodo = useMutation((id, text) => deleteTodoById(t), { onSuccess: () => queryClient.invalidateQueries('todoData') });
  // const mutationChangeStatus = useMutation((id: string, status: string) => changeStatus(id, status), { onSuccess: () => queryClient.invalidateQueries('todoData') });

  return (
    <div className="flex justify-center items-center w-full h-2 gap-y-1.5">
      <div className="flex justify-center items-center flex-taskItem-5">
        <CommonCheckbox checked={isChecked} onChange={() => handleChecked(taskData.id)} />
      </div>
      <div className="flex justify-start items-center flex-taskItem-85 w-full">
        {isEdit ? (
          <EditItemText value={isEditValue} onChange={(e) => setIsEditValue(e.target.value)} />
        ) : (
          <ItemText isChecked={isChecked} onClick={handleStartEdit} confirmEditedText={isEditValue} taskData={taskData} />
        )}
      </div>

      <div className="flex justify-center items-center flex-taskItem-5">
        <CommonCheckMarkIcon onClick={handleConfirmEdit} />
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
