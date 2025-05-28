import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
  icon,
  rightIcon,
  required = false,
  className = '',
  ...rest
}) => {
 const passwordProps = type === 'password' && rightIcon ? {
    autoComplete: 'new-password'
  } : {};
  
  const inputClassName = `w-full bg-gray-50 border border-gray-200 rounded-md py-3 px-4 
    ${icon ? 'pl-12' : ''} 
    ${rightIcon ? 'pr-12' : ''}
    focus:outline-none focus:ring-1 focus:ring-teal-500 
    placeholder-gray-400 text-gray-700 
    ${type === 'password' && rightIcon ? 'password-input-no-reveal' : ''}
    ${className}`;

  return (
    <div className="relative w-full mb-4">
      {icon && (
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          {icon}
        </div>
      )}
      
      <input
        id={id}
        type={type}
        value={value}        
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={inputClassName}
        {...passwordProps}
        {...rest}
      />
      
      {rightIcon && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
          {rightIcon}
        </div>
      )}
    </div>
  );
};

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.element,
  rightIcon: PropTypes.element,
  required: PropTypes.bool,
  className: PropTypes.string
};

export default TextField;