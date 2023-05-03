import { IRequestHelpers } from '../variables/tsVariables';
import { instance } from './axiosInstance';

export const getAllTodo = async () => {
  try {
    const { data } = await instance.get<IRequestHelpers>('/tasks');

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

export const deleteAllCompletedTodo = async (arrayOfIds: string) => {
  try {
    const { data } = await instance.delete<IRequestHelpers>(`/tasks/${arrayOfIds}`);
    
    return data;
  } catch (error) {
    console.log(error);
  }
};

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
    const { data } = await instance.put<IRequestHelpers>('/task/change-status', { ids, status });
    
    return data;
  } catch (error) {
    console.log(error);
  }
};
