import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import MyLoans from './pages/MyLoans';
import Tables from './pages/Tables';
import DefaultLayout from './layout/DefaultLayout';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Biblioteca" />
              <Tables />
            </>
          }
        />
        <Route
          path="/my-loans"
          element={
            <>
              <PageTitle title="Mis préstamos" />
              <MyLoans />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Iniciar sesión" />
              <SignIn />
            </>
          }
        />
        
      </Routes>


    </DefaultLayout>
  );
}

export default App;
