import { EditTextField } from './EditItemInput.styled';

interface IEditInput {
  label?: string;
  restProps?: string;
}

const EditItemInput = (props: IEditInput) => {
  const { label, ...restProps } = props;

  return <EditTextField label={label} variant="standard" focused {...restProps} />;
};

export default EditItemInput;
