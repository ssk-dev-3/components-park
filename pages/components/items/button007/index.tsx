import buttonStyle from './button007.module.css';

const Button007 = () => {
  return (
    <button type="button" className={buttonStyle.button}>
      <span className={buttonStyle.circle} aria-hidden="true">
        <span className={buttonStyle.arrow}></span>
      </span>
      <span className={buttonStyle.text}>read more...</span>
    </button>
  );
}

export default Button007;
