import { Navigate, Route, Routes } from "react-router-dom"
import { Characters } from "./pages"
import { RoutesApp } from "./models"

export const Navigation = () => {
  return (
    <Routes>
      <Route path={RoutesApp.CHARACTER} element={<Characters />} />
      <Route path="/*" element={ <Navigate to={RoutesApp.CHARACTER} replace />} />
    </Routes>
  )
}