import React, { useState } from 'react';

import { Link } from '@mui/material';

import MainAddTask from './components/MainAddTask';
import MainTasks from './components/MainTableTasks/MainTasks';
import MainFilters from '../MainFilters/MainFilters';

interface IMain {
  id: number;
  value: string;
}

const Main: React.FC<IMain> = () => {
  const [filter, setFilter] = useState<object>({ id: 1, label: 'All', value: 'all' });

  return (
    <div className="flex flex-col justify-center items-center mt-8 ">
      <MainAddTask />

      <MainFilters filter={filter} setFilter={setFilter} />

      <MainTasks filter={filter} />
      <div className="mt-14 text-xs text-center text-commonGrey">
        <div>Double-click on todo text to edit a task</div>
        <Link href="https://github.com/Yunost-79">Created by Yunost</Link>
      </div>
    </div>
  );
};

export default Main;
