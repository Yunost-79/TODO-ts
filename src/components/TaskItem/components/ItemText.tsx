import React from 'react';

interface ItemTextProps {
  onClick: (e: React.MouseEvent<HTMLHeadingElement>) => void;
  isChecked: boolean;
  confirmEditedText: string | undefined;
}

const ItemText: React.FC<ItemTextProps> = ({ onClick, isChecked, confirmEditedText }) => {
  return (
    <div className={`w-full cursor-pointer ${isChecked ? 'line-through text-commonGrey' : ''}`} onClick={onClick}>
      {confirmEditedText ? confirmEditedText : 'test'}
      
    </div>
  );
};

export default ItemText;
