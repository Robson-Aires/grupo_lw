import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Content from './components/Content.jsx';
import Profile from './components/Profile.jsx';
import Login from './components/login/SingUp.jsx'; // Importa a página de login
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rota para a página de login */}
        <Route path="/login" element={<Login />} />

        {/* Rota para o dashboard principal */}
        <Route
          path="/"
          element={
            <div className="dashboard">
              <Sidebar />
              <div className='dashboard--content'>
                <Content />
                <Profile />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
