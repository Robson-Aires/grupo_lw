// src/components/ui/provider.jsx
import PropTypes from 'prop-types';

// Um Provider básico que você pode personalizar mais tarde
const Provider = ({ children }) => {
  return (
    <div>
      {/* Aqui você pode adicionar configurações globais ou contexto */}
      {children}
    </div>
  );
};

// Adicionando a validação das props
Provider.propTypes = {
  children: PropTypes.node.isRequired, // children deve ser um node do React
};

export default Provider;
