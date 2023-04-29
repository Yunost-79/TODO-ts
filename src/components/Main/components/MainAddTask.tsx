import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller, Resolver } from 'react-hook-form';

// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

import { CommonButton } from '../../UI/Common/CommonButton.styled';
import { CommonInput } from '../../UI/Common/CommonInput.styled';
import { postTodo } from '../../../API/requestHelpers';

interface IMainAddTask {
  todo: string;
}

const MainAddTask: React.FC<IMainAddTask> = () => {
  const [todoValue, setTodoValue] = useState<string>('');
  const [errorValue, setErrorValue] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    // formState: { errors },
  } = useForm<IMainAddTask>({});

  const onSubmitTodo: SubmitHandler<IMainAddTask> = () => {
    if (!todoValue) {
      setErrorValue(true);
      return;
    }
    setErrorValue(false);

    postTodo(String(todoValue), 'active');
    setTodoValue('');
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
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
            error={errorValue}
            helperText={errorValue ? 'Required field' : ''}
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
