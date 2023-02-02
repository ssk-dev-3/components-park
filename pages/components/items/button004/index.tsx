import buttonStyle from './button004.module.css';

const Button004 = () => {
  return (
    <div className={buttonStyle.wrapper}>
      <div className={buttonStyle.buttonBottom}></div>
      <button type="button" className={buttonStyle.button}>
        <span className={buttonStyle.text}>push</span>
      </button>
    </div>
  );
}

export default Button004;
