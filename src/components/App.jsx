import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import Catalog from './Catalog/Catalog';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route></Route>
      </Routes>
    </div>
  );
};
