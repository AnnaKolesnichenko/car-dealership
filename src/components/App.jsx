import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import Catalog from './Catalog/Catalog';
import Header from './Header/Header';
import Favorites from './Favorites/Favorites';
import { useState } from 'react';

export const App = () => {
  const [carsFavored, setCarsFavored] = useState([]);

  const getCarIdClicked = id => {
    console.log(id);
    setCarsFavored(prevState => [...prevState, id]);
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route
          path="/catalog"
          element={<Catalog getCarIdClicked={getCarIdClicked} />}
        ></Route>
        <Route
          path="/favorites"
          element={<Favorites carsFavored={carsFavored} />}
        />
        {/* <Route path="/catalog/:id" element={<CarItem />}></Route> */}
        <Route></Route>
      </Routes>
    </div>
  );
};
