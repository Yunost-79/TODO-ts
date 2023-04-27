import { CommonBtn } from './CommonButton.styled';

interface IButton {
  children?: string;
  restProps?: string;
}

const CommonButton = (props: IButton) => {
  const { children, ...restPropd } = props;
  return (
    <CommonBtn variant="contained" {...restPropd}>
      {children}
    </CommonBtn>
  );
};

export default CommonButton;
