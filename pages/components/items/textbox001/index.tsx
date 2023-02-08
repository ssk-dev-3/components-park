import textboxStyle from './textbox001.module.css';

const TextBox001 = () => {
  return (
    <div className={textboxStyle.wrapper}>
      <input type="text" required={true} className={textboxStyle.input}/>
      <div className={textboxStyle.bar}></div>
      <label className={textboxStyle.label}>
        <span className={textboxStyle.labelChar}>N</span>
        <span className={textboxStyle.labelChar}>a</span>
        <span className={textboxStyle.labelChar}>m</span>
        <span className={textboxStyle.labelChar}>e</span>
      </label>
    </div>
  );
}

export default TextBox001;
