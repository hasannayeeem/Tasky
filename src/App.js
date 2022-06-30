
import './App.css';
import Header from './Pages/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Todo from './Pages/Todo';
import CompletedTasks from './Pages/CompletedTasks';
import Calender from './Pages/Calender';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/todos' element={<Todo></Todo>}></Route>
          <Route path='/completedTasks' element={<CompletedTasks></CompletedTasks>}></Route>
          <Route path='/calender' element={<Calender></Calender>}></Route>
      </Routes>
    </div>
  );
}

export default App;
