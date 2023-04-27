import React from 'react';

interface ItemTextProps {
  onClick: (e: React.MouseEvent<HTMLHeadingElement>) => void;
}

const ItemText: React.FC<ItemTextProps> = ({ onClick }) => {
  return (
    <div className="w-full cursor-pointer" onClick={onClick}>
      ItemText
    </div>
  );
};

export default ItemText;
