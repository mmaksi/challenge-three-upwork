// Button.tsx
import React, { ReactNode } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {children}
    </button>
  );
};

export default Button;
