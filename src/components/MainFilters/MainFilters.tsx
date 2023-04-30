interface IMainFiter {
  filter: object;
  setFilter: (e: React.SetStateAction<string>) => void;
}

const MainFilters: React.FC<IMainFiter> = ({ filter, setFilter }) => {
  const fitersItems = [
    { id: 1, label: 'All', value: 'all' },
    { id: 2, label: 'Active', value: 'active' },
    { id: 3, label: 'Completed', value: 'completed' },
  ];

  const handleChooseFilter = (item: object) => {
    setFilter(item);
  };

  return (
    <div className="flex justify-center items-center gap-10 my-8">
      {fitersItems.map((item: object) => {
        return (
          <div
            className={`text-lg font-medium cursor-pointer ease-linear duration-200 hover:text-goldenYellow ${
              filter.id === item.id ? 'text-goldenYellow' : 'text-white'
            }`}
            onClick={() => handleChooseFilter(item)}
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
