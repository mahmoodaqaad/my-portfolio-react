import React, { lazy, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Synchronous import for the preloader to fix FCP
import Preloader from './Components/Preloader/Preloader';

// Lazy load everything else
const Main = lazy(() => import('./Pages/Main/Main'));
const SingleProject = lazy(() => import('./Components/SingleProject/SingleProject'));
const Header = lazy(() => import('./Components/Header/Header'));
const Footer = lazy(() => import('./Components/Footer/Footer'));
const Background = lazy(() => import('./Components/Background/Background'));
const CursorFollower = lazy(() => import('./Components/CursorFollower/CursorFollower'));

function App() {
  return (
    <div className="App">
      <Preloader />

      <Suspense fallback={null}>
        <Background />
        <CursorFollower />
      </Suspense>

      <BrowserRouter>
        <Suspense fallback={null}>
          <Header />
        </Suspense>

        <Routes>
          <Route path='/' element={
            <Suspense fallback={null}>
              <Main />
            </Suspense>
          } />
          <Route path='/project/:id' element={
            <Suspense fallback={null}>
              <SingleProject />
            </Suspense>
          } />
        </Routes>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
