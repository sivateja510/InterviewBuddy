import EditFrameInstance from './components/EditFrameInstance';
import FrameInstance from './components/FrameInstance';
import TaskBoards from './components/TaskBoards';
import logo from './logo.svg';
// import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<TaskBoards/>}/>
      <Route path='/Insert' element={<FrameInstance/>}/>
      <Route path='/Data' element={<EditFrameInstance/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
