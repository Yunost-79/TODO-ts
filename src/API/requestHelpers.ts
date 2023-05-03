import { IRequestHelpers } from '../variables/tsVariables';
import { instance } from './axiosInstance';

export const getAllTodo = async () => {
  try {
    const { data } = await instance.get<IRequestHelpers>('/tasks');
    console.log('data', data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postTodo = async (text: string, status: string) => {
  try {
    const { data } = await instance.post<IRequestHelpers>('/create-task', { text, status });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodoById = async (id: string) => {
  try {
    const { data } = await instance.delete<IRequestHelpers>(`/task/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const deleteCompletedTodoById = async () => {
//   try {
//     const { data } = await instance.delete<IRequestHelpers>('/tasks/:ids');
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const updateTodo = async (id: string, text: string, status: string) => {
  try {
    const { data } = await instance.put<IRequestHelpers>('/task/update', { id, text, status });

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const changeStatus = async ({ ids, status }: IRequestHelpers) => {
  try {
    console.log('changeStatus data', ids, status);
    const { data } = await instance.put<IRequestHelpers>('/task/change-status', { ids, status });
    return data;
  } catch (error) {
    console.log(error);
  }
};
