import React from 'react';

interface ItemTextProps {
  onClick: (e: React.MouseEvent<HTMLHeadingElement>) => void;
  isChecked: boolean;
  confirmEditedText: string | undefined;
  taskData: object ;
}

const ItemText: React.FC<ItemTextProps> = ({ onClick, isChecked, confirmEditedText, taskData }) => {
  return (
    <div className={`w-full cursor-pointer ${isChecked ? 'line-through text-commonGrey' : ''}`} onClick={onClick}>
      {taskData.text}
    </div>
  );
};

export default ItemText;
