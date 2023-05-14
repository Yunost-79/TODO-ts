import React from 'react';

import ItemText from './ItemText/ItemText';

import { CommonCheckbox } from '../UI/Common/CommonCheckbox.styled';
import { CommonCloseIcon } from '../UI/Common/CommonCloseIcon.styled';
import { CommonCheckMarkIcon } from '../UI/Common/CommonCheckMarkIcon.styled';
import { EVariables } from '../../variables';
import { useTaskItem } from '../../hooks/useTaskItem';
import { TTasks } from '../../types/typesAndInterfaces';
import { EditInputText } from '../UI/EditItemInput/EditInputText.styled';

interface ITaskItem {
  taskData: TTasks;
}

const TaskItem: React.FC<ITaskItem> = ({ taskData }) => {
  const { isEdit, editValue, setEditValue, handleDeleteById, handleStartEdit, handleConfirmEdit, handleChecked } = useTaskItem();

  return (
    <div className="flex justify-center items-center w-full h-2 gap-y-1.5">
      <div className="flex justify-center items-center flex-taskItem-5">
        <CommonCheckbox
          checked={taskData?.status === EVariables.completed}
          onChange={() => handleChecked([taskData.id], EVariables.active, EVariables.completed)}
        />
      </div>
      <div className="flex justify-start items-center flex-taskItem-85 w-full">
        {isEdit ? (
          <EditInputText
            variant="standard"
            focused
            label="Edit task"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onBlur={() => handleConfirmEdit(taskData.id, editValue, taskData.status)}
          />
        ) : (
          <ItemText
            isChecked={taskData?.status === EVariables.completed}
            onDoubleClick={() => handleStartEdit(taskData.text)}
            confirmEditedText={taskData.text}
            taskData={taskData}
          />
        )}
      </div>

      <div className="flex justify-center items-center flex-taskItem-10">
        <CommonCheckMarkIcon className={`${!isEdit && 'invisible'}`} onClick={() => handleConfirmEdit(taskData.id, editValue, taskData.status)} />
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
