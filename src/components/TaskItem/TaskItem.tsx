import React, { useState } from 'react';
import EditItemText from './components/EditItemText';
import ItemText from './components/ItemText';

import { CommonCheckbox } from '../UI/Common/CommonCheckbox.styled';
import { CommonCloseIcon } from '../UI/Common/CommonCloseIcon.styled';
import { CommonCheckMarkIcon } from '../UI/Common/CommonCheckMarkIcon.styled';

const TaskItem = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isEditValue, setIsEditValue] = useState<string>('');
  const [confirmEditedText, setConfirmEditedText] = useState<string>('');

  const handleStartEdit = (e: React.MouseEvent<HTMLHeadingElement>) => {
    e.preventDefault();
    if (e.detail === 2) {
      setIsEdit(true);
    }
  };

  const handleEndEdit = (e: React.MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    setIsEdit(false);
    setIsEditValue('');
    setConfirmEditedText('');
  };

  const handleConfirmEdit = (e: React.MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    setIsEdit(false);
    setConfirmEditedText(isEditValue);
  };

  const handleChecked = () => {
    setIsChecked(!isChecked);
  };

  console.log(isEditValue);

  return (
    <div className="flex justify-center items-center w-full h-2 gap-y-1.5">
      <div className="flex justify-center items-center flex-taskItem-5">
        <CommonCheckbox checked={isChecked} onChange={handleChecked} />
      </div>
      <div className="flex justify-start items-center flex-taskItem-85 w-full">
        {isEdit ? (
          <EditItemText value={isEditValue} onChange={(e) => setIsEditValue(e.target.value)} />
        ) : (
          <ItemText isChecked={isChecked} onClick={handleStartEdit} confirmEditedText={confirmEditedText} />
        )}
      </div>

      <div className="flex justify-center items-center flex-taskItem-5">
        <CommonCheckMarkIcon onClick={handleConfirmEdit} />
      </div>
      <div className="flex justify-center items-center flex-taskItem-5">
        <CommonCloseIcon onClick={handleEndEdit} />
      </div>
    </div>
  );
};

export default TaskItem;
