type InputProps = {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
  };
  
  const Input = ({ label, value, onChange, placeholder }: InputProps) => {
    return (
      <div className="mb-4">
        {label && <label className="block mb-1 font-medium">{label}</label>}
        
        {/* This input will trigger onChange with the new text */}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="border px-3 py-2 w-full rounded"
        />
      </div>
    );
  };
  
  export default Input;
  