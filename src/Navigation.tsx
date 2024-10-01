import { Navigate, Route, Routes } from 'react-router-dom';
import { RoutesApp } from './models';
import { Characters, Episodes, Locations, Navbar } from './pages';

export const Navigation = () => {
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={RoutesApp.CHARACTERS} element={<Characters />} />
        <Route path={RoutesApp.EPISODES} element={<Episodes />} />
        <Route path={RoutesApp.LOCATIONS} element={<Locations />} />
        <Route
          path="/*"
          element={<Navigate to={RoutesApp.CHARACTERS} replace />}
        />
      </Routes>
    </>
  );
};
