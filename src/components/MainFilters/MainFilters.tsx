import { useMemo } from 'react';

import { TFiltersObject } from '../../types/typesAndInterfaces';
import { filtersItems } from '../../variables';

interface IMainFilter {
  filter: TFiltersObject;

  setFilter: (e: React.SetStateAction<TFiltersObject>) => void;
}

const MainFilters: React.FC<IMainFilter> = ({ filter, setFilter }) => {
  const handleChooseFilter = (item: TFiltersObject) => {
    setFilter(item);
  };

  const filteredItems = useMemo(() => {
    return filtersItems.map((item: TFiltersObject) => {
      return {
        ...item,
        active: filter.id === item.id,
        onClick: () => handleChooseFilter(item),
      };
    });
  }, [filter.id]);

  return (
    <div className="flex justify-center items-center gap-10 my-8">
      {filteredItems.map((item) => {
        return (
          <div
            className={`text-lg font-medium cursor-pointer ease-linear duration-200 hover:text-goldenYellow ${
              item.active ? 'text-goldenYellow' : 'text-white'
            }`}
            onClick={item.onClick}
            key={item.id}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
};

export default MainFilters;
