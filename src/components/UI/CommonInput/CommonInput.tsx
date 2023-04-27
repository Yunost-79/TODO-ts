import { CommonTextField } from './CommonInput.styled';

interface IInput {
  label?: string;
  restProps?: string;
}

const CommonInput = (props: IInput) => {
  const { label, ...restProps } = props;
  return <CommonTextField autoComplete="off" id="outlined-basic" label={label} variant="outlined" {...restProps} />;
};

export default CommonInput;
