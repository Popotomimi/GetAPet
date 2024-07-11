import styles from "./Input.module.css";

const Input = ({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value,
  multiple,
}) => {
  return (
    <div>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        {...(multiple ? { multiple } : "")}
      />
    </div>
  );
};

export default Input;
