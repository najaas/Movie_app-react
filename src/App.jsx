import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/user page/Login';
import Signup from './pages/user page/Signup';
import Home from './pages/user page/Home';
import Adminform from "./pages/adminpage/movieaddform";
import FormProvider from './context/moviecontext';
import MovieList from './pages/adminpage/Movieshow';
import Card from "./pages/user page/cardshow"
// import Rt from './pages/user page/Rt';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path='/movieshow' element={<FormProvider><MovieList /></FormProvider>} />
        <Route path="/form" element={<Adminform />} />
        <Route path="/card" element={<Card />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
