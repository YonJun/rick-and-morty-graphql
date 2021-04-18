interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <button
    {...rest}
    className={`}py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ${rest.className}`}
    disabled>
    {children}
  </button>
);

export default Button;
