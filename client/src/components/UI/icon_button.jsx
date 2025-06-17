import React from 'react';
import PropTypes from 'prop-types';

const IconButton = ({ 
  icon, 
  ariaLabel, 
  onClick, 
  iconProps = {}, 
  children,
  ...rest
}) => {
  // Default classes for the button
  const defaultClasses = "p-3 rounded-full border-none bg-white hover:bg-gray-50 transition shadow-sm focus:outline-none"; 
  
  const iconClasses = "text-3xl transition";
  
  return (
    <button
      onClick={onClick}
      className={`${defaultClasses}`}
      aria-label={ariaLabel}
      type="button"
      {...rest}
    >
      {React.cloneElement(icon, { 
        className: iconClasses,
        ...iconProps
      })}
      {children}
    </button>
  );
};

IconButton.propTypes = {
  icon: PropTypes.element.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  iconProps: PropTypes.object,
  circular: PropTypes.bool,
  children: PropTypes.node
};

export default IconButton;