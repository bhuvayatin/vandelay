import { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorBoundary from './component/ErrorBoundary';
import { routes } from './Routes';
import LoadingSpinner from './component/LoadingSpinner';

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;