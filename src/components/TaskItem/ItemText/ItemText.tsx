import React from 'react';
import { TTasks } from '../../../types/typesAndInterfaces';

interface ItemTextProps {
  onClick: (e: React.MouseEvent<HTMLHeadingElement>) => void;
  isChecked: boolean;
  confirmEditedText: string | undefined;
  taskData: TTasks;
}

const ItemText: React.FC<ItemTextProps> = ({ onClick, isChecked, taskData }) => {
  return (
    <div className={`w-full cursor-pointer ${isChecked ? 'line-through text-commonGrey' : ''}`} onClick={onClick}>
      {taskData.text}
    </div>
  );
};

export default ItemText;
