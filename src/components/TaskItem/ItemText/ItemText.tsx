import React from 'react';
import { TTasks } from '../../../types/typesAndInterfaces';

interface ItemTextProps {
  onDoubleClick: (e: React.MouseEvent<HTMLHeadingElement>) => void;
  isChecked: boolean;
  confirmEditedText: string | undefined;
  taskData: TTasks;
}

const ItemText: React.FC<ItemTextProps> = ({ onDoubleClick, isChecked, taskData }) => {
  return (
    <div className={`w-full cursor-pointer ${isChecked ? 'line-through text-commonGrey' : ''}`} onDoubleClick={onDoubleClick}>
      {taskData.text}
    </div>
  );
};

export default ItemText;
