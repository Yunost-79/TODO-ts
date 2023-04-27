import emptyImage from '../../../../../image/empty-icon.svg';

const MainEmpty = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10">
      <img className="w-24 h-24" src={emptyImage} alt="" />
      <h3 className="mt-3 text-2xl font-normal">Tasks not found</h3>
    </div>
  );
};

export default MainEmpty;
