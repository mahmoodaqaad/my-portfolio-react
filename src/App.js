import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Main from './Pages/Main/Main';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleProject from './Components/SingleProject/SingleProject';


import Background from './Components/Background/Background';
import CursorFollower from './Components/CursorFollower/CursorFollower';

function App() {
  return (
    <div className="App">
      <Background />
      <CursorFollower />

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/project/:id' element={<SingleProject />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default App;
