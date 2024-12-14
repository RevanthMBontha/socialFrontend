import { twMerge } from "tailwind-merge";

const Button = ({ className, children, onClick, disabled }) => {
  const styling = twMerge("p-2 px-4", className);

  return (
    <button disabled={disabled} onClick={onClick} className={styling}>
      {children}
    </button>
  );
};

export default Button;
