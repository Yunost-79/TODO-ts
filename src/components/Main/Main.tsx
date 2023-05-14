import React, { useState } from 'react';

import { Link } from '@mui/material';

import MainAddTask from './MainAddTask';
import MainTasks from './MainTasks';
import MainFilters from '../MainFilters/MainFilters';
import { TFiltersObject } from '../../types/typesAndInterfaces';
import { filtersItems } from '../../variables';

interface IMain {
  filter?: TFiltersObject;
  setFilter?: (e: React.SetStateAction<TFiltersObject>) => void;
}

const Main: React.FC<IMain> = () => {
  const [filter, setFilter] = useState<TFiltersObject>(filtersItems[0]);

  return (
    <div className="flex flex-col justify-center items-center mt-8 ">
      <MainAddTask />

      <MainFilters filter={filter} setFilter={setFilter} />

      <MainTasks filter={filter} />

      <div className="my-14  text-xs text-center text-commonGrey">
        <div>Double-click on todo text to edit a task</div>
        <Link href="https://github.com/Yunost-79">Created by Yunost</Link>
      </div>
    </div>
  );
};

export default Main;
