// src/components/ui/button.jsx
import PropTypes from 'prop-types';

const Button = ({ children, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}
    >
      {children}
    </button>
  );
};

// Validação das props
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func, // Pode ser opcional
};

// Exportação do componente
export default Button; // A exportação deve ser a default
