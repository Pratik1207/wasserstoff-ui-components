type ButtonProps = {
    label: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
    disabled?: boolean;
  };
  
  const Button = ({ label, onClick, variant = "primary", disabled }: ButtonProps) => {
    const base = "px-4 py-2 rounded font-medium ";
    const styles = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-200 text-black hover:bg-gray-300",
    };
  
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${base} ${styles[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {label}
      </button>
    );
  };
  
  export default Button;
  