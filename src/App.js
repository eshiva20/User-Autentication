import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from './Routes/ErrorFallback';
const DashBoard = lazy(() => import("./Routes/DashBoard"));
const Login = lazy(() => import("./Routes/Login"));
const Register = lazy(() => import("./Routes/Register"));
const NotFound = lazy(() => import("./Routes/NotFound"));


function App() {
  const PrivateRoute = () => {
    const token = localStorage.getItem("email");
    if (token) {
      return <DashBoard />;
    } else {
      return <Login />;
    }
  };

  return (
    <>
      <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={()=>{}}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashBoard />
                </PrivateRoute>
              }
            />
            <Route path="/:pagename" element={<NotFound />} />
          </Routes>
        </Suspense> 
        </ErrorBoundary>
      </BrowserRouter>
    </>
  );
}

export default App;
