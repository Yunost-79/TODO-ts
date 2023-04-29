import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller, Resolver } from 'react-hook-form';

// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

import { CommonButton } from '../../UI/Common/CommonButton.styled';
import { CommonInput } from '../../UI/Common/CommonInput.styled';
import { postTodo } from '../../../API/requestHelpers';

interface IMainAddTask {
  data: object | undefined;
  todo: string;
}

// const schema = yup.object().shape({
//   todo: yup.string(),
// });

const resolver: Resolver<IMainAddTask> = async (values) => {
  return {
    values: values.todo ? values : {},
    errors:
      !values.todo && values.todo === undefined
        ? {
            todo: {
              type: 'required',
              message: 'This is required field',
            },
          }
        : {},
  };
};

const MainAddTask: React.FC<IMainAddTask> = () => {
  const [todoValue, setTodoValue] = useState<string>('');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IMainAddTask>({ resolver });

  const onSubmitTodo: SubmitHandler<IMainAddTask> = (data) => {
    postTodo(String(data.todo), 'active');
    setTodoValue('');
  };

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
            error={!!errors.todo ? !!errors.todo : false}
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
