import { BrowserRouter, Routes, Route } from "react-router"
import { ROUTES } from "./config/routes"
import { AppLayout } from "./layout/AppLayout"
import { HomePage } from "./pages/Homepage"
import { DetailedPage } from "./pages/DetailedPage"
import { NotFoundPage } from "./pages/NotFoundPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<AppLayout />}>
          <Route path={ROUTES.HOME} element={<HomePage />}/>
          <Route path={ROUTES.DETAILED_PAGE} element={<DetailedPage />}/>
        </Route>

        <Route path="*" element={<NotFoundPage />}/>  
      </Routes>
    </BrowserRouter>
  )
}

export default App
