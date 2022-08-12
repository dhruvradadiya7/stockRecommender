const CheckBox = (props) => {
  const onChangeHandler = (e) => {
    props.checkBoxHandler(e.target.checked);
  };
  return (
    <label>
      <input
        name={props.label}
        type="checkbox"
        checked={props.checked}
        onChange={onChangeHandler}
      />
      <span>{props.label}</span>
    </label>
  );
};

export default CheckBox;
