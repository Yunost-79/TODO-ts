import React from 'react';

interface ItemTextProps {
  onClick: (e: React.MouseEvent<HTMLHeadingElement>) => void;
  isChecked: boolean;
  confirmEditedText: string | undefined;
  todoData: object | undefined | null;

}

const ItemText: React.FC<ItemTextProps> = ({ onClick, isChecked, confirmEditedText, todoData }) => {
  return (
    <div className={`w-full cursor-pointer ${isChecked ? 'line-through text-commonGrey' : ''}`} onClick={onClick}>
      {confirmEditedText ? confirmEditedText : 'test'}
    </div>
  );
};

export default ItemText;
