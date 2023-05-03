import { EditItemInput } from '../../UI/EditItemInput/EditItemInput.styled';

interface IEditItemText {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
}

const EditItemText: React.FC<IEditItemText> = ({ value, onChange }) => {
  return (
    <>
      <EditItemInput variant="standard" focused label="Edit task" value={value} onChange={onChange} />
      
    </>
  );
};

export default EditItemText;
