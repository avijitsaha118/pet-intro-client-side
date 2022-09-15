import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './login/Login';
import Register from './login/Register';
import RequireAuth from './login/RequireAuth';
import AddPet from './Pages/AddPet';
import Home from './Pages/Home';
import Header from './shared/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>


        <Route path='/information' element={
          <RequireAuth>
            <AddPet></AddPet>
          </RequireAuth>
        }></Route>

      </Routes>
    </div>
  );
}

export default App;
