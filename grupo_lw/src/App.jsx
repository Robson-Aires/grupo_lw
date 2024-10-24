import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './route.jsx';
import Demo from './components/login/SingUp.jsx'; // Importa a página de login
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rota para a página de login */}
        <Route path="/" element={<Demo />} />

        {/* Rota para o dashboard principal */}
        <Route
          path="/Dashboard" element={<Dashboard />}
        />
      </Routes>
    </Router>
  );
};

export default App;
