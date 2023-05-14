import { TData, TTasks } from '../types/typesAndInterfaces';
import { EVariables } from '../variables';
import { instance } from './axiosInstance';

export const getAllTodo = async () => {
  try {
    const { data } = await instance.get<TData>('/tasks');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postTodo = async (text: string, status: EVariables) => {
  try {
    await instance.post('/create-task', { text, status });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodoById = async (id: string) => {
  try {
    await instance.delete(`/task/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const deleteAllCompletedTodo = async (arrayOfIds: string) => {
  try {
    await instance.delete(`/tasks/${arrayOfIds}`);
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async ({ id, text, status }: TTasks) => {
  try {
    const { data } = await instance.put('/task/update', { id, text, status });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const changeStatus = async ({ ids, status }: { ids: string[]; status: EVariables }) => {
  try {
    await instance.put('/task/change-status', { ids, status });
  } catch (error) {
    console.log(error);
  }
};
