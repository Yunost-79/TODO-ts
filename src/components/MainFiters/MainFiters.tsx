import { useState } from 'react';

interface IMainFilter {
  filter: string;
  setFilter: (e: React.SetStateAction<string>) => void;
}

const MainFiters: React.FC<IMainFilter> = ({ filter, setFilter }) => {
  const [isActive, setIsActive] = useState<number>();

  const fitersItems = [
    { id: 1, label: 'All' },
    { id: 2, label: 'Active' },
    { id: 3, label: 'Completed' },
  ];

  const handleChooseFilter = (id: number, label: string) => {
    setIsActive(id);
    setFilter(label);
  };

  return (
    <div className="flex justify-center items-center gap-10 my-8">
      {fitersItems.map(({ id, label }) => {
        return (
          <div
            className={`text-lg font-medium cursor-pointer ease-linear duration-200 hover:text-goldenYellow ${
              filter === 'All' ? 'first-of-type:text-goldenYellow' : isActive === id ? 'text-goldenYellow' : 'text-white'
            }`}
            onClick={() => handleChooseFilter(id, label)}
            key={id}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
};

export default MainFiters;
