import { useState } from 'react';

import { useForm, Controller } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';

import { CommonButton } from '../UI/Common/CommonButton.styled';
import { CommonInput } from '../UI/Common/CommonInput.styled';
import { postTodo } from '../../API/requestHelpers';
import { EVariables } from '../../variables';

const MainAddTask = () => {
  const [todoValue, setTodoValue] = useState<string>('');
  const [errorValue, setErrorValue] = useState<boolean>(false);

  const queryClient = useQueryClient();

  const mutation = useMutation((newTodo: string) => postTodo(newTodo, EVariables.active), {
    onSuccess: () => queryClient.invalidateQueries('todoData'),
  });

  const {
    control,
    handleSubmit,
    // formState: { errors },
  } = useForm({});

  const onSubmitTodo = () => {
    if (!todoValue) {
      setErrorValue(true);
      return;
    }

    if (!/^ *$/.test(todoValue)) {
      mutation.mutate(todoValue);
      setErrorValue(false);
    }
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
            error={errorValue}
            helperText={errorValue && 'Required field'}
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
