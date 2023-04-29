import { useState } from 'react';

import { Link } from '@mui/material';
import MainAddTask from './components/MainAddTask';
import MainTasks from './components/MainTableTasks/MainTasks';
import MainFiters from '../MainFiters/MainFiters';

const Main = () => {
  const [filter, setFilter] = useState<string>('All');

  console.log(filter);
  
  return (
    <div className="flex flex-col justify-center items-center mt-8 ">
      <MainAddTask todo={''} />

      <MainFiters filter={filter} setFilter={setFilter} />

      <MainTasks filter={filter} />
      <div className="mt-14 text-xs text-center text-commonGrey">
        <div>Double-click to edit a task</div>
        <Link href="https://github.com/Yunost-79">Created by Yunost</Link>
      </div>
    </div>
  );
};

export default Main;
