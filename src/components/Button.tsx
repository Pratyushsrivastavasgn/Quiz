import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  fullWidth = false,
  className = '',
}) => {
  const baseStyles = 'py-3 px-6 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500',
    secondary: 'bg-purple-500 hover:bg-purple-600 text-white focus:ring-purple-500',
    success: 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-500',
    warning: 'bg-amber-500 hover:bg-amber-600 text-white focus:ring-amber-500',
    error: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-500',
  };

  const widthStyles = fullWidth ? 'w-full' : '';
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'transform hover:-translate-y-1 active:translate-y-0';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;