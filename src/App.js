import { Route, Routes } from 'react-router-dom'
import { Login, Main } from './components';

const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
