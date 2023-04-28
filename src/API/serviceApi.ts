// import axios from 'axios';

// const API_URL = 'https://api-nodejs-todolist.herokuapp.com/task';

// // export const myHeaders = new Headers();
// // myHeaders.append(
// //   'Authorization',
// //   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjY2JlYzZiNTVkYTAwMTc1OTcyMmMiLCJpYXQiOjE1NzQ3NTE2ODh9.GPbsl9FLX4VrsGVErodiXypjuz1us4tfD0jwg2_UrzY'
// // );
// // myHeaders.append('Content-Type', 'application/json');

// const headersConfig = {
//   headers: {
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGRjY2JlYzZiNTVkYTAwMTc1OTcyMmMiLCJpYXQiOjE1NzQ3NTE2ODh9.GPbsl9FLX4VrsGVErodiXypjuz1us4tfD0jwg2_UrzY',
//     'Content-Type': 'application/json',
//   },
// };

// // export const postApiTodo = async (body: string) => {
// //   const { data } = await axios.post(API_URL, {
// //     headers: {
// //       method: 'POST',
// //       headers: myHeaders,
// //       body: body,
// //       redirect: 'follow',
// //     },
// //   });
// //   return data;
// // };

// // export const getAllApiTodo = async () => {
// //   const { data } = await axios.get(API_URL, {
// //     method: 'GET',
// //     headers: myHeaders,
// //     redirect: 'follow',
// //   });
// // };

// export const getAllTodos = async () => {
//   try {
//     const data = await axios.get(API_URL, headersConfig);
//     return data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       throw error;
//     } else {
//       throw new Error('Different error than axios');
//     }
//   }
// };
