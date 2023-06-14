import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import FilterDataWrapper from "./context/RestaurantContext"
import Detail from "./pages/Detail"
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ProtectedRoute from "./routes/ProtectedRoute"
import AuthRoute from "./routes/AuthRoute"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={
            <FilterDataWrapper>
              <Home />
            </FilterDataWrapper>} />
          <Route path="/detail/:id" element={<Detail />} />
        </Route>
        <Route element={<AuthRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<h1>not found</h1>} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
