import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import Catalog from './Catalog/Catalog';
import Header from './Header/Header';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
        {/* <Route path="/catalog/:id" element={<CarItem />}></Route> */}
        <Route></Route>
      </Routes>
    </div>
  );
};
