import styles from "./Select.module.css";

const Select = ({ text, name, options, handleOnChange, value }) => {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}: </label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ""}>
        <option>Selecione a opção</option>
        {options.map((option) => (
          <option value={value} key={option}>
            {" "}
            {option}{" "}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
