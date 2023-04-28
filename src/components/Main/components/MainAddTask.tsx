import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { CommonButton } from '../../UI/Common/CommonButton.styled';
import { CommonInput } from '../../UI/Common/CommonInput.styled';

interface IMainAddTask {
  todo: string;
}

const schema = yup.object().shape({
  todo: yup.string().required(),
});

const MainAddTask: React.FC = () => {
  const [todoValue, setTodoValue] = useState<string>('');

  const {
    control,
    
    handleSubmit,
    formState: { errors },
  } = useForm<IMainAddTask>({ resolver: yupResolver(schema) });

  const onSubmitTodo: SubmitHandler<IMainAddTask> = (data) => {
    console.log('todoDataValue submited', data);
    setTodoValue(data.todo);
  };

  console.log('todoValue', todoValue);

  return (
    <form className="flex w-3/5 h-12 gap-2" onSubmit={handleSubmit(onSubmitTodo)}>
      <Controller
        name="todo"
        control={control}
        render={({ field }) => (
          <CommonInput
            {...field}
            autoComplete="off"
            label="Enter tasks..."
            variant="outlined"
            error={!!errors.todo}
            helperText={errors.todo ? errors.todo?.message : ''}
          />
        )}
      />
      <CommonButton variant="contained" type="submit">
        Add task
      </CommonButton>
    </form>
  );
};

export default MainAddTask;
