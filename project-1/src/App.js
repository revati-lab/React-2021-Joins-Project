import { Routes, Route } from 'react-router-dom';

import AllJoinPage from './pages/AllJoin';
import NewJoinPage from './pages/NewJoin';
import FavoritesPage from './pages/Favorites';
import Layout from './components/Navigations/Layout';

function App() {
  //our domain localhost:3000
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<AllJoinPage />} />
          <Route path='/new-join' element={<NewJoinPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
