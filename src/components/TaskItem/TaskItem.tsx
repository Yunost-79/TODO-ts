import React, { useState } from 'react';
import EditItemText from './components/EditItemText';
import ItemText from './components/ItemText';

import { CommonCheckbox } from '../UI/Common/CommonCheckbox.styled';
import { CommonCloseIcon } from '../UI/Common/CommonCloseIcon.styled';

const TaskItem = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleStartEdit = (e: React.MouseEvent<HTMLHeadingElement>): void => {
    e.preventDefault();
    if (e.detail === 2) {
      setIsEdit(true);
    }
  };

  const handleEndEdit = (e: React.MouseEvent<SVGSVGElement>): void => {
    e.preventDefault();
    setIsEdit(false);
  };

  return (
    <div className="flex justify-center items-center w-full h-2 gap-y-1.5">
      <div className="flex justify-center items-center flex-taskItem-5">
        <CommonCheckbox />
      </div>
      <div className="flex justify-start items-center flex-taskItem-85 w-full">
        {isEdit ? <EditItemText /> : <ItemText onClick={handleStartEdit} />}
      </div>
      <div className="flex justify-center items-center flex-taskItem-10">
        <CommonCloseIcon onClick={handleEndEdit} />
      </div>
    </div>
  );
};

export default TaskItem;
