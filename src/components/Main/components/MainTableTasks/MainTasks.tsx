import { useState } from 'react';

import MainEmpty from './components/MainEmpty';
import MainItemTable from './components/MainTable';

const MainTasks = () => {
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  return (
    <div className="flex flex-col justify-center items-center bg-headerColor w-3/5 px-6 py-10 rounded-lg">
      {isEmpty ? <MainEmpty /> : <MainItemTable />}
    </div>
  );
};

export default MainTasks;
