import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage/MainPage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
};
