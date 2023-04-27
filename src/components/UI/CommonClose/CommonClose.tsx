import React from 'react';

import { CommonCloseIcon } from './CommonClose.styled';

interface CommonCloseProps {
  onClick: (e: React.MouseEvent<HTMLHeadingElement>) => void;
}

const CommonClose: React.FC<CommonCloseProps> = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <CommonCloseIcon />
    </div>
  );
};

export default CommonClose;
