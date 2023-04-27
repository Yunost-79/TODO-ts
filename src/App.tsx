import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen h-full bg-mainColor">
      <Header />
      <Main />
    </div>
  );
};

export default App;
