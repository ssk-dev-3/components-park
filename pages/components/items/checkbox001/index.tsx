import checkboxStyle from './checkbox001.module.css';

const Checkbox001 = () => {
  return (
    <label htmlFor="checkbox" className={checkboxStyle.switch}>
      <input type="checkbox" id="checkbox"  className={checkboxStyle.checkbox}/>
      <div className={checkboxStyle.slider}></div>
    </label>
  );
}

export default Checkbox001;
