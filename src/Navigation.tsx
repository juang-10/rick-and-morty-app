import { Navigate, Route, Routes } from 'react-router-dom';
import { Characters, Episodes, Locations } from './pages';
import { RoutesApp } from './models';

export const Navigation = () => {
  return (
    <Routes>
      <Route path={RoutesApp.CHARACTERS} element={<Characters />} />
      <Route path={RoutesApp.EPISODES} element={<Episodes />} />
      <Route path={RoutesApp.LOCATIONS} element={<Locations />} />
      <Route
        path="/*"
        element={<Navigate to={RoutesApp.CHARACTERS} replace />}
      />
    </Routes>
  );
};
