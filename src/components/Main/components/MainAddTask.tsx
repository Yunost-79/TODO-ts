import CommonInput from '../../UI/CommonInput/CommonInput';
import CommonButton from '../../UI/CommonButton/CommonButton';

const MainAddTask = () => {
  return (
    <>
      <form className="flex w-3/5 h-12 gap-2">
        <CommonInput label="Enter task..." />
        <CommonButton>Add Task</CommonButton>
      </form>
    </>
  );
}

export default MainAddTask;
