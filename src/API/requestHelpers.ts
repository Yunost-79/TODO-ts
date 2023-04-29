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

export const deleteTodoById = async (id: string) => {
  try {
    const { data } = await instance.delete(`/task/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const deleteAllTodo = async () => {
//   try {
//     const { data } = await instance.delete('/tasks/:ids');
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const editTodo = async (id: string, text: string) => {
  try {
    const { data } = await instance.put('/task/update', { id, text });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const changeStatus = async (id: string, status: string) => {
  try {
    const { data } = await instance.put('/task/change-status', { id, status });
    return data;
  } catch (error) {
    console.log(error);
  }
};
