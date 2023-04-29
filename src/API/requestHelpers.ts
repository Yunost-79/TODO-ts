import { instance } from './axiosInstance';

export const getAllTodo = async () => {
  try {
    const { data } = await instance.get('/tasks');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postTodo = async (text: string, status: string) => {
  try {
    const { data } = await instance.post('/create-task', { text, status });
    return data;
  } catch (error) {
    console.log(error);
  }
};
