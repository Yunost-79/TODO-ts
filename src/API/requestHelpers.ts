import { TTasks } from '../types/typesAndInterfaces';
import { IRequestHelpers } from '../types/typesAndInterfaces';
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
    await instance.post<IRequestHelpers>('/create-task', { text, status });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodoById = async (id: string) => {
  try {
    await instance.delete<IRequestHelpers>(`/task/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const deleteAllCompletedTodo = async (arrayOfIds: string) => {
  try {
    await instance.delete<IRequestHelpers>(`/tasks/${arrayOfIds}`);
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async ({ id, text, status }: TTasks) => {
  try {
    const { data } = await instance.put<IRequestHelpers>('/task/update', { id, text, status });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const changeStatus = async ({ ids, status }: IRequestHelpers) => {
  try {
    await instance.put<IRequestHelpers>('/task/change-status', { ids, status });
  } catch (error) {
    console.log(error);
  }
};
